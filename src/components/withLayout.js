import { Link } from 'react-router-dom'

export const withLayout = Component => props => {

    return ( 
        <div>

            <div>
                <Component {...props}/>            
            </div>
            
            <footer>
                <nav className='flex gap-06em'>
                    <Link to="/blog">blog</Link>
                    <Link to="/data_analyst">Data analyst</Link>
                    <Link to="/documents">Documents</Link>
                    <Link to="/repertoire">Repertoire</Link>
                    <Link to="/web_developer">Web developer</Link>
                </nav>      
            </footer>

        </div>
    )
}

 