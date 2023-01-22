import {  useToggle } from '@letele/hook-me-up'

import { withModal } from "."

export const PageModal = ({icons, data}) => {

    const ToggleModal = ({name, Icon}) => {

        return (
            <li onClick={() => setToggle(name)}>
                <div className="fs-50px txt-c"><Icon /></div>
                <div className="txt-c" >{name}</div>
            </li>
        )
    }

    const {ref, toggle, setToggle} = useToggle()    

    const sectionStyles = "landscape potrait poa w-100pc t-60px pt-05em ov-hidden"

    const ulStyles = "flex flex-wrap gap-2em m-1em ml-2em"

    const containerStyles = "bg-black3a poa w-100pc h-100pc t-0"
    
    return(
        <div className={sectionStyles}>
            <ul className={ulStyles}>{icons.map(i =>
                <ToggleModal key={i.name} name={i.name} Icon={i.icon} />
            )}</ul>
            
            {Object.entries(data).map(([name,Comp]) => toggle===name && 
            <div key={name} className={containerStyles}>
                {withModal(Comp,name , {setToggle,ref})}
            </div>)}

        </div>
    )
} 