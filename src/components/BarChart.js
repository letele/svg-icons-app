import {
    Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R
} from "@letele/svg-icons"
import { useState } from "react"

import {dataAnalystStats} from "../data"

export function BarChart(){

    const [active, setActive]= useState(null)

    const icons = {Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R}
    
    
    const Bars = () => {
        
        const getHeight = rate => `calc(${rate} * calc(210px - 0.5em))`
        
        const setBackground = (i) => active &&
        active.name === i.name? i.color : "#8dc0d4"

        const u1Styles = "poa w-100pc h-100pc flex jus-even trotX-180"
        
        const spanStyles = `
            poa b--35px bg-ccc br-50pc flex ali-c jus-c 
            fs-15px w-30px h-30px hov-b-ccc hov-bgfff
        `
        
        return (
            <ul className={u1Styles}>{
                dataAnalystStats.map(i => {
                    const Icon = icons[i.name]
                    return (
                        <li 
                            key={i.name}
                            className="por w-10pc trotX-180 "
                            style={{height:getHeight(i.rate), 
                                background:setBackground(i)
                            }}
                        >
                            <span 
                                style={{left:"calc(0.5 * calc(100% - 30px))"}}
                                className={spanStyles}
                                onClick={() => setActive(
                                    active?i.name===active.name?null:i:i
                                )}
                            >
                                <Icon />
                            </span> 
                        </li>
                    )
                })
            }</ul>
        )
    }
    
    const Chart = () => {

        const ulStyles = "w-420px h-210px por grid bb-black bl-black pt-05em ml-auto"

        return (
            <article className="h-300px w-450px ml-2em por">
                <h3 className="txt-c mb-05em">Data analysis tools</h3>
                <span className="poa trot-90 t-100px l--08em">Ranking</span>
                <span className="poa b-0 l-50pc">Tools</span>
                <ul className={ulStyles}>
                    {[5,4,3,2,1].map(i => <li key={i} className="por btdash-lgray">
                        <span className="poa l--08em t--06em">{i}</span>
                    </li>)}
                    <Bars />
                </ul>
            </article>
        )
    }

    const Info = ({iconName}) => {
        const Icon = icons[iconName]
        return (
            <ul className="ml-2em">
                <li className="mb-03em"><Icon className="fs-25em mr-03em"/>{iconName}</li>
                <li>Confidence level: {Math.round(active.rate*100)}%</li>
            </ul>
        )
    }
    
    return (
        <div>

            <article>
                <Chart />
                <div className="ml-2em">
                    {active && <Info iconName={active.name}/>}
                </div>

            </article>
        </div>
    )

}