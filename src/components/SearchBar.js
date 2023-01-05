import {  useInput } from "@letele/hook-me-up"
import * as icons from "@letele/svg-icons"
import { IconsComp } from "../components"
import { useEffect, useState } from 'react'


export function SearchBar() {

    const { onChangeI, valueI } = useInput('')

    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        valueI.length>2 ? setSearchResult(Object.keys(icons).filter(
            (item) => item.toLowerCase().includes(valueI.toLowerCase()))
        ): setSearchResult([])
    },[valueI])
    
    const searchedIcons = searchResult.map(iconName => icons[iconName])

    const brSearchBar =  searchResult.length ? "br-b-0":"br-20px"
    
    return (
        <article>
            <form className='por'>
                <div className="flex ali-c poa l-05em t-04em">&#128269;</div>
                <input 
                    className={`bd-none o-none w-100pc ${brSearchBar} p-05-2em pl-22em fs-1em bxs-blue `} 
                    type="text" 
                    name="search" 
                    placeholder="icon"
                    value={valueI} 
                    onChange={onChangeI}
                />
            </form>
           {searchResult.length>0 && 
           <div className='bg-white mxh-40vh ovfly-auto flex flex-wrap p-05-0em bxs-blue mxw-390px'>
                <IconsComp icons={searchedIcons} iconNames={searchResult} />
            </div>}        
        </article>
    );
}