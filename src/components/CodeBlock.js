
export function CodeBlock({data}) {
    
    const ctxt = (text,color) => <code style={{color}}>{text}</code>
    
    const color1 = "#79B6F2"
    const color2 = "#c5a5c5"
    const color3 = "#fac863"
    const color4 = "#9acd32"

    const str = `import  { ${data.icons[0]} } from  "@letele/svg-icons"`
    return ( 
        <aside className="m-05em">
            <p className="mb-05em">svgs from this page are from {data.name}</p>
            <p className="mb-05em">url: 
                <a href={data.href} target="_blank" rel="noopener noreferrer">
                    {data.href}
                </a>
            </p>
            <p>usage:</p>
            <code className="disp-block bg-dark c-light p-025em">
                {ctxt('import',color2)}
                &nbsp; {ctxt('{',color4)} {data.icons[0]} {ctxt('}',color4)} 
                &nbsp;{ctxt('from',color2)} 
                &nbsp; "@letele/svg-icons"
                <code 
                    className="pointer"
                    onClick={() =>  navigator.clipboard.writeText(str)}
                > &#128203;</code> 
                <br/>
                <br />
                {ctxt('function',color1)} App{ctxt('()',color3)} {ctxt('{',color4)} <br />
                &nbsp;&nbsp; {ctxt('return (',color2)} <br />
                &nbsp;&nbsp;&nbsp;&nbsp; &#60;{ctxt(data.icons[0],color1)} /&#62; <br />
                &nbsp;&nbsp;{ctxt(' )',color2)} <br />
                {ctxt('}',color4)}
            </code>
        </aside>
    );
}
 