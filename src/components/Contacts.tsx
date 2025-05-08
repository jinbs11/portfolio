import React from 'react';
import { Icons } from '../assets/icons';

const Contacts: React.FC = () => {
    return (
        <div className='w-full h-auto flex justify-center'>
            <div className='w-[90%] h-[50%] bg-surface px-5 py-5 mt-5 mb-12 rounded-xl flex justify-start'>
                <ul className="mb-3 space-y-5">
                    <li className='text-2xl'>📬Email: jino.renman@gmail.com</li>
                    <hr className="w-96 my-2 border-t border-gray-300" />
                    <ul className="flex gap-4">
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
                </ul>
            </div>
        </div>
    )
}

export default Contacts;