import {  useToggle } from '@letele/hook-me-up'

import { ToggleModal, withModal } from "."

export const PageModal = ({icons, data}) => {

    const {ref, toggle, setToggle} = useToggle()    

    const sectionStyles = "landscape potrait poa w-100pc t-60px pt-05em ov-hidden"

    const ulStyles = "flex flex-wrap gap-2em m-1em ml-2em"

    const containerStyles = "bg-black3a poa w-100pc h-100pc t-0"
    

    return(
        <section className={sectionStyles}>
            <ul className={ulStyles}>{icons.map(i =>
                <ToggleModal key={i.name} name={i.name} Icon={i.icon} />
            )}</ul>
            
            {Object.entries(data).map(([name,Comp]) => toggle===name && 
            <div key={name} className={containerStyles}>
                {withModal(Comp,name , {setToggle,ref})}
            </div>)}

        </section>
    )
} 