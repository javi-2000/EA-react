import { useEffect, useState } from "react"
import { tabFetching } from "../../services/tabFetch"
import CardTab from "./CardTab"


export default function CardHeader(){
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
            <CardTab tabs={tabs}/>
        </div>
    )
}