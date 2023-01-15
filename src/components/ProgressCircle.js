import { useState } from "react"
import {
    Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R
} from "@letele/svg-icons"
import {dataAnalystStats} from "../data"

export function ProgressCircle(){
 
    const [active, setActive]= useState(null)

    const icons = {Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R}

    const setBackground = (i) => active ?
    active.name === i.name? i.color : "#8dc0d4":"#8dc0d4"

    const progress = (i) => `conic-gradient(
        ${setBackground(i)} ${i.rate*360}deg, #ccc 0deg
    )`


    const Circles = () => {
        return (
            <div className="w-100pc flex flex-wrap gap-15em pl-1em">{dataAnalystStats.map(i => {
                 const Icon = icons[i.name]
                 
                 return(
                     <div key={i.name} className="w-90px por">
                         <div 
                             className=" por h-90px w-90px flex ali-c jus-c br-50pc"
                             style={{background:progress(i)}}
                             onClick={() => setActive(
                                active?i.name===active.name?null:i:i
                            )}
                            
                         >
                             <div className="bg-white h-70px w-70px flex ali-c jus-c br-50pc">
                                 <Icon className="fs-25em"/>  
                             </div>
                         </div>
                         <div className="fs-11em mt-03em txt-c" >{i.name}</div>
                         {active && active.name===i.name && 
                         <div className="poa t-0 fs-15em  fw-bold"> 
                             {Math.round(i.rate*100)}% 
                         </div>}
                     </div>
                 )
            })}</div>
        )
    }

    return(
        <div>
            <h3 className="mb-1em txt-c">Data analysis tools</h3>
            <Circles />
            {active && <p className="m-1em"> 
                Nota Bene: % indicates the confidence level of using the tool.
            </p>}
        </div>
    );
}