import { useEffect, useState } from "react"
import {
    Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R
} from "@letele/svg-icons"

import {dataAnalystStats} from "../data"

export function BarChart(){

    const [active, setActive]= useState(null)

    
    const ActiveBar = ({i}) =>{
        const [rate, setRate]= useState(1)
        useEffect(()=>{
            let intervalId,end
            
            intervalId = setInterval(()=>{
                setRate(prev => {
                    end  = prev + 1
                    return end
                })
                end===i.rate*100
                && clearInterval(intervalId)
                
            },20)
            
            return () => clearInterval(intervalId)
        // eslint-disable-next-line
        },[])

        const perc = (rate-1)/(i.rate*100)

        return (
            <div 
                className="poa w-100pc"
                style={{
                    background: i.color,
                    height: `calc(${perc} * 100%)`,
                }}
            ></div>
        )
    }
    
    const icons = {Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R}
    
    const Bars = () => {

        const getHeight = rate => `calc(${rate} * calc(210px - 0.5em))`

        const u1Styles = "poa w-100pc h-100pc flex jus-even trotX-180"

        const liStyles = `
            por w-10pc trotX-180 bg-8dc flex ali-e jus-c
        `
        
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
                            className={liStyles}
                            style={{height:getHeight(i.rate)}}
                        >
                            <span 
                                style={{left:"calc(0.5 * calc(100% - 30px))"}}
                                className={spanStyles}
                                onClick={() => setActive(active?i.name===active.name?null:i:i)}
                            >
                                <Icon />
                            </span> 
                            {active && active.name===i.name && 
                               <ActiveBar i={i}/>
                            }
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