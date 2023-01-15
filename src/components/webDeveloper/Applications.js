import { Card } from ".."
import { webAppsData } from "../../data"

export const Applications = () => {
    
    return (
        <ul>{
            webAppsData.map(i => <Card key={i.name} data={i} />)
        }</ul>
    )
}