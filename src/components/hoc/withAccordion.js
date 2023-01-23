import { useState } from "react";
import { VscDiffAdded,VscDiffRemoved } from "react-icons/vsc";


export  const withAccordion = (Component, data, key) =>()=> {
    
    const [accordion, setAccordion] = useState(null)

    const handleAccordion = val => accordion===val ?
    setAccordion(false) :setAccordion(val)


    const Icon = ({val}) => accordion===val ?
    <VscDiffRemoved /> : <VscDiffAdded />

    return (
        data.map(i => 
            <div key={i[key]} >
                <li 
                    className="mb-03em"
                    onClick={() => handleAccordion(i[key])}
                >
                    <span className="flex ali-c">
                        <Icon val={i[key]}/>
                        <span className="ml-03em">{i[key]}</span>
                    </span>
                </li> 
                {accordion===i[key] &&  
                <div>
                    <Component i={i}/>
                </div>}
            </div>
        )
    )

}