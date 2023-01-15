import { BaseTab, withLayout,
    Applications, Packages, Templates
} from "../components"

function WebDeveloper(){

    const tabs = [
        {name:"Applications", component:Applications},
        {name:"Packages", component:Packages},
        {name:"Templates", component:Templates},
    ]

    return <BaseTab tabs={tabs} />
}

export default withLayout(WebDeveloper,"Web developer")