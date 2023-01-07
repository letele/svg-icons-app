import {
    Python, Javascript, Css3,Html5, PostgreSql, 
    Firebase, Typescript, Jupyter, Excel 
}  from "@letele/svg-icons"

import { withAnimation } from "./withAnimations";


export function MovingIcons(){

    const icons = {  
        Python, Javascript, Css3,Html5,
         PostgreSql, Firebase, Typescript, Jupyter, Excel 
    }
    
    const iconNames = [...Object.keys(icons)]
    
    const iconTimes = [
        [7,15],[7,18],[9,20],[7,25],[8,13],
        [10,15],[15,18],[6,15],[5,22]
    ]

    return ( 
        <div>{iconNames.map((iconName,i) => {

            const t = [iconTimes[i][0],iconTimes[i][1]]

            const [x,y] = [`x${iconName}`, `y${iconName}`]

            const Icon = withAnimation(icons[iconName], [x,t[0]], [y,t[1]], 2000*(3**i))

            return (
                <Icon key={iconName}/>
            )

        })}</div>
    )
  

}