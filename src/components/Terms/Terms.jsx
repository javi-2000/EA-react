import React from "react";
import '../../styles/terms/terms.css'

export default function Terms()  {
  const enlaceEaPlayTerms = (
    <a href="https://www.ea.com/legal/ea-play-terms" className="terms-a">
      EA PLAY TERMS
    </a>
  );

  return (
    <div id="terms-container">
      <p className="terms-p">
        *CONDITIONS, LIMITATIONS AND EXCLUSIONS APPLY. SEE {enlaceEaPlayTerms} FOR DETAILS.
      </p>
    </div>
  );
};


