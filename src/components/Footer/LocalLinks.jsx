import React, {useState, useEffect} from 'react';
import locallinks from '../../database/footer/locallinks.json'

export default function LocalLinks() {
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    setLinksData(locallinks);
  }, []);

  return (
    <div id="footer-container">
      {linksData.map((link, index) => (
        <a key={index} href={link.Link} className="local-links">
          {link.texto}
        </a>
      ))}
    </div>
  );
}



 

  


