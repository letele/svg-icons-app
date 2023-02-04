import { useState } from "react";
import { ImHome,ImGit,ImNpm } from "react-icons/im";
import { useAPI } from "@letele/hook-me-up"
import {Typescript} from "@letele/svg-icons"
import { packagesData } from "../../data";

export const Packages = () => {

    const npmData = useAPI(packagesData.url)

    const [copied, setCopied] = useState(false)

    const copyText = (text, time) => {
        navigator.clipboard.writeText(text)
        setCopied(text)
        setTimeout(() => setCopied(false) , time)
    }

    const li1Styles = `
        nunitosans w-330px h-204px p-05em bd-afaeae br-5px
        m-05em float-l bg-cccccc54
    `

    const ALLPackages = () => {
        return ( <ul>{npmData.objects.map(i => {
            const {package:pack} = i
            
            const date = new Date(pack.date).toLocaleDateString("en-GB")
            
            const str = `npm i ${pack.name}`

            return (
                <li key={pack.name} className={li1Styles}>
                    <header>
                        <p className="flex gap-05em">{pack.name} <Typescript /></p>
                        <code>
                            {pack.version}&#8201;&bull;&#8201; 
                            <span className="c-14865c">Public</span>
                            &#8201;&bull;&#8201;Published {date}
                        </code>
                    </header>

                    <hr/>
                    
                    <section className="mt-05em fs-10pt">
                        <p>{pack.description}</p>
                        
                        <h4 className="mt-1em">Install</h4>
                        <p className="bd-afaeae p-03em w-fcnt ml-05em">
                            {copied!==str && <code>{str + ' '}</code>} 
                            {copied!==str && <code  
                                className='c-arrow'
                                onClick={() =>  copyText(str,1000)}> 
                                  &#128203;
                            </code>}
                            {copied===str && <code>copied &#10004;</code>}
                        </p>
                        
                        <h4 className="mt-1em">Links</h4>
                        <ul className="flex gap-1em ml-05em mt-05em">
                            <li>
                                <ImNpm className="c-555"/> 
                                <a 
                                    className="ml-03em c-189bf1"
                                    rel="noopener noreferrer" 
                                    href={pack.links.npm} target="_blank"
                                >NPM</a>
                            </li>
                            <li>
                                <ImGit className="c-555"/>
                                <a 
                                    className="ml-03em c-189bf1"
                                    rel="noopener noreferrer" 
                                    href={pack.links.repository} target="_blank"
                                >Repository</a>
                            </li>
                            <li>
                                <ImHome className="c-555"/> 
                                <a 
                                    className="ml-03em c-189bf1"
                                    rel="noopener noreferrer" 
                                    href={pack.links.homepage} target="_blank"
                                >Homepage</a>
                            </li>
                        </ul>
                            
                    </section>
                </li>
            )
        })}</ul>)
    }

    const Loading = () => 
    <div className="nunitosans m-05em">Loading packages from npm...</div>
    
    return npmData ? <ALLPackages/>: <Loading />
}