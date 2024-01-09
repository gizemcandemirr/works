import React from 'react'

const Banner = ({ image, client, country, title }) => {
    return (
        <div
            className="relative cursor-pointer h-[400px] rounded-xl bg-gray-600 bg-opacity-75 w-full"
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
        >
            <div className=" absolute bottom-0 left-0 text-white font-semibold  hover:bg-white hover:bg-opacity-75 p-4 ">
                <h1 className="text-6xl font-bold">{title}</h1>
            </div>
        </div>
    )
}

export default Banner