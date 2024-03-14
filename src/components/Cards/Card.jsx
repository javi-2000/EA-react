export default function Card( {tabs, tabId} ){

    return(
        <div>
        {tabs[tabId].content.map((card) => (
        <div key={card.cardId}>
            <div>{card.name}</div>
            <div>{card.date}</div>
            <div>{card.title}</div>
            <div>{card.description}</div>
        </div>

        ))}
    </div>
    )
}