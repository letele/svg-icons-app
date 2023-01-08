import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {  useToggle } from '@letele/hook-me-up'
import {
    AnalyticsChart, Blog, FillingFiles, Hand, 
    DesignTools, Twitter, Github, Linkedin
} from "@letele/svg-icons"
import avatar from '../imgs/avatar.jpg'

export const withLayout = (Component, pageName) => props => {

    const {ref, toggle, setToggle} = useToggle()

    const pagelinks = [
        {  url:"/blog", icon:Blog, name:"Blog"},
        {  url:"/data_analyst", icon:AnalyticsChart, name:"Data analyst"},
        {  url:"/documents", icon:FillingFiles, name:"Documents"},
        {  url:"/repertoire", icon:DesignTools, name:"Repertoire"},
        {  url:"/web_developer", icon:Hand, name:"Web developer"}
    ]

    return ( 
        <div className='landscape potrait por w-100vw h-100vh'>

            <header className='p-03em pl-1em flex ali-c h-60px'>
                <Link to="/">
                    <img src={avatar} alt="avatar pic" className='w-50px h-50px br-50pc mr-05em'/>
                </Link>
                <span className='lsp-05em'>{pageName}</span>
            </header>

            <Component {...props}/>            
            
            <footer className='bg-555 fc-white poa h-30px flex ali-c jus-btwn' ref={ref}>

                {toggle && <nav className='bg-dgray poa b-30px pt-05em'>
                    
                    {pagelinks.map(i => {
                        return (
                            <Link to={i.url} key={i.name}>
                                <li className='mb-05em pl-05em h-30px w-150px flex gap-05em hov-bg'>
                                    <div className='flex ali-c jus-c fs-12em bg-lblue h-30px w-30px'>
                                        <i.icon />
                                    </div>
                                    <div className='flex ali-c jus-c'>{i.name}</div>
                                </li>
                            </Link>
                        )
                    })}
                </nav>}   
            
                <ul className='flex ali-c jus-even w-150px'>
                    <li onClick={() => setToggle(!toggle)}><FaBars /></li>
                    <li><Github /></li>
                    <li><Linkedin /></li>
                    <li><Twitter /></li>
                </ul>

                <ul className='mr-05em'>
                    <li>&copy; 2023</li>
                </ul>
            </footer>

        </div>
    )
}

 