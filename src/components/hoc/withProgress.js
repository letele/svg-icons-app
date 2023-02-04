
export const withProgress = (
    Comp,radius,thickness,perc,color1,color2,color3
) =>() =>{

    const outerDiameter = `${2*radius}px`
    const innerDiameter = `${2*radius*(1-thickness)}px`

    const div1Styles = {
        background:`
            conic-gradient(${color1} ${perc*3.60}deg, ${color2} 0deg)
        `, 
        height:outerDiameter, width:outerDiameter
    }
    
    const div2Styles = {
        background:color3?color3:"#fff",
        height:innerDiameter, width:innerDiameter
    }

    const circleStyles = "flex ali-c jus-c br-50pc" 
    
    return(
        <div className={circleStyles} style={{...div1Styles}}>
            <div className={circleStyles} style={{...div2Styles}}>
                <Comp/>
            </div>
        </div>
    )
}