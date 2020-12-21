import React from 'react';
import CarouselPage from "./CarouselPage"
import "./home.css"
import YouTubePlayer from "react-player/youtube";
import FooterPage from "./FooterPage";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="animation-holder">
          <p className="floating-text">𝒏𝒐𝒖𝒗𝒆𝒂𝒖𝒕𝒆 𝒑𝒓𝒐𝒎𝒐𝒕𝒊𝒐𝒏 𝒋𝒖𝒔𝒒'𝒂𝒖 70%</p>
        </div>
        <div className="carousel-holder">
          <CarouselPage />
        </div>

        <div>
          <h1>𝑳’𝒂𝒑𝒑𝒂𝒓𝒆𝒏𝒄𝒆 𝒆𝒔𝒕 𝒍𝒆 𝒗ê𝒕𝒆𝒎𝒆𝒏𝒕 𝒅𝒆 𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒏𝒂𝒍𝒊𝒕é</h1>
        </div>
        <br />
        <div className="video-player">
          <YouTubePlayer
            url="https://www.youtube.com/watch?v=2LCNqRj6tJU&t=1s"
          />
        </div>
        <div>
          <FooterPage />
        </div>
      </div>
    )
  }
}

export default Home;