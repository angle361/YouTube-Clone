import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import VideoPlayer from "./VideoPlayer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          
          <Route path="/vedioplayer/:pg_no/:url">
            <div className="app_page">
              <Sidebar />
              <VideoPlayer />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
