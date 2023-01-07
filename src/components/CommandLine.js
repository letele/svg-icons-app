import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export function CommandLine(){

    const [name, setName] = useState({txt:false,cursor:true})
    const [about, setAbout] = useState({cmd:false,txt:false,cursor:false})
    const [tools, setTools] = useState({cmd:false,txt:false,cursor:false})
    
    useEffect(() =>{ name.txt && setTimeout(() =>
        setAbout({...about, cmd:true, cursor:true}),1000)
    // eslint-disable-next-line
    },[name.txt]) 
    
    useEffect(() =>{ about.txt && setTimeout(() => {
        setTools({...tools, cmd:true, cursor:true})},1000)
    // eslint-disable-next-line
    },[about.txt])

    const type = ( text,typeSpeed ,callback) => {
        const steps = text.length
        
        callback()
               
        return (
            <>
                <style>{`
                    .typing{
                        overflow: hidden;
                        white-space: nowrap;
                        letter-spacing:0.13em;
                        border-right: 1px solid #ccc;
                        width:0;
                        animation: 
                            typing ${typeSpeed}s steps(${steps}) forwards,
                            blink 0.75s steps(1) infinite;
                    }
    
                    @keyframes typing {
                        to {  width: ${steps+1}ch }
                    }
                    @keyframes blink {
                        from, to { border-color: transparent }
                        50%{  border-color: #ccc }
                    }
                `}</style>
                {text}
            </>
        );
    }

    const typer = (val,state, setState) => {
        return (
            <li className='flex fc-white mb-03em'>
                <span className='fc-green'>$</span>&#8201;
                <span className={state.cursor ? 'typing': 'lsp-013em'}>
                    {type(val,0.75, () => setTimeout(() => {
                        setState({...state,txt:true, cursor:false})
                    }, 0.75*1000+1000)) }
                </span>
            </li>
        )
    }

    return (
        <div className='lucida fs-12em'>
            
            <ul className='mb-03em'>
                {typer("name",name, setName)}
    
                {name.txt && <li className='pl-1em fc-white lsp-05em'>Letele Motebang</li>}
            </ul>
            
           {about.cmd && <ul className='mb-03em'>
                {typer("about",about, setAbout)}

                {about.txt && <ul className='pl-1em'>
                    <li className='mb-03em mt-03em'>
                        <Link to="/data_analyst" className='fc-blue lsp-05em'>Data analyst</Link>
                    </li>
                    <li>
                        <Link to="/web_developer" className='fc-blue lsp-05em'>Web developer</Link>
                    </li>
                </ul>}
            </ul>}
            
           {tools.cmd &&  <ul>
                {typer("tools",tools, setTools)}

                {tools.txt && <li className='pl-1em'>
                    <Link to="/repertoire" className='fc-blue lsp-05em'>Repertoire</Link>
                </li>}
            </ul>}
        </div>
    );
}