import React from 'react';
import "../styles/components/_about.css";

function AboutSec() {
  return ( 
    <div className='who-we-are'>
      <h2>Who We Are</h2>
      <div className="content">
        <div className="column">
          <span className='ab-text'>VerseVisions</span>, a place where words come alive through the vibrant interplay of poetry and visual art. 
          I’m passionate about the power of language to evoke emotions and spark imagination, dive into a world where poetry meets boundaries and artistry knows no limits.
        </div>
        <div className="column">
          Our journey is one of discovery, a fusion of words and visuals that transforms emotions into art. Visual poetry is 
          more than just an expression, it’s a bridge between language and imagery, where each poem tells a story, and every 
          design brings it to life.
        </div>
        <div className="column">
          We are here to bring poetry to life through the transformative power of visuals. Our platform is a celebration of 
          creativity, where words and design come together to tell stories that move, inspire, and connect.
        </div>
      </div>
    </div>
   );
}

export default AboutSec;