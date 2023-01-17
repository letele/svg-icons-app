import { Link } from 'react-router-dom'

export const Ls = () => {
    return(
        <nav>
            <li className='mb-05em c-6bbcff'>
                <Link to="/blog" >Blog</Link>
            </li>
            <li className='mb-05em c-6bbcff'>
                <Link to="/data_analyst">Data analyst</Link>
            </li>
            <li className='mb-05em c-6bbcff'>
                <Link to="/documents" >Documents</Link>
            </li>
            <li className='mb-05em c-6bbcff'>
                <Link to="/repertoire">Repertoire</Link>
            </li>
            <li className='mb-05em c-6bbcff'>
                <Link to="/web_developer" >Web developer</Link>
            </li>
        </nav>
    )
}