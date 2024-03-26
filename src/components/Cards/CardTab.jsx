import { useState } from "react";
import Card from "./Card";
import "../../styles/cards/cards.css";

export default function CardTab({ tabs }) {
    const [tabId, setTabId] = useState(0);
  
    function handleClick(tab) {
      const { id } = tab;
      setTabId(id);
      console.log(id);
    }
  
    return (
      <>
        <div className="select-container">
          {tabs.map((tab) => (
            <div
              className={`select ${tabId === tab.id ? 'selected' : ''}`} // Aplicación condicional de la clase
              onClick={() => handleClick(tab)}
              key={tab.id}
            >
              {tab.title}
            </div>
          ))}
        </div>
  
        <Card tabs={tabs} tabId={tabId} />
      </>
    );
  }
  