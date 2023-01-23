import {  useToggle } from '@letele/hook-me-up'
import { useEffect, useState } from 'react'

import { withModal } from "."

export const PageModal = ({icons, components}) => {

    const [opacity, setOpacity] = useState(0)

    const {ref, toggle, setToggle} = useToggle()    

    useEffect(()=> setOpacity(toggle?1:0),[toggle])

    const sectionStyles = "landscape potrait poa w-100pc h-100pc nunitosans ov-hidden"

    const ulStyles = "flex flex-wrap gap-2em m-1em ml-2em c-arrow"

    const containerStyles = "bg-00000093 poa w-100pc h-100pc t-0 linear-05s"
    
    return(
        <div className={sectionStyles}>
            
            <ul className={ulStyles}>{icons.map(i =>
                <li key={i.name} onClick={() => setToggle(i.name)}>
                    <div className="fs-50px txt-c"><i.icon /></div>
                    <div className="txt-c mt--1em" >{i.name}</div>
                </li>
            )}</ul>
            
            {Object.entries(components).map(([name,Comp]) => toggle===name && 
            <div key={name} className={containerStyles} style={{opacity}}>
                {withModal(Comp, {setToggle,ref})}
            </div>)}

        </div>
    )
} 