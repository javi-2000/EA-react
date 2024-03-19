import React from 'react';

const linksTopFooter = [
    { texto: "Careers", Link: "https://www.ea.com/careers" },
    { texto: "Executives", Link: "https://www.ea.com/executives" },
    { texto: "Impact Report", Link: "https://www.ea.com/news/2023-impact-report" },
    { texto: "Our Commitments", Link: "https://www.ea.com/commitments" },
    { texto: "Partner With Us", Link: "https://www.ea.com/brand-partnerships" },
  ];

export  default function LocalLinks() {
    return (
      
        <div id="footer-container">
          {linksTopFooter.map((link, index) => (
            <a key={index} href={link.Link} className="local-links">
              {link.texto}
            </a>
          ))}
        </div>
    );
  }

 

  


