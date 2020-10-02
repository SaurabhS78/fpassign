import React, { useEffect, useState } from "react";
import statusBar from "./assets/statusbar.svg";
import Home from "./components/home";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    var url =
      "https://9520df26-373d-4c19-9353-e2d4576bdbfc.mock.pstmn.io/home/";

    async function request() {
      try {
        const response = await fetch(url);
        const jsonObj = await response.json();
        setData(jsonObj);
      } catch {
        console.log("error");
      }
    }
    request();
  }, []);

  return (
    <div className="mobile-section">
      <img src={statusBar} alt="" />
      <Home data={data} />
    </div>
  );
}

export default App;
