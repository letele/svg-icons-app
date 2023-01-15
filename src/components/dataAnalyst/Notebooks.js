import { useState } from "react"

import {Github} from "@letele/svg-icons"
import { notebooksData } from "../../data"

 export const Notebooks = () => {

    const [toggled, setToggled] = useState([])

    const incl = val => toggled.includes(val)
    
    const handleClick = val => incl(val) ?
    setToggled(toggled.filter(i=> i!==val)) : 
    setToggled([...toggled, val]) 
        
    const liStyles = "mb-1em"
    
    const divStyles = "flex "
    
    const spanStyles ="monospace mr-03em"

    const h3Styles ="fw-normal c-arrow"

    const articleStyles = "bg-f5 b-af mt-05em ml-2em p-05em fs-11pt"

    const maxWidth = "calc(100vw - 5em)"

    return (
        <ul>{notebooksData.map(i => {

            return (
                <li key={i.name} className={liStyles}>
                    
                    <div className={divStyles}>
                        <span className={spanStyles}>[
                            {incl(i.name)? toggled.indexOf(i.name) +1  :" "}]:
                        </span>
                        <h4 
                            className={`${h3Styles} ${incl(i.name) ? "fc-000" : "fc-ac"}`}
                            onClick = {() => handleClick(i.name)}
                        >{i.name}</h4>    
                    </div>
                    
                    {incl(i.name) && 
                    <article className={articleStyles} style={{maxWidth}}>
                        {i.description.map(des => 
                            <p key={des} className="mb-05em">{des}</p>
                        )}
                        {i.notebooks.map(book => 
                            <ul key={book.name} className="mb-05em ml-05em">
                                <a rel="noopener noreferrer" href={book.url} target="_blank">
                                    {book.name}
                                </a>
                                {book.description.map(desc =>
                                    <li key={desc} className="mt-05em mb-05em ml-1em">{desc}</li> 
                                )}
                            </ul>
                        )}
                        <p className="mb-05em">Packages used: </p>
                        <ul className="flex flex-wrap gap-1em ml-1em monospace">{
                            i.packages.map(pack => <li key={pack}>{pack}</li>)
                        }</ul>

                        <div className="p-02-05em b-af bg-white ml-auto w-120px txt-c mt-1em">
                            <a rel="noopener noreferrer" href={i.repo} target="_blank">
                                <Github /><span className="ml-05em">View repo</span>
                            </a>
                        </div>
                    </article>}
                </li>
            )
        })}
        </ul>
    )
}