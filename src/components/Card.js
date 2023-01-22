import { useEffect, useState } from "react";
import { VscChromeClose,VscVmRunning,VscGithubInverted  } from "react-icons/vsc";

export const Card = ({data,Icon,callBack}) => {

    const [opacity, setOpacity] = useState(0)

    useEffect(() => setOpacity(1),[])

    const div1Styles = "bd-afaeae h-100pc w-330px br-5px ov-hidden linear-05s"

    const ulStyles = "flex ali-c gap-15em h-100pc mr-03em mt-03em"

    return (
        <div className= {div1Styles} style={{opacity}}>
            <div className="flex jus-btwn bg-cccccc54 fs-12px">
                <p className="flex ali-c gap-05em ml-03em">
                    <Icon />
                    {data.name}
                </p>

                <ul className={ulStyles}>{ data.links.map(link => 
                    <li key={link.type}>
                        <a rel="noopener noreferrer" 
                            href={link.href} 
                            target="_blank"
                        >{link.type==='App' ? 
                            <VscVmRunning />: <VscGithubInverted />
                        }</a>
                    </li>)}

                    <li onClick={callBack}>
                        <VscChromeClose />
                    </li>
                </ul>
            </div>
            
            <div className="p-05em fs-10pt">
                {data.description.map((i,j) => 
                    <p className="mb-03em"  key={`.${j}`}>{i}</p>)
                }
            </div>
        </div>
    )
}