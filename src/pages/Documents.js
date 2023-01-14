import { FcFile, FcList } from "react-icons/fc";

import { PageModal, withLayout } from "../components"
import { CoverLetter,School,Work} from "../data/jsxFiles";

function Documents(){

    const Docs = {"School":School,"Work":Work,"Cover Letter":CoverLetter}

    const Icons = [
        {name:"School",icon:FcList},
        {name:"Work",icon:FcList},
        {name:"Cover Letter",icon:FcFile},
    ]

    return <PageModal icons={Icons} data={Docs} />
}

export default withLayout(Documents,"Documents")