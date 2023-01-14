import { useState } from "react";
import { VscDiffAdded,VscDiffRemoved } from "react-icons/vsc";


export  const withAccordion = (Component, data, key) =>()=> {
    
    const [modal, setModal] = useState(null)

    const handleModal = val => modal===val ?
    setModal(false) :setModal(val)


    const Icon = ({val}) => modal===val ?
    <VscDiffRemoved /> : <VscDiffAdded />

    return (
        data.map(i => 
            <div key={i[key]}>
                <li 
                    className="mb-03em"
                    onClick={() => handleModal(i[key])}
                >
                    <span className="flex">
                        <Icon val={i[key]}/>
                        <span className="ml-03em">{i[key]}</span>
                    </span>
                </li> 
                {modal===i[key] &&  <Component i={i} />}
            </div>
        )
    )

}