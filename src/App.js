import React, { useEffect, useState } from "react";
import statusBar from "./assets/statusbar.svg";
import Home from "./components/home";
import { useSwipeable } from "react-swipeable";
import ErrorScreen from "./components/errorScreen";
import Loading from "./components/loading";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var url =
      "https://9520df26-373d-4c19-9353-e2d4576bdbfc.mock.pstmn.io/home/";

    async function request() {
      try {
        const response = await fetch(url);
        const jsonObj = await response.json();
        setData(jsonObj);
        setLoading(false);
      } catch (err) {
        setError(String(err));
        setLoading(false);
      }
    }
    request();
  }, []);

  const config = {
    delta: 10,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
  };

  const eventHandler = (e) => {
    if (e.deltaY < -100) {
      window.location.reload(false);
    }
  };

  const handlers = useSwipeable({
    onSwipedDown: eventHandler,
    ...config,
  });

  if (error) {
    return <ErrorScreen error={error} />;
  } else if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="mobile-section" {...handlers}>
        <img src={statusBar} alt="" />
        <Home data={data} />
      </div>
    );
  }
}

export default App;
