import { VscClose } from "react-icons/vsc";

export const withModal = (Component, state) => {
    
    const {ref, setToggle} =state
    
    const modalStyles = "bg-fff page m-0-auto nunitosans"

    const spanClasses = `
        c-arrow hov-cfff hov-bgpink poa r-10px t-10px 
        flex ali-c jus-c h-15px w-15px 
    `
    
    return (
        <div 
            ref={ref}
            className={modalStyles}
        >
            <span 
                className={spanClasses}
                onClick = {() => setToggle(false)}
            ><VscClose/></span>
            <article className="ov-auto h-100pc p-2em">
                <Component />
            </article>
        </div>
        
    )
}
