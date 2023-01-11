import cfop from '../imgs/gifs/cfop.gif';
import hearts2 from '../imgs/gifs/hearts2.gif';
import svgicons1 from '../imgs/gifs/svgicons1.gif';
import { withLayout } from "../components"
import { useState } from 'react';
import { webAppsData, packagesData, templatesData } from '../data';


function WebDeveloper(){

    const [active, setActive]= useState(null)

    const externalLinks = (links) => {
        
        const ulClasses = "fs-9pt flex jus-e gap-15em p-05em poa r-05em b-05em"
        
        const liClasses = "p-02-05em b-black mw-80px txt-c"

        return (
            <ul className={ulClasses}>{links.map((i,j) => 
                <li key={j} className={liClasses}>
                    <a rel="noopener noreferrer" href={i.href} target="_blank">
                    {i.type==="Repo" ? "View Repo": (
                        i.type==="App" ? "View App" : "View Package") 
                    }
                    </a>
                </li>)}
            </ul>
        )
    }
    
    const Card = ({name, data}) => {
        
        const height ="calc(100% - 30px)"
        
        const divClasses = "arial flex flex-wrap w-100pc h-100pc ml-2em  ov-auto"

        const ulClasses = "m-0"

        const liClasses = "b-black float-l m-05em  w-330px h-210px p-02-05em por"

        const h3Classes = "fw-normal mb-03em mt-03em"
        
        const pClasses = "fs-9pt mb-05em ml-05em"
        return (
            active === name &&
            <div className={divClasses} style={{height}}>
                <ul className={ulClasses}>{data.map(i => {

                    return (
                        <li key={i.name} className={liClasses}>
                            <h3 className={h3Classes}>{i.name}</h3>
                            {i.description.map((i,j) => 
                                <p className={pClasses} key={`.${j}`}>{i}</p>)
                            }

                            {externalLinks(i.links)}
                        </li>
                    )
                })}</ul>
            </div>
        )
    }
    
    return(
        <section className=" poa w-100pc t-60px pt-05em ov-hidden">
            <ul className="flex ali-c gap-1em h-30px arial ml-2em w-fcnt">
                <li className="c-arrow" onClick={() => setActive("Applications")}>Applications</li>
                <li className="c-arrow" onClick={() => setActive("Packages")}>Packages</li>
                <li className="c-arrow" onClick={() => setActive("Templates")}>Templates</li>
            </ul>
            <Card name="Applications" data={webAppsData} />
            <Card name="Packages" data={packagesData} />
            <Card name="Templates" data={templatesData} />

        </section>
    )
}

export default withLayout(WebDeveloper,"Web developer")