import { withAccordion } from "../../../components"
import { schoolData } from "../../documents"

export const School = () => {
    
    const EducationList = ({i}) =>
    <ul className="ml-1em">
        <li className="mb-03em"><strong>{i.institude}</strong> </li>
        <li className="mb-03em"><strong>Qualification :</strong> {i.qualification}</li>
        <li className="mb-03em"><strong>Place :</strong> {i.place} </li>
        <li className="mb-03em"><strong>Status :</strong> {i.status} </li>
    </ul>

    const Comp = withAccordion(EducationList,schoolData,"period") 
    return(
        <>
            <h3 className="mb-03em">Education</h3>
            <Comp />
        </>
    )
}   