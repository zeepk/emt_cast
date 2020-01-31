import React from "react";
import "./App.css";
import "./components/styling/bg_line.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/custom_navbar";
import Dot from "./components/time_dot";
import EpisodeCard from "./components/episode_card";
function App() {
  const data1 = {
    title: "What does EMT stand for?",
    time: "45:16",
    description: "Let's find out in this episode."
  };
  const data2 = {
    title: "How I Became an EMT",
    time: "56:12",
    description: "Sharing my story."
  };
  return (
    <div className="App">
      {/* <header className="header">
        <CustomNavbar />
      </header> */}
      <div className="latestEpisode">
        <EpisodeCard data={data1} />
      </div>
      <div className="randomEpisode">
        <EpisodeCard data={data2} />
      </div>
      <Dot />
    </div>
  );
}

export default App;
