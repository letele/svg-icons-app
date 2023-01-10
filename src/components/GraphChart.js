import { useState } from "react"
import {
    Hand,Html5,Css3,Javascript,Firebase,React,
    Next,Typescript,Flask, Puppeteer
} from "@letele/svg-icons"

import {webDevStats} from "../data"

export function GraphChart(){

    const [active, setActive]= useState(null)

    const icons = {
        Html5,Css3,Javascript,Firebase,React,
        Next,Typescript,Flask, Puppeteer
    }

    const pos = [
        [8,3,30,275],[13,2,50,315],[14,7,44,354],[14,11,50,28],
        [9,13,38,74],[4,14,50,119],[2,10,41,153],[1,4,50,210],
        [4,1,50,240],
    ]


    const progress = ratio => `conic-gradient(
        #0da7e4 ${ratio*360}deg, #ccc 0deg
    )`

    
    const Edges = () => {
        return (
            webDevStats.map((i,j) => {
                const gridColumn = `${pos[j][0]}/${pos[j][0]+2}`
                const gridRow = `${pos[j][1]}/${pos[j][1]+2}`
                const Icon = icons[i.name]
                return (
                    <div 
                        key={`no${j}`}
                        style={{background:progress(i.rate),gridColumn, gridRow}}
                        className="br-50pc fs-11em por"
                        onClick={() => setActive(i)}
                    >
                        <div className="poa t-15pc l-15pc h-70pc w-70pc bg-white br-50pc flex ali-c jus-c">
                            <Icon />
                        </div>
                    </div>
                )
            })
        )
    }
    
    const Vertices = () => {
        return(
            pos.map((i,j)=>{
                return(
                    <div 
                        key={j}
                        className={`line poa l-50pc t-50pc z--1 bt-blue torigin-tl`}
                        style={{
                            width:`${i[2]}%`,
                            transform:`rotate(${i[3]}deg)`
                        }}
                    ></div>
                )
            })
        )
    }

    const Center = () => {
        return (
            <div 
                className="bg-green br-50pc flex ali-c jus-c fs-25em"
                style={{gridColumn:"7/10",gridRow:"7/10"}}
            >
                <Hand />
            </div>
        )
    }

    const Graph = () => {
        return (
            <div className="grid gr-c15 gr-r15 w-330px h-330px por ml-2em ov-auto">
                <Center />    
                <Edges />
                <Vertices />
            </div>
        )
    }

    const Info = ({iconName}) => {
        const Icon = icons[iconName]
        return (
            <div>
                <p><Icon /> {active.name}</p>
                <p>rating: {active.rate*100}%</p>
                <p> Nota Bene: % only indicates the confidence level of using the tool.</p>
            </div>
        )
    }

    return (
        <div className="w-fcnt">
            <h3 className="ml-1em mb-1em txt-c">Web development toools</h3>
            
            <div className="flex flex-wrap gap-15em">
                <Graph />
            
                <article className="ml-2em">
                    {active && <Info iconName={active.name}/>}
                    <ul className="mt-1em">
                        <li>Favorate tools: Css3, React, Javascript</li>
                        <li>Least favorate: Typescript</li>
                        <li>Most Used: Css3, React, Javascript</li>
                    </ul>
                </article>
            </div>
        </div>
    );
}