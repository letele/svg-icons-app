import { FcFile } from "react-icons/fc";

import { PageModal, withLayout } from "../components"
import { Dejavu,Spagetti,Winlose  } from "../data/jsxFiles";

function Blog(){

    const Blogs = {"déjà vu":Dejavu,"spaghetti":Spagetti,"win lose":Winlose}

    const Icons = [
        {name:"déjà vu", icon:FcFile},
        {name:"spaghetti", icon:FcFile},
        {name:"win lose",icon:FcFile},
    ]

    return <PageModal icons={Icons} data={Blogs} />
}

export default withLayout(Blog,"Blog")