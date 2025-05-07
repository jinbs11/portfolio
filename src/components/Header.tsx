import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Icons } from '../assets/icons';


const Header: React.FC = () => {

    const code =
`const about = {
  name: "Jino",
  age: 19,
  vocational_education: ["ICT", "2022-2025"],
  location: "Finland",
  languages: ["JavaScript", "TypeScript", "React"],
};`;

    return (
        <section id="home" className="min-h-[calc(100vh-4rem)] grid grid-cols-2 text-white px-4 select-none items-start pt-32 gap-3">
            <div className="leading-tight text-left translate-x-4 md:translate-x-12">
                <ul className=" flex gap-4 mb-3">
                    <li>
                        <a href="https://github.com/jinbs11" target="_blank" rel="noopener noreferrer">
                            <img src={Icons.github} alt="GitHub" className="w-12 h-12 cursor-pointer hover:scale-110 transition" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jino-renman/" target="_blank" rel="noopener noreferrer">
                            <img src={Icons.linkedin} alt="Linkedin" className="w-12 h-12 cursor-pointer hover:scale-110 transition" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@.jinbs" target="_blank" rel="noopener noreferrer">
                            <img src={Icons.tiktok} alt="TikTok" className="w-12 h-12 cursor-pointer hover:scale-110 transition" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/jino.r_/" target="_blank" rel="noopener noreferrer">
                            <img src={Icons.instagram} alt="Instagram" className="w-12 h-12 cursor-pointer hover:scale-110 transition" />
                        </a>
                    </li>
                </ul>
                <h1 className="text-6xl md:text-8xl font-extrabold">
                    FULLSTACK <br /> <span className="ml-24 block text-accent">DEVELOPER</span>
                </h1>  
            </div>
            <div className='text-2xl mx-12 my-24'>
                <SyntaxHighlighter language="javascript" style={atomDark} showLineNumbers>
                    {code}
                </SyntaxHighlighter>
            </div> 
        </section>
    );
}
export default Header;