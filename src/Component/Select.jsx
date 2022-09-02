import React from 'react'

/* Select Component to show select elements. */
function Select(props) {
    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(10), (val, index) => index + year);
    const handleChange = (e) => {
        props.setValue({...props.value, [props.name]: e.target.value})
    }
    return (
        <div className='w-full md:px-4 mt-4 flex flex-col'>
            <span className='font-medium text-slate-700'>{props.title}</span>
            <select onChange={handleChange} className='w-full relative py-2.5 px-6 outline-none placeholder:text-gray-500 text-gray-500 font-medium placeholder:font-medium bg-gray-100 rounded-xl mt-3'>
                {
                    years.map((year, index) => {
                        return (
                            <option className='bg-white absolute top-full hover:bg-blue-700 text-pink-700 rounded-xl' key={`year${index}`} value={year}>{year}</option>

                        )
                    })
                }
            </select>
        </div>
    )
}

export default Select