import { Link } from 'react-router-dom'

export const Ls = () => {
    const state="landing"

    const pagelinks = [
        {  url:"/blog", state, name:"Blog"},
        {  url:"/data_analyst", state, name:"Data analyst"},
        {  url:"/documents", state, name:"Documents"},
        {  url:"/repertoire", state, name:"Repertoire"},
        {  url:"/web_developer", state, name:"Web developer"}
    ]
    return(
        <nav>{pagelinks.map(i =>{

            return (
                <li key={i.name} className='mb-05em c-6bbcff' >
                    <Link to={i.url} state={i.state}>{i.name}</Link>
                </li>
            )
        })}
        </nav>
    )
}