import React from 'react'

function Input(props) {
    return (
        <div className='w-full md:px-4 mt-8 flex flex-col'>
            <span className='font-medium text-slate-700'>{props.title}</span>
            <input value={props.value[props.name]} name={props.name} onChange={(e) => props.setValue({ ...props.value, [props.name]: e.target.value })} className='w-full py-2.5 px-6 outline-none placeholder:text-gray-500 text-gray-500 font-medium placeholder:font-medium bg-gray-100 rounded-xl mt-3' type='text' placeholder={props.placeholder} />
        </div>
    )
}

export default Input