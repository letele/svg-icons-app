export const Card = ({data}) => {

    const externalLinks = (links) => {
        
        const ulStyles = "fs-9pt flex jus-e gap-15em p-05em poa r-05em b-05em"
        
        const liStyles = "p-02-05em b-black mw-80px txt-c"

        return (
            <ul className={ulStyles}>{links.map((i,j) => 
                <li key={j} className={liStyles}>
                    <a rel="noopener noreferrer" href={i.href} target="_blank">
                    {i.type==="Repo" ? "View Repo": (
                        i.type==="App" ? "View App" : "View Package") 
                    }
                    </a>
                </li>)}
            </ul>
        )
    }
        
    const liStyles = "b-black float-l m-05em  w-330px h-210px p-02-05em por"

    const h3Styles = "fw-normal mb-03em mt-03em"
    
    const pStyles = "fs-9pt mb-05em ml-05em"
    return (
        <li key={data.name} className={liStyles}>
            <h3 className={h3Styles}>{data.name}</h3>
            {data.description.map((i,j) => 
                <p className={pStyles} key={`.${j}`}>{i}</p>)
            }

            {externalLinks(data.links)}
        </li>
    )
}