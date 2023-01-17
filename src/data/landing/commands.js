import { About,Help,Hobbies,Location,Ls, Redirect } from "../../components/landing"

export const commands = {
    about: {
        info:"Displays information about portfolio's owner.",
        comp:About,
        type:"log",
    },
    analyst: {
        info:"Redirects to the data analyst page.",
        comp: () => <Redirect route="Data analysis"/>,
        route:"/data_analyst",
        type:"route",

    },
    blog:{
        info:"Redirects to the blogs page.",
        comp:() => <Redirect route="Blogs"/>,
        route:"/blog",
        type:"route",
    },
    clear:{
        info:"Clears the output screen.",
        type:"exe",
    },
    documents:{
        info:"Redirects to the documents page.",
        comp:() => <Redirect route="Documents"/>,
        route:"/documents",
        type:"route",
    },
    help:{
        info:"Displays all available commands.",
        comp:Help,
        type:"log",
    },
    hobbies:{
        info:"Displays hobbies of portfolio's owner.",
        comp:Hobbies,
        type:"log",
    },
    ls:{
        info:"Displays all routes",
        comp:Ls,
        type:"log",
    },
    location:{
        info:"Displays where the portfolio's owner currently lives.",
        comp:Location,
        type:"log",
    },
    skills:{
        info:"Redirects to the repertoire page.",
        comp:() => <Redirect route="Repertoire"/>,
        route:"/repertoire",
        type:"route",
    },
    web:{
        info:"Redirects to the web developer page.",
        comp:() => <Redirect route="Web developer"/>,
        route:"/web_developer",
        type:"route",
    }
}