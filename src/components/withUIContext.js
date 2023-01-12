import { createContext, useState } from "react";

export const UIContext = createContext();

export const withUIContext = Component => props => {

    const [active, setActive] = useState(null)
        
    const [modal, setModal] = useState(false)

    const handleModal = val => modal===val ?
    setModal(false) :setModal(val)

    const children = { 
        active, setActive,
        modal, setModal,handleModal
    }

    return(
        <UIContext.Provider value={{...children}} >
            <Component {...props} />    
        </UIContext.Provider>
    )

}