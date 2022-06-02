import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Slider from "react-slick";
import { Settings } from "./common/settings";
import { style } from "@mui/system";
import MoviesList from "./pages/MoviesList";

const styles = {
  app: {
    backgroundColor: "#E5E5E5",
    height: "100vh",
    width: '100%',
  },
  animecontainer: {
    display: "flex",
    flexWrap: "wrap",
  },
};

function App() {

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="App" style={styles.app}>
        <h1
          style={{
            fontFamily: "Noto Serif JP",
            fontSize: "36px",
            fontWeight: "700",
            color: "#00CC99",
            paddingTop: "50px",
          }}
        >
          Список Аниме
        </h1>
        <Search />
        <div style={styles.animecontainer}>
          <MoviesList />
        </div>
      </div>
    </>
  );
}

export default App;
