
import { BaseTab, Notebooks, withLayout } from "../components"

function DataAnalyst(){

    const tabs = [
        {name:"Notebooks", component:Notebooks}
    ]

    return <BaseTab tabs={tabs} />
}

export default withLayout(DataAnalyst, "Data analyst")