/* Imports */
import React from 'react'
import { useState } from 'react';
import {FaAngleDown} from 'react-icons/fa'

/* Issues List */
const Data = ['Sales', 'Document Pickup', 'Document Dispatch', 'Document Return', 'Payment', 'Option1', 'Option2', 'Other']

/* DropDown Component */
function DropDown() {
    /* UseState for default Issue?Selected Issue */
    const [issue, setIssue] = useState('Choose Issue');
    /* useState to open/hide DropDown */
    const [open, setOpen] = useState(false);

    /* handleOpen  */
    const handleOpen = () => {
        /* If open is true, set to false */
        if (open) {
            setOpen(false)
        }
        else {
            /* Else set to true. */
            setOpen(true)
        }
    }

    /* handleChoose when Issue is selected. */
    const handleChoose = (item) => {
        setIssue(item);
        setOpen(false);
    }

    /* Return */
    return (
        <div className='w-full z-10 flex flex-col justify-center items-center'>
            <div className='w-11/12 md:w-6/12 mt-4 flex flex-col'>
                <span className='font-medium text-slate-700'>Issue</span>
                {/* Buttuon onCLick triggers handleOpen. */}
                <button onClick={handleOpen} className='text-left rounded-2xl flex flex-row items-center justify-between mt-4 p-4 text-[#C3C3C3] bg-white'>
                    <span>{issue}</span>
                    {/* Icon */}
                    <FaAngleDown />
                    </button>
                <div className='relative mt-4 w-full'>
                    {/* Conditional Randering if useState is true return below code else null. */}
                    {open ? <div className='flex h-96 overflow-auto z-10 shadow-xl bg-white rounded-2xl w-full p-8 flex-col absolute bg-white top-full'>
                        <div className='w-full '>
                            <span className='text-lg text-[#6E6E6E]'>All Issues</span>
                            {/* Map function on Data. */}
                            {
                                Data.map((item) => {
                                    return (
                                        /* OnClick triggers handleChoose. */
                                        <div onClick={()=> handleChoose(item)} key={item} className='p-2.5 cursor-pointer rounded-xl text-center font-medium w-full bg-gray-100 mt-3'>{item}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default DropDown