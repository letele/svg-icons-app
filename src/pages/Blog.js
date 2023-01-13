import { useContext } from "react";
import { FcFile } from "react-icons/fc";
import { ToggleModal, withLayout,withUIContext,withModal, UIContext } from "../components"
import { Dejavu,Spagetti,Winlose  } from "../data/jsxFiles";

function Blog(){

    const {setToggle,ref, toggle} = useContext(UIContext)

    const Blogs = {"déjà vu":Dejavu,"spaghetti":Spagetti,"win lose":Winlose}

    const sectionStyles = "landscape potrait poa w-100pc t-60px pt-05em ov-hidden"

    const ulStyles = "flex flex-wrap gap-2em m-1em ml-2em"

    const containerStyles = "bg-black3a poa w-100pc h-100pc t-0"
    return(
        <section className={sectionStyles}>
            <ul className={ulStyles}>{Object.keys(Blogs).map(key => 
                <ToggleModal key={key} name={key} Icon={FcFile} />
            )}</ul>

            {Object.entries(Blogs).map(([name,Comp]) => toggle===name && 
            <div key={name} className={containerStyles}>
                {withModal(Comp,name , {setToggle,ref})}
            </div>)}

        </section>
    )
}

export default withUIContext(withLayout(Blog,"Blog"))