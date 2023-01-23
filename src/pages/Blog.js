import { FcFile } from "react-icons/fc";

import { 
    PageModal, withLayout,
    Dejavu,Spagetti,Winlose
} from "../components"


function Blog(){

    const Blogs = {"déjà vu":Dejavu,"spaghetti":Spagetti,"win lose":Winlose}

    const Icons = [
        {name:"déjà vu", icon:FcFile},
        {name:"spaghetti", icon:FcFile},
        {name:"win lose",icon:FcFile},
    ]

    return <PageModal icons={Icons} components={Blogs} />
}

export default withLayout(Blog,"Blog")