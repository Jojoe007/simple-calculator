import React from 'react';
type ButtonProps = {
    title: string;
    icon?: ''
    callback: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, icon, callback }) => {


    return (
        <div className='relative mt-2 rounded-md shadow-sm w-full'>
            <button
                className='block w-full px-5 py-2 text-sm font-medium text-center items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 sm:text-sm sm:leading-6'
            onClick={callback}
            >
                {title}
            </button>
        </div>
    )
}

export default Button;