import logo from "./logo.svg";
import "./App.css";
import  {SkiplySession as Session}  from "skiply/build/umd";
import { useEffect, useState } from "react";
function App() {
  const fetchData = async () => {
    const res = await Session.appInfo();
    setData(res);
  };
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Fetching app info: {data?.status?.message}
        </p>
        
      </header>
    </div>
  );
}

export default App;
