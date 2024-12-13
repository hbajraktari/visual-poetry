import React, { useState, useRef } from "react";
import "../styles/components/_visualpoems.css";
import images from "../assets/assets";
import {poems} from "../assets/assets";


function VisualPoems() {
  const [state, setState] = useState(
    poems.map((poem) => ({
      id: poem.id,
      isFavorite: false,
      isPlaying: false,
    }))
  );

  const audioRefs = useRef({});

  const toggleAudio = (id) => {
    setState((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? {
              ...item,
              isPlaying: !item.isPlaying,
            }
          : item
      )
    );

    const audioElement = audioRefs.current[id];
    if (audioElement) {
      audioElement.paused ? audioElement.play() : audioElement.pause();
    }
  };

  const toggleFavorite = (id) => {
    setState((prevState) =>
      prevState.map((item) =>
        item.id === id
          ? { ...item, isFavorite: !item.isFavorite }
          : item
      )
    );
  };

  return (
    <div className="visual-poems-sec">
      <h1>Visual Poetry</h1>
      {poems.map((poem) => {
        const poemState = state.find((item) => item.id === poem.id);
        return (
          <div className="vp-container" key={poem.id}>
            <div className="left-side">
              <h2>{poem.title}</h2>
              <p>{poem.text}</p>
              <img
                src={poemState.isFavorite ? images.redHeart : images.clearHeart}
                alt="Heart Icon"
                className="vp-visual-icons"
                onClick={() => toggleFavorite(poem.id)}
              />
              <img
                src={
                  poemState.isPlaying ? images.pauseListen : images.listenIcon
                }
                alt="Audio Icon"
                className="vp-visual-icons"
                onClick={() => toggleAudio(poem.id)}
              />
              <audio
                ref={(el) => (audioRefs.current[poem.id] = el)}
                src={poem.audioSrc}
              />
            </div>
            <div className="right-side">
              <img
                src={poem.image}
                alt="Art referring to poem"
                className="vp-visual1"
              />
              <p>By {poem.author}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VisualPoems;
