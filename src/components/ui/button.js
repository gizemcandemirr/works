import React from 'react';

const Button = ({ title, active, onClick }) => {
    const buttonClasses = active ? 'bg-black text-white' : '';

    return (
        <button
            className={`${buttonClasses} border-2 mr-4 border-gray-900 px-4 py-2 uppercase rounded-full transition duration-150 ease-in-out`}
            onClick={onClick}
        >
            {title}
        </button>

    );
}

export default Button;
