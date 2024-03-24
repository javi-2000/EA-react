
import React, { useState, useEffect } from 'react';
import sociallinks from '../../database/footer/sociallinks.json';

export default function SocialLinks() {
  const [redes, setRedes] = useState([]);

  useEffect(() => {
    
    setRedes(sociallinks);
  }, []);

  const redirectToLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="social-links-container">
      <h3 className="title-social-links">Join The Conversation</h3>
      <div className="social-icons-container">
        {redes.map((red, index) => (
          <img
            key={index}
            className="svg-social-media"
            src={red.icono}
            alt={`Social icon ${index}`}
            onClick={() => redirectToLink(red.redirectLink)}
          />
        ))}
      </div>
    </div>
  );
}

