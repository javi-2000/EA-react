import { useState } from "react";
// import Card from "./Card";

export default function CardTab( {tabs} ){

    const [tabId, setTabId] = useState(0)

    function handleClick (tab) {
        const {id} = tab
        setTabId(id);
        console.log(id);
    }
console.log(tabs);

    return(
        <>
            <div>
                {tabs.map((tab) => (
                <div onClick={()=> handleClick(tab)} className="select" key={tab.id}>{tab.title}</div>
                ))}
            </div>
            <div>

                {tabs[tabId] && tabs[tabId].content ? tabs[tabId].content.map((card) => (
    <div key={card.cardId}>
    <div>{card.name}</div>
    <div>{card.date}</div>
    <div>{card.title}</div>
    <div>{card.description}</div>
</div>
    ))

                
            }




            </div>

        </>
    )
}