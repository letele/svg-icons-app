
import { DataAnalysis,WebDevelopment,withLayout, BaseTab } from "../components"

function Repertoire(){
    
    const tabs = [
        {name:"Data Analysis", component:DataAnalysis},
        {name:"Web Development", component:WebDevelopment}
    ]

    return <BaseTab tabs={tabs} />
}

export default withLayout(Repertoire, "Repertoire")