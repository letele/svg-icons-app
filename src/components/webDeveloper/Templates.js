import { Card } from ".."
import { templatesData } from "../../data"

export const Templates = () => {
    
    return (
        <ul>{
            templatesData.map(i => <Card key={i.name} data={i} />)
        }</ul>
    )
}