import { useEffect,useState } from "react"
import {
    Html5,Css3,Javascript,Firebase,React,
    Next,Typescript,Flask, Puppeteer,Hand
} from "@letele/svg-icons"

import {webDevStats} from "../data"

export function GraphChart(){

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
        const index = Object.keys(icons).indexOf(i.name)
        setRate(0)
        setActive(
            active?i.name===active.name?null:{...i,index}:{...i,index}
        )
    }

    const icons = {
        Html5,Css3,Javascript,Firebase,React,
        Next,Typescript,Flask, Puppeteer,Hand
    }

    const pos = [
        [8,3,30,275],[13,2,50,315],[14,7,44,354],[14,11,50,28],
        [9,13,38,74],[4,14,50,119],[2,10,41,153],[1,4,50,210],
        [4,1,50,240],
    ]

    const activeConic = () => `conic-gradient(
        #61cfa1 ${(rate/100)*360}deg, #ccc 0deg
    )`
    
    const defaultConic = (i) => `conic-gradient(
        #8dc0d4 ${i.rate*360}deg, #ccc 0deg
    )`

    const setConic = (i) => active && active.name===i.name ?
    activeConic():defaultConic(i)

    
    const Edges = () => {
        const divStyles=`
            poa c-arrow t-15pc l-15pc h-70pc w-70pc bg-white br-50pc 
            flex ali-c jus-c
        `
        return (
            webDevStats.map((i,j) => {
                const gridColumn = `${pos[j][0]}/${pos[j][0]+2}`
                const gridRow = `${pos[j][1]}/${pos[j][1]+2}`
                const Icon = icons[i.name]

                return (                    
                    <div 
                        key={`no${j}`}
                        style={{background:setConic(i),gridColumn, gridRow}}
                        className="br-50pc fs-11em por"
                        onClick={() => handleActive(i)}
                    >
                        <div className={divStyles}>
                            {active?i.name===active.name?rate: <Icon />: <Icon />}
                        </div>
                    </div>
                    
                )
            })
        )
    }
    
    const Vertices = () => {

        const isActive = i=>  pos[active.index][3]===i[3] 

        const top =(i) => `1px solid ${active ?isActive(i) ? 
            "#61cfa1":"#555":"#555"
        }`

        const divStyles = `line poa l-50pc t-50pc z--1 torigin-tl`

        return(
            pos.map((i,j)=>{
                return(
                    <div 
                        key={j}
                        className={divStyles}
                        style={{
                            borderTop:top(i),
                            width:`${i[2]}%`,
                            transform:`rotate(${i[3]}deg)`
                        }}
                    ></div>
                )
            })
        )
    }

    const Center = () => {
        const Icon = icons[active?active.name:"Hand"]
        return (
            <div 
                className="bg-61cfa1 br-50pc flex ali-c jus-c fs-2em"
                style={{gridColumn:"7/10",gridRow:"7/10"}}
            >
                <Icon />
            </div>
        )
    }

    const Graph = () => {
        return (
            <div className="grid gr-c15 gr-r15 w-330px h-330px por ov-auto">
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
                <p><Icon className="fs-25em mr-03em "  /> {active.name}</p>
                <p>Confidence level: {active.rate*100}%</p>
            </div>
        )
    }

    return (
        <div className="w-fcnt nunitosans">
            <h3 className="mb-1em txt-c">Web development tools</h3>
            
            <Graph />
            
            {active && <Info iconName={active.name}/>}
        </div>
    );
}