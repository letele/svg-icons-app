import { useEffect, useState } from "react"
import {
    Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R
} from "@letele/svg-icons"
import {dataAnalystStats} from "../data"

export function ProgressCircle(){
 
    const [active, setActive]= useState(null)

    const [rate, setRate]= useState(1)

    useEffect(()=>{
        let intervalId, end
        if(active){
            intervalId = setInterval(()=>{
                setRate(prev => {
                    end  = prev + 1
                    return end
                })
                end+1===active.rate*100
                && clearInterval(intervalId)
                
            },20)
        }

        return () => clearInterval(intervalId)
    },[active])

    const handleActive = (i) => {
        setRate(0)
        setActive(active?i.name===active.name?null:i:i)
    }

    const icons = {Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R}
  
    const activeConic = (active) => `conic-gradient(
        ${active.color} ${(rate/100)*360}deg, #ccc 0deg
    )`
    
    const defaultConic = (i) => `conic-gradient(
        #8dc0d4 ${i.rate*360}deg, #ccc 0deg
    )`

    const setConic = (i) => active && active.color===i.color ?
    activeConic(active):defaultConic(i)

    const Progress = ({i}) => {
        const Icon = icons[i.name]
        const outerCircleStyles = "por h-90px w-90px flex ali-c jus-c br-50pc" 
        const innerCircleStyles = "bg-white h-70px w-70px flex ali-c jus-c br-50pc"
        return(
            <div className="w-90px por">
                <div 
                    className={outerCircleStyles}
                    style={{background:setConic(i)}}
                    onClick={() => handleActive(i)}
                   
                >
                    <div className={innerCircleStyles}>  
                        {active && active.name===i.name ? 
                        <div className="fs-15em  fw-bold"> 
                            {rate}% 
                        </div> : <Icon className="fs-25em"/>}
                    </div>
                </div>
                <div className="fs-11em mt-03em txt-c" >{i.name}</div>
            </div>
        )
    }

    const divStyles = "w-100pc flex flex-wrap gap-15em pl-1em"

    return(
        <div>
            <h3 className="mb-1em txt-c">Data analysis tools</h3>
            
            <div className={divStyles}>{
                dataAnalystStats.map(i => <Progress key={i.name} i={i}/> 
            )}</div>
            
            {active && active.rate===rate/100 && <p className="m-1em"> 
                Nota Bene: % indicates the confidence level of using the tool.
            </p>}
        </div>
    );
}