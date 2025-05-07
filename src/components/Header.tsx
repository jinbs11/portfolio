import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Header: React.FC = () => {

    const code =
`const about = {
  name: "Jino",
  age: 19,
  vocational_education: "ICT",
  location: "Finland",
  languages: ["JavaScript", "TypeScript", "React"],
};`;

    return (
        <section className="min-h-[calc(100vh-4rem)] grid grid-cols-2 text-white px-4 select-none items-start pt-32">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-left translate-x-4 md:translate-x-12">
                FULLSTACK <br /> <span className="ml-24 block">DEVELOPER</span>
            </h1>
            <div className='text-2xl mx-12 my-24'>
                <SyntaxHighlighter language="javascript" style={atomDark} showLineNumbers>
                    {code}
                </SyntaxHighlighter>
            </div> 
        </section>
    );
}
export default Header;