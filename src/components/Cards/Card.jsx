export default function Card( {tabs, tabId} ){

    return(
        <div className="card">
            {tabs[tabId]?.content ? tabs[tabId].content.map((card) => (
                <a className="card-link" href="/" target="_blank" key={card.cardId}>
                    <img className="card-img" src={card.image} alt={card.title} />
                    <div className="card-txt">
                        <div className="card-date"><span className="red-title">{card.name}</span>{card.date}</div>        
                        <div className="card-title">{card.title}</div>
                        <div className="card-description">{card.description}</div>
                    </div>
                </a>
            )) : null}
        </div>
    )
}