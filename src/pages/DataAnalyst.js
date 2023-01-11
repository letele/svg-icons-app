import { useState } from "react"
import { withLayout } from "../components"
import { notebooksData } from "../data"

import {Github} from "@letele/svg-icons"

function DataAnalyst(){

    const [active, setActive] = useState("Notebook")
    const [toggled, setToggled] = useState([])

    const ex = val => toggled.includes(val)
    const handleClick = val => {
        ex(val) ?
        setToggled(toggled.filter(i=> i!==val)) :
        setToggled([...toggled, val]) 
    }

    const withActive = (name, Component) => {

        const height ="calc(100% - 30px)"
        
        const divClasses = "arial flex flex-wrap w-100pc h-100pc ml-2em  ov-auto"

        return (
            active === name &&
            <div className={divClasses} style={{height}}>
                <Component />
            </div>
        )
    }

    const Notebook = () => {
        
        const liClasses = "mb-1em"
        
        const divClasses = "flex "
        
        const spanClasses ="monospace mr-03em"

        const h3Classes ="fw-normal c-arrow fc-41"

        const artClasses = "bg-f5 b-af mt-05em ml-2em   p-05em fs-11pt"

        const maxWidth = "calc(100vw - 5em)"

        
        return (
            <ul>{notebooksData.map(i => {

                return (
                    <li key={i.name} className={liClasses}>
                        <div className={divClasses}>
                            <span className={spanClasses}>[
                                {ex(i.name)? toggled.indexOf(i.name) +1  :" "}]:
                            </span>
                            <h3 
                                className={`${h3Classes} ${ex(i.name) ? "fc-000" : "fc-ac"}`}
                                onClick = {() => handleClick(i.name)}
                            >{i.name}</h3>
                            
                        </div>
                        {ex(i.name) && 
                        <article className={artClasses} style={{maxWidth}}>
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

    const sClasses = "poa w-100pc t-60px pt-05em ov-hidden"

    const ulClasses = "flex ali-c gap-1em h-30px arial ml-2em w-fcnt"

    const liClasses = "c-arrow"

    return(
        <section className={sClasses}>
             <ul className={ulClasses}>
                <li className={liClasses} onClick={() => setActive("Notebook")}>Notebooks</li>
            </ul>
            {withActive("Notebook",Notebook)}
        </section>
    )
}

export default withLayout(DataAnalyst, "Data analyst")