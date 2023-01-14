import { useEffect, useState } from "react"

export const withAnimation = (Icon,x,y,time) => props => {

    const [show, setShow] = useState(false)

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => setOpacity(1), 1200 + time)

        return () => clearTimeout(timeout)
    },[])

    setTimeout(() => setShow(true), time)

    const [xClass,yClass,size] = [x[0],y[0],"30px"]
    
    return (show &&
        <>
            <style>{`

                .${xClass} { animation: ${xClass} ${x[1]}s linear infinite alternate; }

                .${yClass} { animation: ${yClass} ${y[1]}s linear infinite alternate; }
                
                @keyframes ${xClass} {
                    0%{ transform: translateX(0); }
                    100% {  transform: translateX(calc(100vw - ${size})); }
                }
                
                @keyframes ${yClass} {
                    0%{  transform: translateY(0); }
                    100% {  transform: translateY(calc(100vh - ${size})); }
                }
            `}</style>
            
            <div className={`poa ${xClass} z-0`} style={{opacity}}>
                <div className={yClass}>
                    <Icon {...props} style={{fontSize:size}}/>
                </div>
            </div>
        </>
    )
}

