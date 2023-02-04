import {  useState } from "react"
import {
    Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R
} from "@letele/svg-icons"

import {dataAnalystStats} from "../data"

export function BarChart(){

    const [active, setActive]= useState(null)
    
    const icons = {Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R}
    
    const Bars = () => {

        const getHeight = rate => `calc(${rate} * calc(210px - 0.5em))`

        const u1Styles = "poa w-100pc h-100pc flex jus-even rotX-180"

        const liStyles = `
            por w-10pc rotX-180 bg-8dc0d4 flex ali-e jus-c
        `
        
        const spanStyles = `
            poa b--35px bg-ccc br-50pc flex ali-c jus-c 
            fs-15px w-30px h-30px hov-bdccc hov-bgfff
        `
        
        return (
            <ul className={u1Styles}>
                <style>{`
                    @keyframes fill{
                        from{height: 0;}
                        top{height: 100%;}
                    }
                `}</style>
                {
                dataAnalystStats.map(i => {
                    const Icon = icons[i.name]
                    return (
                        <li 
                            key={i.name}
                            className={liStyles}
                            style={{height:getHeight(i.rate)}}
                        >
                            {active && active.name===i.name && <div 
                                className="poa w-100pc h-100pc fill"
                                style={{
                                    background: i.color,
                                    animation:`fill ${i.rate*1000}ms linear forwards`
                                }}
                            ></div>}
                            
                            <span 
                                style={{left:"calc(0.5 * calc(100% - 30px))"}}
                                className={spanStyles}
                                onClick={() => setActive(active?i.name===active.name?null:i:i)}
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

        const ulStyles = "w-420px h-210px por grid bb-555 bl-555 pt-05em ml-auto"

        return (
            <article className="h-300px w-450px ml-2em por nunitosans">
                <h3 className="txt-c mb-05em">Data analysis tools</h3>
                <span className="poa rot--90 t-115px l--18em lsp-05em">Confidence</span>
                <span className="poa b--10px l-50pc lsp-05em">Tools</span>
                <ul className={ulStyles}>
                    {[5,4,3,2,1].map(i => <li key={i} className="por btd-9c9c9c">
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
            <ul className="ml-2em nunitosans">
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