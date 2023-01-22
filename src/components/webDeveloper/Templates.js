import {Github, Firebase,React as IcoReact} from "@letele/svg-icons";

export const Templates = () => {
    
    const div1Styles = `
        nunitosans w-330px h-204px bd-ff69b4 br-5px m-05em por 
    `
    
    const circleStyles = `
        br-50pc h-150px w-150px poa b-15px mix-blend-s z-0
    `
    const div2Styles = "bg-ff69b4 txt-c c-fff fw-bold t-15px lsp-05em"

    return (
        <article className={div1Styles}>
            <div className={div2Styles}>React & Firebase</div>
            <div className= {`${circleStyles} bg-f57f17 l-40px`}>
                <IcoReact className="poa spin t-50px fs-50px l-30px"/>
                <span className="poa t--06em l--1em fs-10pt">Frontend</span>
            </div>
            <div className={`${circleStyles} bg-53c1de r-40px`}>
                <Firebase className="poa float t-50px fs-50px r-30px"/>
                <span className="poa t--06em r--1em fs-10pt">Backend</span>
            </div>
            
            <a 
                className="poa b-15px l-15px fs-20px"
                rel="noopener noreferrer" 
                href="https://github.com/letele/refi#readme" 
                target="_blank"
            ><Github /></a>
                
        </article>
    )
}