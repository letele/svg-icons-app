import { commands } from "../../data"

export const Help = () => {
    
    return (
        <ul>{Object.entries(commands).map(([i,j]) =>{
           return (
                <li key={i} className="w-100pc flex lucida in-block fs-11pt mb-5px">
                    <div className="txt-caps w-100px">{i}</div>
                    <div style={{width:"calc(100% - 100px)"}}>{j.info}</div>
                </li>
           )
        })}</ul>
    )
}