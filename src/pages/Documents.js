import {  useContext } from "react";
import { FcFile, FcList } from "react-icons/fc";
import { VscClose,VscDiffAdded,VscDiffRemoved } from "react-icons/vsc";
import { withLayout, withUIContext } from "../components"
import { UIContext } from "../components";
import { CoverLetter,schoolData,workData} from "../data";

function Documents(){

    const{active, setActive,modal, handleModal} = useContext(UIContext)
    
    const withAccordion = (Component, data, key) => {
        
        const Icon = ({val}) => modal===val ?
        <VscDiffRemoved /> : <VscDiffAdded />

        return (
            data.map(i => 
                <div key={i[key]}>
                    <li 
                        className="mb-03em"
                        onClick={() => handleModal(i[key])}
                    >
                        <span className="flex">
                            <Icon val={i[key]}/>
                            <span className="ml-03em">{i[key]}</span>
                        </span>
                    </li> 
                    {modal===i[key] &&  <Component i={i} />}
                </div>
            )
        )

    }
    
    const withActive = (name, Component) => {

        const divClasses = "bg-black3a poa w-100pc h-100pc t-0"
        
        const artClasses = "bg-white page m-0-auto "

        const spanClasses = "bg-dgray fc-fff c-arrow hov-bgpink poa r-10px t-5px flex ali-c jus-c br-50pc h-20px w-20px"
        
        return (
            active === name &&
            <div className={divClasses} >
                <div 
                    className={artClasses}
                >
                    <span 
                        className={spanClasses}
                        onClick = {() => setActive(null)}
                    ><VscClose/></span>
                    <article className="ov-auto h-100pc p-2em">
                        <Component />
                    </article>
                </div>
            </div>
        )
    }

    const School = () => {

        const EducationList = ({i}) =>
        <ul className="ml-1em">
            <li className="mb-03em"><strong>{i.institude}</strong> </li>
            <li className="mb-03em"><strong>Qualification :</strong> {i.qualification}</li>
            <li className="mb-03em"><strong>Place :</strong> {i.place} </li>
            <li className="mb-03em"><strong>Status :</strong> {i.status} </li>
        </ul>

        return(
            <>
                <h3 className="mb-03em">Education</h3>
                {withAccordion(EducationList,schoolData,"period")}
            </>
        )
    }    

    const Work = () => {

        const EmploymentList = ({i}) => 
        <ul className="ml-1em">
            <li className="mb-03em"><strong>Title :</strong> {i.title}</li>
            <li className="mb-03em"><strong>Description :</strong> <p>{i.description}</p></li>
            <li className="mb-03em"><strong>Period :</strong> {i.period.map(j =>
                <span key={j}>{j}</span>
            )}</li>
        </ul>

        return(
            <>
               <h3 className="mb-03em">Employment</h3>
               {withAccordion(EmploymentList,workData,"company")}
            </>
        )
    }  

    const LinkFile = ({name, Icon}) => 
    <li onClick={() => setActive(name)}>
        <div className="fs-50px txt-c"><Icon /></div>
        <div className="txt-c" >{name}</div>
    </li>

    const sClasses = "landscape potrait poa w-100pc t-60px pt-05em ov-hidden"

    return(
        <section className={sClasses}>
            <ul className="flex flex-wrap gap-2em m-1em ml-2em">
                <LinkFile name="School" Icon={FcList} />
                <LinkFile name="Work" Icon={FcList} />
                <LinkFile name="Cover letter" Icon={FcFile} />
            </ul>

            {withActive("School",School)}
            {withActive("Work",Work)}
            {withActive("Cover letter",CoverLetter)}

        </section>
    )
}

export default withUIContext(withLayout(Documents,"Documents"))