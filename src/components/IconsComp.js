import { useState } from "react"

export function IconsComp({icons,iconNames}){
    
    const [copied, setCopied] = useState(false)
    const [timeoutId, setTimeoutId] = useState(null)

    const copyText = (text, time) => {
        navigator.clipboard.writeText(text)
        
        setCopied(text)

        timeoutId && clearTimeout(timeoutId);
        
        setTimeoutId(setTimeout(() => setCopied(false) , time))
    }

    const copy = `Copied ${String.fromCharCode(10004)}`
    const dim = 50
    const iconBoxStyle = {
        height:`${dim}px`, width:`${dim}px`
    }

    return (
        Object.entries(icons).map(([key, Icon]) => 
            <div key={key} className="m-02em w-84px">
                <div 
                    className="bg-grad-1 br-50pc flex ali-c jc-c m-0-auto fs-15em hover pointer"  
                    style={iconBoxStyle}
                    onClick={() =>  copyText(iconNames[key],1000)}
                >
                    <Icon />
                </div>
                <div className="txt-c fs-11px mt-05em por">{
                    copied===iconNames[key]? 
                        <span className="poa l-0 w-100pc">{copy}</span>:
                        iconNames[key]
                    } 
                </div>
            </div>
        )
    )
    
}