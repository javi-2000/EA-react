import { useEffect, useState } from "react"
import { tabFetching } from "../../services/tabFetch"


export default function CardTab(){
    const [tabs, setTabs] = useState([])

        useEffect(()=>{
            async function fetchingTabs(){
                const data = await tabFetching()
                setTabs(data)
            }
            fetchingTabs()
        }, [])

    return(
        <div>
            {tabs.map((tab) => (
            <div key={tab.id}>{tab.title}</div>
            ))}
        </div>
    )
}