import { Card } from ".."
import { packagesData } from "../../data"

export const Packages = () => {
    
    return (
        <ul>{
            packagesData.map(i => <Card key={i.name} data={i} />)
        }</ul>
    )
}