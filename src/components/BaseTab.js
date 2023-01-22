import { useState } from "react"

export const BaseTab = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(null)

    const active = (name) => activeTab === name 

    const activeTxt = (name) => active(name)
    ? 'c-16a3e4 txt-shdw-acacac':'c-acacac'
    
    const sectionStyles = "poa w-100pc t-60px  pl-2em ov-hidden"

    const navStyles = `
        flex ali-c gap-1em h-30px w-fcnt nunitosans lsp-05em fw-bold 
    `
    
    const articleStyles = "flex flex-wrap w-100pc ov-auto"

    return (
        <div className={sectionStyles}>
            
            <nav className={navStyles}>{tabs.map(tab => 
                <li 
                    key={tab.name} 
                    className={`c-arrow ${activeTxt(tab.name)}`} 
                    onClick={() => setActiveTab(
                        active(tab.name)?null:tab.name
                    )}
                >{tab.name}</li>
            )}</nav>

            {tabs.map(tab => activeTab===tab.name && (
                <article 
                    key={`_${tab.name}`} 
                    className={articleStyles}
                    style={{height:"calc(100% - 30px)"}} 
                ><tab.component /></article>
            ))}

        </div>
    )
}