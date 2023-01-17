
import { CommandLine,MovingIcons } from '../components'

export default function Landing(){
    
    const divStyles = 'w-100vw h-100vh por ovy-hide'
    
    return(
        <div className={divStyles}>
            
            <MovingIcons />
            
            <CommandLine />
        
        </div>
    )
}

