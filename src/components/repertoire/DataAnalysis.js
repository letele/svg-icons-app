import { useWindowDimensions } from "@letele/hook-me-up"
import {BarChart, ProgressCircle } from ".."

export const DataAnalysis = () => {

    
    const {width} = useWindowDimensions()
    return (
        width>=800 ? <BarChart />: <ProgressCircle />
    )

}