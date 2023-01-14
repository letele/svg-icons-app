import { createContext, useState } from "react";

import {  useToggle } from '@letele/hook-me-up'

export const UIContext = createContext();

export const withUIContext = Component => props => {

    const [active, setActive] = useState(null)
        
    const [modal, setModal] = useState(null)

    const {ref, toggle, setToggle} = useToggle()

    const handleModal = val => modal===val ?
    setModal(false) :setModal(val)

    const resetModal = () => setModal(null)

    const resetToggle = () => setToggle(null)

    const children = { 
        active, setActive,
        modal, setModal,handleModal,
        resetModal,
        ref, toggle, setToggle,
        resetToggle
    }

    return(
        <UIContext.Provider value={{...children}} >
            <Component {...props} />    
        </UIContext.Provider>
    )

}