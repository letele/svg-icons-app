import {
    Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R
} from "@letele/svg-icons"
import { useState } from "react"

import {dataAnalystStats} from "../data"

export function BarChart(){

    const [active, setActive]= useState(null)

    const icons = {Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R}

    const [height, width] = ["210px","420px"]

    const Chart = () => {

        return (
            <article className="h-300px w-450px ml-2em por">
                <h3 className="txt-c mb-05em">Data analysis toools</h3>
                <span className="poa trot-90 t-100px l--08em">Ranking</span>
                <span className="poa b-0 l-50pc">Tools</span>
                <ul 
                className={`bar-chart por grid bb-black bl-black pt-05em ml-auto`}
                style={{height,width}}
                >
                    {[5,4,3,2,1].map(i => <li key={i} className="por btdash-lgray">
                        <span className="poa l--08em t--06em">{i}</span>
                    </li>)}
                    <ul className="poa w-100pc h-100pc flex jus-even trotX-180">{
                        dataAnalystStats.map(i => {
                            const Icon = icons[i.name]
                            return (
                                <li 
                                    key={i.name}
                                    className="por w-10pc trotX-180 bg-lblue"
                                    style={{height:`calc(${i.rate} * calc(${height} - 0.5em))`}}
                                >
                                    <span 
                                        style={{left:"calc(0.5 * calc(100% - 30px))"}}
                                        className="poa b--35px bg-lgreen br-50pc flex ali-c jus-c fs-15px w-30px h-30px"
                                        onClick={() => setActive(i)}
                                    >
                                        <Icon />
                                    </span> 
                                </li>

                            )
                        })
                    }</ul>
                </ul>
            </article>
        )
    }

    const Info = ({iconName}) => {
        const Icon = icons[iconName]
        return (
            <ul>
                <li><Icon /> {iconName}</li>
                <li>Rating: {Math.round(active.rate*100)}%</li>
                <li> Nota Bene: % only indicates the confidence level of using the tool.</li>
            </ul>
        )
    }
    
    return (
        <div>

            <article>
                <Chart />
                <div className="ml-2em">
                    {active && <Info iconName={active.name}/>}

                    <ul>
                        <li>Favorate tools: Pandas, PostreSql, Pytorch</li>
                        <li>Least favorate: MS Excel,Matplotlib</li>
                        <li>Most Used: Numpy, MS Excel</li>
                        <li>In progress: Pytorch</li>
                        <li>Pending: R</li>
                    </ul>

                </div>

            </article>
        </div>
    )

}