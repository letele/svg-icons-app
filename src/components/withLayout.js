import { Link } from 'react-router-dom'
import { SearchBar } from './SearchBar'

export const withLayout = Component => props => {

    return ( 
        <div>

            <header className='flex ali-c jc-sb h-35em p-0-15em'>
                    
                <Link to="/">&#10024;</Link>
                <div className='poa l-35em t-08em z-1'>
                    <SearchBar />
                </div>

                <nav className='flex gap-06em'>
                    <Link to="/iconscout">iconscout</Link>
                    <Link to="/seeklogo">seeklogo</Link>
                </nav>      
            </header>

            <div>
                <Component {...props}/>            
            </div>

        </div>
    )
}

 