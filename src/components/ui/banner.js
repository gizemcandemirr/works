import React from 'react'

const Banner = ({ key, image, title }) => {
    return (
        <div
            key={key}
            className="relative cursor-pointer h-[300px] md:h-[600px] rounded-xl bg-gray-600 bg-opacity-75 w-full"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        >
            <div className=" absolute bottom-0 left-0 text-white font-semibold  bg-gradient-to-t from-gray-900 to-transparent bg-opacity-25 p-4 ">
                <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
            </div>
        </div>
    )
}

export default Banner