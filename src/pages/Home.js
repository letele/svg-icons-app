import { Link } from 'react-router-dom'
import { useWindowDimensions} from "@letele/hook-me-up"
import { RandomIcons, SearchBar } from "../components"

export default function Home() {
    const {height, width} = useWindowDimensions()
    
    const divisor = 90
    const [rows,cols] = [
        Math.floor(height/divisor),Math.floor(width/divisor)
    ]
    
    const styles1 = {
        display: "grid",
        gridTemplateColumns: `repeat(${cols},1fr)`,
        gridTemplateRows: `repeat(${rows},1fr)`,
    }

    const str = 'npm install @letele/svg-icons'
    
    return (
        <div id="landing" className="h-100vh w-100vw por" style={styles1}>
            <header className='poa w-100vw flex ali-c jc-e h-35em p-0-15em'>
                <nav className="flex  gap-06em">
                    <Link to="/iconscout">iconscout</Link>
                    <Link to="/seeklogo">seeklogo</Link>
                </nav>
            </header>
            
            <section className="poa t-30vh z-1">
                <h1 className="p-025em m-0-auto fs-2em w-fc lsp-03em">
                    svg-icons <small>&#10024;</small>
                </h1>

                <SearchBar />

                
                <article className="w-fc p-03-1em m-0-auto mt-1em bg-dark br-20px c-light">
                    <code>{str + ' '}</code> 
                    <code  
                        className='pointer'
                        onClick={() =>  navigator.clipboard.writeText(str)}> 
                          &#128203;
                    </code>
                </article>
            </section>    

            <RandomIcons cols={cols} rows={rows}/>
        </div>
    );
}
