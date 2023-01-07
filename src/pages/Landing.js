import {Twitter, Github,Linkedin} from "@letele/svg-icons"

import { MovingIcons, CommandLine } from '../components'

import avatar from '../imgs/avatar.jpg'

function Landing(){

    
    return(
        <div className='w-100vw h-100vh por ovy-hide'>
            
            <MovingIcons />
            <div className="bg-black3a h-100pc w-100pc p-1em poa z-1">
                <header className='por w-fcnt h-fcnt'>
                    <img src={avatar} alt="avatar pic" className='w-120px h-120px br-50pc'/>
                    <ul>
                        <li className='poa l-100pc t-0'>
                            <Twitter className=""/>
                        </li>
                        <li className='poa r-0 b-0'>
                            <Github className=""/>
                        </li>
                        <li className='poa l-0 t-100pc'>
                            <Linkedin className=""/>
                        </li>
                    </ul>
                </header>

                <section className="m-15em ml-2em ">
                    <CommandLine />
                </section>
                
            </div>
        
        </div>
    )
}

export default Landing