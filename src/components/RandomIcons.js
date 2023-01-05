import { useState, useEffect } from 'react';
import {randomElements,range,cartesian} from "@letele/ecmascripts"
import * as icons from "@letele/svg-icons"

export function RandomIcons({cols, rows}) {
   
    const [shuffledGrid, setShuffledGrid] = useState(null);
    const [randomIcons, setRandomIcons] = useState(null);
    
    useEffect(() => {
        const numberOfIcons = 30
        
        setRandomIcons(randomElements(
            [...Object.keys(icons)], numberOfIcons
        ))
        
        const colArrays = range(1,cols,1).map( i => `${i}/${i+1}`)
        const rowsArrays = range(1,rows,1).map( i => `${i}/${i+1}`)

        const cartesianArray = cartesian([colArrays,rowsArrays])

        setShuffledGrid(randomElements(cartesianArray, numberOfIcons))

    },[]);


    const gridStyle = index => {
        return {
            gridColumn:shuffledGrid[index][0],
            gridRow:shuffledGrid[index][1],
        }
    }

    return (
        randomIcons && randomIcons.map((iconName,index) => {
            const Icon =  icons[iconName]
            
            return (
                <div 
                    key = {iconName}
                    className="fs-2em" 
                    style={shuffledGrid && gridStyle(index)}
                >
                    <Icon />
                </div>
            )
        })
    );
}
