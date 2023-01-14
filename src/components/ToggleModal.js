import { useContext } from "react"
import { UIContext } from "."

export const ToggleModal = ({name, Icon}) => {

    const {setToggle} = useContext(UIContext)

    return (
        <li onClick={() => setToggle(name)}>
            <div className="fs-50px txt-c"><Icon /></div>
            <div className="txt-c" >{name}</div>
        </li>
    )
}