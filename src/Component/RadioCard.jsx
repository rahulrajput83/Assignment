import React from 'react'

/* RadioCard Component to show input radio elements. */
function RadioCard(props) {
    const handleRadio = (e) => {
        props.setValue({...props.value, [props.type]: e.target.value})
    }

    return (
        <div onChange={handleRadio} className="cursor-pointer w-1/2 flex justify-start items-center mx-1 py-2.5 px-2 outline-none placeholder:text-gray-500 text-gray-500 font-medium placeholder:font-medium bg-gray-100 rounded-xl mt-3">
            <input className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#FA3637] checked:border-[#FA3637] transition duration-200 align-top bg-no-repeat bg-center bg-contain cursor-pointer" type="radio" name={props.type} id={props.title} value={props.title} />
            <label className="ml-2 form-check-label inline-block text-gray-800" htmlFor="inlineRadio10">{props.title}</label>
        </div>
    )
}

export default RadioCard;