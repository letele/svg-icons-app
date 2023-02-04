import { useState } from "react"
import { useInterval } from "@letele/hook-me-up"
import {
    Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R
} from "@letele/svg-icons"

import {dataAnalystStats} from "../data"
import {  withProgress } from "."

export function ProgressCircle(){
 
    const [active, setActive]= useState(null)

    const handleActive = i => setActive(
        active ? (i.name===active.name ? null:i) : i
    )

    const icons = {Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R}

    const Progress = ({i}) => {
       
        const interval = useInterval(0,i.rate*100,15)
        const Perc = () => <div className="fs-18em">
            {interval}<span className="fs-07em">%</span>
        </div>
       
        const Icon = icons[i.name]
        const WrappedIcon = () => <div className="fs-25em mt-03em"><Icon /></div>

        const PercProgress = withProgress(Perc,45,0.18,interval,i.color,"#ccc")
        
        const IconProgress = withProgress(
            WrappedIcon,45,0.18,i.rate*100,"#ccc","#ccc"
        )

        return (
            <div onClick={() => handleActive(i)}>
                {active && active.name === i.name ? 
                    <PercProgress /> : <IconProgress />
                }
                
                <div className="mt-03em txt-c fs-11em">{i.name}</div>
            </div>
        )
    }

    const divStyles = "w-100pc flex flex-wrap gap-15em pl-1em"

    return(
        <div className="nunitosans">
            <h3 className="mb-1em txt-c">Data analysis tools</h3>
            
            <div className={divStyles}>{
                dataAnalystStats.map(i => <Progress key={i.name} i={i}/>)
            }</div>
  
            {active && <p className="m-1em"> 
                <strong>Nota Bene</strong>: 
                % indicates the confidence level of using the tool.
            </p>}
        </div>
    )
}