import React from 'react';

type ProjectBoxProps = {
  name: string;
  languages: string[];
  image: string;
};

const ProjectBox: React.FC<ProjectBoxProps> = ({ name, languages, image }) => {
  return (
    <div className="h-full w-80 bg-accent rounded text-white shadow-lg overflow-hidden cursor-pointer hover:scale-[102%] transition">
          
      {/* Kuva */}
      <img src={image} alt={name} className="w-full h-40 object-cover" />

      {/* Nimi */}
      <div className='text-center'>
        <div className="px-4 pt-3 font-bold text-lg">{name}</div>

        <div className="px-4 pt-1 text-sm text-gray-300">
          <p className="uppercase tracking-wide text-xs text-gray-400">Languages / Technologies:</p>
          <p>{languages.join(', ')}</p>
        </div>
      </div>
    </div>

  );
};


export default ProjectBox;
