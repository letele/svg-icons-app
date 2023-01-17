import { useRef,useState } from "react"
import { useNavigate } from "react-router-dom";
import { useInput } from "@letele/hook-me-up"

import { commands ,error} from "../data";
import avatar from '../imgs/avatar.jpg'

export function CommandLine(){

    const ref = useRef(null)
    
    const [cmds, setCmds] = useState([])
    
    const navigate = useNavigate()
    
    const { onChangeI,setValueI, valueI,onSubmit } = useInput('')
    
    const handleFocus = () => ref.current.focus()

    const submit = () => {
        
        const value = valueI.toLowerCase()

        const update = { index: cmds.length +1, name:valueI}

        const redirect =(route) => {
            setCmds([...cmds, { ...update, comp:commands[value].comp} ]) 
            setTimeout(() => navigate(route), 1000)
        }

        const Error = () => <p className="maxw-595px">{error(value)}</p>

        !commands[value] && setCmds([...cmds,{...update, comp: Error}]) 
          
        commands[value] && commands[value].type === 'log' &&
        setCmds([...cmds, { ...update, comp:commands[value].comp} ]) 

        commands[value] && value==='clear' && setCmds([]) 

        commands[value] && commands[value].type==='route' &&
        redirect(commands[value].route)

        setValueI('')
    }

    const Cell = ({data}) => {
        const Component = data.comp
        return(
            <article className="flex lucida mb-1em">
                <p className="mr-03em fs-10pt lsp-013em">[{data.index}]:</p>
                <ul>
                    <li className="mb-05em">{data.name}</li>
                    <li><Component /></li>
                </ul>
            </article>
        )
    }

    const divStyles = "bg-00000093 h-100pc w-100pc p-05em poa z-1 c-fff lucida fs-11pt"

    const headerStyles = "w-100pc flex ali-c c-4fce2f"

    const imgStyles = "w-30px h-30px br-50pc"

    const formStyles = "por flex h-20px"

    const inputStyles = "w-100pc pl-2em bg-none b-none out-none c-fff fs-11pt  lsp-02em"

    const sectionStyles =`w-100pc ovy-auto ovx-hide p-05em`

    return (
        <div className={divStyles}  onClick={handleFocus}>  
            <header className={headerStyles}>
                <img src={avatar} alt="avatar pic" className={imgStyles}/>
                <p>:Letele\Motebang\portfolio</p>
            </header>

            <form 
                className={formStyles}
                onSubmit={e => onSubmit(e, submit)}
            >
                <div className="poa l-07em t-02em">&lambda;</div>
                <input 
                    className={inputStyles}
                    value={valueI} 
                    onChange={onChangeI}
                    autoFocus ref={ref}
                    spellCheck="false"
                />
            </form>

            <section 
                className={sectionStyles}
                style={{height:'calc(100% - 50px)'}}
            >{
                [...cmds].reverse().map(i => <Cell key={i.index} data={i}/>
            )}</section>
            
        </div>
    )
}