import { useWindowDimensions } from "@letele/hook-me-up"
import { useState } from "react"



import { BarChart,ProgressCircle, GraphChart,withLayout } from "../components"

function Repertoire(){

    const [active, setActive] = useState(null)

    const{width} = useWindowDimensions()
    
  
    return(
        <section className="poa w-100pc t-60px pt-05em ov-auto">
            <ul className="ml-1em flex gap-15em">
                <li onClick={() => setActive("data")}>Data analysis</li>
                <li onClick={() => setActive("web")}>Web development</li>
            </ul>

            <article className="pt-05em">
            {active==='data' && (width>=800 ? <BarChart />: <ProgressCircle />)}
            {active==='web' && <GraphChart />}

            </article>    
        </section>
    )
}

export default withLayout(Repertoire, "Repertoire")