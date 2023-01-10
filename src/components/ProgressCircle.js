import {
    Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R
} from "@letele/svg-icons"

import {dataAnalystStats} from "../data"

export function ProgressCircle(){

    const icons = {Matplotlib, Excel,Numpy, Pandas, PostgreSql, Pytorch,R}

    const progress = ratio => `conic-gradient(
        #0da7e4 ${ratio*360}deg, #ccc 0deg
    )`

    const Circles = () => {
        return (
            <div className="w-100pc flex flex-wrap gap-15em pl-2em">{dataAnalystStats.map(i => {
                 const Icon = icons[i.name]
                 
                 return(
                     <div key={i.name} className="w-90px por">
                         <div 
                             className=" por h-90px w-90px flex ali-c jus-c br-50pc"
                             style={{background:progress(i.rate)}}
                         >
                             <div className="bg-white h-70px w-70px flex ali-c jus-c br-50pc">
                                 <Icon className="fs-25em"/>  
                             </div>
                         </div>
                         <div className="fs-11em mt-03em txt-c" >{i.name}</div>
                         <div className="poa t-0 fs-12em t-03em l-05em fw-bold"> 
                             {Math.round(i.rate*100)}% 
                         </div>
                     </div>
                 )
            })}</div>
        )
    }

    return(
        <div>
            <h3 className="ml-1em mb-1em txt-c">Data analysis toools</h3>
            <Circles />
            <p className="m-1em"> 
                Nota Bene: % only indicates the confidence level of using the tool.
            </p>
            <ul className="ml-1em">
                <li>Favorate tools: Pandas, PostreSql, Pytorch</li>
                <li>Least favorate: MS Excel,Matplotlib</li>
                <li>Most Used: Numpy, MS Excel</li>
                <li>In progress: Pytorch</li>
                <li>Pending: R</li>
            </ul>
        </div>
    );
}