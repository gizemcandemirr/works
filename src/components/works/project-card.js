import React from 'react';
import { useRouter } from 'next/router';

const ProjectCard = ({ client, country, image, link, title }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    };

    return (
        <div 
            className="relative cursor-pointer h-[400px] rounded-xl bg-gray-600 bg-opacity-75 w-full" 
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
            onClick={handleClick}
        >
            <div className=" absolute bottom-0 left-0 text-white font-semibold  hover:bg-white hover:bg-opacity-75 p-4 ">
                <h1 className="text-4xl font-bold">{'Client / ' + client}</h1>
                <h6 className="text-2xl font-bold">{'Country / ' + country}</h6>
            </div>
        </div>
    );
};

export default ProjectCard;
