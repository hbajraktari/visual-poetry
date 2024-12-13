import React, { useState } from "react";
import "../styles/pages/_createpoem.css";
import images from "../assets/assets";
import "../styles/main.css";
import Footer from "../components/Footer";

// Generator with Validation
function CreatePoem() {
  const [poemTopic, setPoemTopic] = useState("");
  const [poemText, setPoemText] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!poemTopic) {
      newErrors.poemTopic = "Poem topic is required!";
    }

    if (!poemText) {
      newErrors.poemText = "Poem text is required!";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setPoemTopic("");
      setPoemText("");
    }
  };

  return (
    <div>
      <div className="poem-sec">
      <h1>
        Generate your own form of poetic 
        <span className="underline-design">{' '}
          art <img src={images.underlineDesign} alt="doodle design" />
        </span>
      </h1>
      <form className="poem-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Poem Topic"
          value={poemTopic}
          onChange={(e) => setPoemTopic(e.target.value)}
          className="poem-input"
        />
        {errors.poemTopic && <p className="error-text">{errors.poemTopic}</p>}
        <textarea
          placeholder="Poem Text"
          value={poemText}
          onChange={(e) => setPoemText(e.target.value)}
          className="poem-textarea"
        ></textarea>
        {errors.poemText && <p className="error-text">{errors.poemText}</p>}
        <button type="submit" className="main-btn">
          Create ArtForm
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
}

export default CreatePoem;