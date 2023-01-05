import { Link } from 'react-router-dom'

function Landing(){

    return(
        <div>
            <header>
                <nav className='flex gap-06em'>
                    <Link to="/blog">blog</Link>
                    <Link to="/data_analyst">Data analyst</Link>
                    <Link to="/documents">Documents</Link>
                    <Link to="/repertoire">Repertoire</Link>
                    <Link to="/web_developer">Web developer</Link>
                </nav>      
            </header>
            <h1>Landing</h1>
        </div>
    )
}

export default Landing