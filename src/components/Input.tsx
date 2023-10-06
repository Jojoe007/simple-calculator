import React, { forwardRef } from "react";


// type InputProps = {
//     onChange: () => void
//     value: number
// }

// const Input: React.FC<InputProps> = ({ onChange, value }) => {
//     return (
//         <div className="relative mt-2 rounded-md shadow-sm">
//             <input
//                 type='number'
//                 className='block w-full rounded-md border-0 px-4 py-2 text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-300 sm:text-sm sm:leading-6'
//                 placeholder='insert your number'
//                 onChange={onChange}
//                 value={value}
//             />
//         </div>
//     );
// }

const Input = forwardRef(({ }, ref: React.Ref<HTMLInputElement>) => {
    return (
        <div className="relative mt-2 rounded-md shadow-sm">
            <input
                type='number'
                className='block w-full rounded-md border-0 px-4 py-2 text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-blue-300 sm:text-sm sm:leading-6'
                placeholder='insert your number'
                ref={ref}
            />
        </div>
    )
})

export default Input;