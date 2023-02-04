import { useState } from "react"
import { useInterval } from "@letele/hook-me-up"
import {
    Html5,Css3,Javascript,Firebase,React,
    Next,Typescript,Flask, Puppeteer,Hand
} from "@letele/svg-icons"

import {webDevStats} from "../data"
import { withProgress } from "."

export function GraphChart(){

    const [active, setActive]= useState(null)

    const handleActive = i => 
    setActive( active?(i.key===active.key?null:i):i )

    const Center = () => {

        const interval = useInterval(0,active ? active.rate*100:0,15)

        const radius = 33
        const diameter = `${radius*2}px`

        const position = `calc(50% - ${radius}px)`

        const div1Styles = "poa fs-2em z-1"
        
        const  Active = active && withProgress(
            active.icon,radius,0.18,interval,"#61cfa1","#ccc"
        )

        const Default = () => <div
            className="bg-61cfa1 flex br-50pc ali-c jus-c"
            style={{height: diameter, width: diameter}}
        ><Hand /></div>

        return (
            <div 
                className={div1Styles}   
                style={{left:position, top:position}}     
            >{active? <Active/> :<Default />}</div>
        )
    }

    const withNode = (Comp,length,radius,deg,isActive) =>() =>{
        
        const diameter = `${radius*2}px`
        
        const Edge = () => <div 
            className={
                active?isActive===active.key?'bt-61cfa1':'bt-555':'bt-555'
            }
            style={{width: `calc(100% - ${diameter})`}} 
        ></div>
        
        const Vertex = () => <div
            className="poa r-0 flex ali-c jus-c fs-12em br-50pc"
            style={{
                height: diameter, width: diameter,
                transform:`rotate(${-deg}deg)`
            }}
        ><Comp/></div>

        return (
            <div 
                className="poa bg-555 z-0 flex ali-c l-50pc t-50pc torigin-tl"
                style={{ width:`${length}%`, transform:`rotate(${deg}deg)`,}}
            >
                <Edge />
                <Vertex />
            </div>
        )
    }

    const nodes = [
        {key:"Javascript",icon:Javascript,length:50},
        {key:"Firebase",icon:Firebase,length:54},
        {key:"React",icon:React,length:39},
        {key:"Next",icon:Next,length:50},
        {key:"Typescript",icon:Typescript,length:42},
        {key:"Flask",icon:Flask,length:54},
        {key:"Puppeteer",icon:Puppeteer,length:52},
        {key:"Html5",icon:Html5,length:36},
        {key:"Css3",icon:Css3,length:50},
    ]

    const Nodes = () => nodes.map((node,j) => {

        const rate = webDevStats.filter(i => i.name === node.key)[0].rate
        
        const [deg,radius] = [Math.round(360/nodes.length)*j +10,21]

        const ProgressIcon =withProgress(
            node.icon,radius,0.24,rate*100,"#8dc0d4","#ccc"
        )

        const ProgressPerc = () => {

            const interval = useInterval(0,rate*100,15)
            const reverseInterval = useInterval(rate*100,0,15)
            
            const Comp = () =>
            <div className="c-arrow">{interval}</div>
            
            const Perc =withProgress(
                Comp,radius,0.24,reverseInterval,"#8dc0d4","#ccc"
            )
            
            return <Perc />
        }

        const Node = withNode(
            active && active.key===node.key? ProgressPerc:ProgressIcon, 
            node.length, radius,deg,node.key
        )
        
        return (
            <div key={node.key} 
                onClick={() => handleActive({...node,rate})}
            >
                <Node />
            </div>
        )
    })
    
    return (
        <div className="w-fcnt nunitosans">
            <h3 className="mb-1em txt-c">Web development tools</h3>
            
            <div className="por w-330px h-330px">
                <Center />    
                <Nodes />
            </div>
            
            {active && <div>
                <p><active.icon className="fs-25em mr-03em" /> 
                    {active.key}
                </p>
                <p>Confidence level: {active.rate*100}%</p>
            </div>}
        </div>
    );
}