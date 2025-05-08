import React from 'react';
import ProjectBox from './ProjectBox';
import exampleImg from '../assets/ProjectImages/testkuva.jpeg';
import exampleImg2 from '../assets/ProjectImages/testikuva2.jpeg';

const Projects: React.FC = () => {
    return (
        <div className='w-full h-screen flex justify-center'>
            <div className='w-[90%] h-[50%] bg-surface px-5 py-5 mt-5 rounded-xl flex justify-center gap-10'>
                <a href='https://github.com/jinbs11/JinClient' target="_blank" rel="noreferrer">
                    <ProjectBox name="JinClient" languages={['React', 'Tsx', 'Js', 'Electron']} image={exampleImg2}/>
                </a>
                <a href='https://github.com/jinbs11/fieldops-web' target="_blank" rel="noreferrer">
                    <ProjectBox name="Fieldops Web" languages={['React', 'Tsx', 'Js']} image={exampleImg}/>
                </a>
            </div>
        </div>
    )
}

export default Projects;