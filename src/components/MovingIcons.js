import { useWindowDimensions } from "@letele/hook-me-up";
import {
    Python, Javascript, Css3,Html5, PostgreSql, 
    Firebase, Typescript, Jupyter, Excel 
}  from "@letele/svg-icons"

import { withAnimation } from ".";

export function MovingIcons(){

    const {width,height} = useWindowDimensions()

    const icons = {  
        Html5,Css3,Javascript,Python,Jupyter,
        Typescript,PostgreSql, Firebase, Excel
    }
    
    const iconNames = [...Object.keys(icons)]
    
    const length = width<height?width:height
    const x =  width<height?393:500

    const speed = (t) => Math.round(length*t/x)
    const timeX = [
        [10,19],[16,18],[13,20],[15,21],[15,21],
        [16,27],[13,20],[16,25],[15,22]
    ]
    const timeY = timeX.map(i => [i[1], i[0]])
    
    const time = width <= height ? timeX : timeY
    const iconTime = time.map(i => i.map(j => speed(j)))

    return ( 
        <div>{iconNames.map((iconName,i) => {

            const t = [iconTime[i][0],iconTime[i][1]]

            const [x,y] = [`x${iconName}`, `y${iconName}`]

            const Icon = withAnimation(icons[iconName], [x,t[0]], [y,t[1]], 2000*(2**i))

            return (
                <Icon key={iconName}/>
            )

        })}</div>
    )
}