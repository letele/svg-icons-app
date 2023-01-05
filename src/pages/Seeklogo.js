import * as icons from "@letele/svg-icons"
import { CodeBlock, IconsComp, withLayout } from "../components";

function Seeklogo() {
    
    const data = {
        icons:['Android', 'Angular', 'Apple', 'Azure', 'Chrome', 'Dreamweaver', 'Edge',
            'Excel', 'Facebook', 'Fedora', 'Firefox', 'Git', 'GitBash', 'Gmail', 'Google', 'GoogleCloud', 
            'GooglePay', 'Illustrator', 'Indeed', 'Indesign', 'Jest', 'Jupyter', 'Lightroom', 'Linkedin', 
            'Matplotlib', 'Medium', 'Microsoft', 'Mint', 'Mozilla', 'Next', 'Numpy', 'Opera', 'Outlook', 
            'Pandas', 'Parcel', 'Photoshop', 'PowerBi', 'Powerpoint', 'Premiere', 'Puppeteer', 'Pypi', 'Pytorch', 
            'React', 'Redhat', 'Redux', 'Rollup', 'Safari', 'ScikitLearn', 'Scipy', 'Sharepoint', 'TailwindCss', 
            'Telegram', 'Tensorflow', 'Tiktok', 'Ubuntu', 'VisualStudio', 'Whatsapp', 'Word', 'Xd', 'Youtube', 
            'YoutubeMusic',
           
        ],
        href:" https://seeklogo.com/",
        name:"seeklogo",
    }

    const seeklogo = data.icons.map(iconName => icons[iconName])

    return( 
        <section className="flex">
             <article className="w-880px flex flex-wrap ovfly-auto mxh-custom">
                <IconsComp icons={seeklogo} iconNames={data.icons} />
             </article>
            <CodeBlock data = {data}/>
        </section>
    );
}
 
export default withLayout(Seeklogo)