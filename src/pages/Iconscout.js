import * as icons from "@letele/svg-icons"
import { CodeBlock, IconsComp, withLayout } from "../components";

function Iconscout() {
    const data = {
        icons: ['Adobe', 'AdobeCc', 'AdobePro', 'AmazonAws', "AnalyticsChart",'Atlassian', 'Babel', 'Bitbucket', 
            'Bootstrap', 'Css3', 'D3',"DesignTools" ,'Docker', 'Express',"FillingFiles", 'Firebase', 'Flask', 'FreeCodecamp', 'Gatsby', 
            'Github', 'Gitlab', 'Graphql', 'Gulp', "Hand",'Html5', 'Instagram', 'Javascript', 'Jira', 'Mailchimp', 
            'Mastercard', 'MySql', 'Netlify', 'Nodejs', 'Nodemon', 'Npm', 'Patreon', 'PayPal', 'Pinterest', 
            'PostgreSql', 'Python', 'PythonTm', 'R', 'Sass', 'Shopify', 'Slack', 'Snapchat', 'Sqlite', 
            'Stackoverflow', 'Stripe', 'Trello', 'Twitter', 'Typescript', 'Visacard', 'Vue', 'Webpack',
        ],
        href:"https://iconscout.com/",
        name:"iconscout",
    }

    const iconscout = data.icons.map(iconName => icons[iconName])

    return ( 
        <section className="flex">
            <article className="w-880px flex flex-wrap ovfly-auto mxh-custom">
                <IconsComp icons={iconscout} iconNames={data.icons} />

            </article>
            <CodeBlock data = {data}/>
        </section>
    );
}

export default withLayout(Iconscout)
  