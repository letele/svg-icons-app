import {  useState } from "react";
import  { RubiksCube, Hearts } from  "@letele/svg-icons" 

import { Card } from "..";
import { webAppsData } from "../../data"
import cfopbg from "../../imgs/gifs/cfop.gif"
import heartsbg from "../../imgs/gifs/hearts.gif"
import svgiconsbg from "../../imgs/gifs/svgicons.gif"


export const Applications = () => {
    

    const Window = ({data,Icon,img}) => {

        const [toggle, setToggle] = useState(false)
        
        const articleStyles = `
            lsp-05em nunitosans float-l m-05em w-330px h-204px p-02-05em por
        `
        
        const Cover = ({callBack}) => {
            
            const div1Styles = `
                poa h-100pc w-100pc z--1 t-0 l-0 bg-3b4452a6 br-5px 
                blend-mul bg-cover
            `
            return (
                <div className="poa h-100pc w-100pc" onClick={callBack}>
                    <div 
                        className={div1Styles}
                        style={{backgroundImage:`url(${img})`}}
                    ></div>
                    
                    <div className="c-fff poa b-30px l-10px gap-05em">
                        <Icon className="fs-50px"/>
                        <h3 className="fw-normal">{data.name}</h3>
                    </div>
                </div>
            )
        }
        
        return (
            <article className={articleStyles}>
                {toggle ? 
                <Card  data={data} Icon={Icon} 
                    callBack={() => setToggle(false)}
                /> : 
                <Cover callBack={() => setToggle(true)}/>}
            </article>
        )
    }

    const SvgAppIcon = () => <span>&#10024;</span>
        
    return (
        <ul>
            <Window data={webAppsData[0]} Icon={RubiksCube} img={cfopbg}/>
            <Window data={webAppsData[1]} Icon={Hearts} img={heartsbg}/>
            <Window data={webAppsData[2]} Icon={SvgAppIcon} img={svgiconsbg}/>
        </ul>
    )
}