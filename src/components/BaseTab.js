import { useState } from "react"

export const BaseTab = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(null)

    const sectionStyles = "poa w-100pc t-60px pt-05em pl-2em ov-hidden"

    const navStyles = "flex ali-c gap-1em h-30px w-fcnt"

    const liStyles = "c-arrow"

    const articleStyles = "flex flex-wrap w-100pc ov-auto"

    return (
        <section className={sectionStyles}>
            
            <nav className={navStyles}>{tabs.map(tab => 
                <li 
                    key={tab.name} 
                    className={liStyles} 
                    onClick={() => setActiveTab(tab.name)}
                >{tab.name}</li>
            )}</nav>

            {tabs.map(tab => {
                const Comp = tab.component
                return activeTab===tab.name && (
                    <article 
                        key={`_${tab.name}`} 
                        className={articleStyles}
                        style={{height:"calc(100% - 30px)"}} 
                    >
                        <Comp />
                    </article>
                )
            })}

        </section>
    )
}