import React from 'react';
import { useRouter } from 'next/router';

const ProjectCard = ({ client, country, image, link, title }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    };

    return (
        <div
            className="relative cursor-pointer h-[400px] rounded-xl  shadow-lg z-10"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
            onClick={handleClick}
        >
            <div className='rounded-xl absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 to-transparent bg-opacity-25 hover:bg-gray-300 hover:bg-opacity-45 z-10'>

                <div className=" absolute bottom-0 left-0 text-white font-semibold w-full p-4 ">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h2 className="text-2xl font-bold mt-3">{'Client / ' + client}</h2>
                    <h6 className="text-2xl font-bold">{'Country / ' + country}</h6>
                </div>

            </div>
        </div>

    );
};

export default ProjectCard;
