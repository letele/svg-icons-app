import { withAccordion } from ".."
import { workData } from "../../data"

export const Work = () => {
    
    const EmploymentList = ({i}) => 
    <ul className="ml-1em">
        <li className="mb-03em"><strong>Title :</strong> {i.title}</li>
        <li className="mb-03em"><strong>Description :</strong> <p>{i.description}</p></li>
        <li className="mb-03em"><strong>Period :</strong> {i.period.map(j =>
            <span key={j} className="mr-05em" >{j}</span>
        )}</li>
    </ul>

    const Comp = withAccordion(EmploymentList,workData,"company")
    return(
        <>
           <h3 className="mb-03em">Employment</h3>
           <Comp />
        </>
    )
}  