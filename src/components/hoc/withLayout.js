import { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {  useToggle } from '@letele/hook-me-up'
import {
    AnalyticsChart, Blog, FillingFiles, Hand, 
    DesignTools, Twitter, Github, Linkedin
} from "@letele/svg-icons"
import avatar from '../../imgs/avatar.jpg'


export const withLayout = (Component, pageName) => props => {

    const location = useLocation()
    
    const [opacity, setOpacity] = useState(0)

    useEffect(()=>setOpacity(1),[])

    const {ref, toggle, setToggle} = useToggle()

    const pagelinks = [
        {  url:"/blog", icon:Blog, name:"Blog"},
        {  url:"/data_analyst", icon:AnalyticsChart, name:"Data analyst"},
        {  url:"/documents", icon:FillingFiles, name:"Documents"},
        {  url:"/repertoire", icon:DesignTools, name:"Repertoire"},
        {  url:"/web_developer", icon:Hand, name:"Web developer"}
    ]

    const Navbar = () => {

        const navStyles = `
            landscape glass bg-3b4452a6 c-fff fs-12px  lsp-05em 
             poa z-0 pt-05em b-30px ${toggle && 'slide1'} 
        `

        const liStyles =`
            mb-05em pl-05em h-30px w-150px flex gap-05em hov-bg
            ${toggle && 'slide2'}
        `

        const div1Styles = "flex ali-c jus-c fs-12em bg-8dc0d4 h-30px w-30px"
        
        const div2Styles = "flex ali-c"

        return (
            <nav    
                className={navStyles}
            >{ pagelinks.map(i => {
                return (
                    <Link to={i.url} key={i.name}>
                        <li className={liStyles} onClick={() => setToggle(false)}>
                            <div className={div1Styles}>
                                <i.icon />
                            </div>
                            <div className={div2Styles}>{i.name}</div>
                        </li>
                    </Link>
                )
            })}</nav>
        )
    }

    const MenuBar = () => {

        const divStyles = "bg-3b4452 poa z-1 w-100pc h-100pc flex ali-c jus-btwn"
          
        const centerStyles = "flex ali-c jus-c"

        const menuIconStyles = `
            ${toggle && 'bg-cccccc54'} ${centerStyles} c-faf8f8 
        `

        return(
            <div className={divStyles}>
                <ul className='h-100pc grid gr-c4 w-150px'>
                    <li 
                        className={menuIconStyles}
                        onClick={() => setToggle(!toggle)}
                    ><FaBars /></li>
                    <li className= {`${centerStyles} pt-03em`}><a 
                            href = "https://github.com/letele"
                            rel="noopener noreferrer"
                            target="_blank" 
                        ><Github /></a>
                    </li>
                    <li className={`${centerStyles} pt-03em`}><a 
                            href = "https://www.linkedin.com/in/letele"
                            rel="noopener noreferrer"
                            target="_blank" 
                        ><Linkedin /></a>
                    </li>
                    <li className= {`${centerStyles} pt-03em`}><a 
                            href = "https://twitter.com/mtletele"
                            rel="noopener noreferrer"
                            target="_blank" 
                        ><Twitter /></a>
                    </li>
                </ul>
                <ul className='mr-05em c-fff fs-12px lsp-05em'>
                    <li>&copy; 2023</li>
                </ul>
            </div>
        )
    }

    const div1Styles = 'landscape potrait por w-100vw h-100vh '

    const headerStyles = `
        poa t-0 h-60px w-100pc p-03em pl-1em flex ali-c 
        nunitosans fs-15px lsp-05em fw-600
    `

    const sectionStyles = "poa w-100pc t-60px linear-05s"

    const imgStyles = 'w-50px h-50px br-50pc mr-05em linear-05s'

    const footerStyles = 'poa h-30px linear-05s nunitosans'

    return ( 
        <div className={div1Styles}>

            <header className={headerStyles}>
                <Link to="/">
                    <img 
                        src={avatar} 
                        alt="avatar pic" 
                        className={imgStyles}
                        style={{opacity:location.state==='landing' && opacity}}
                    />
                </Link>
                <div className='lsp-05em linear-05s' style={{opacity}}>{pageName}</div>
            </header>

            <section style={{opacity}} className={sectionStyles}>
                <Component {...props} />            
            </section>
           
            
            <footer 
                className={footerStyles} 
                ref={ref} 
                style={{opacity:location.state==='landing' && opacity}}
                >
                {toggle && <Navbar />}   

                <MenuBar />
            </footer>

        </div>
    )
}

 