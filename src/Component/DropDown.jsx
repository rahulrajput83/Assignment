import React from 'react'
import { useState } from 'react';
import {FaAngleDown} from 'react-icons/fa'


const Data = ['Sales', 'Document Pickup', 'Document Dispatch', 'Document Return', 'Payment', 'Option1', 'Option2', 'Other']

function DropDown() {
    const [issue, setIssue] = useState('Choose Issue');
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        if (open) {
            setOpen(false)
        }
        else {
            setOpen(true)
        }
    }

    const handleChoose = (item) => {
        setIssue(item);
        setOpen(false);
    }
    return (
        <div className='w-full z-10 flex flex-col justify-center items-center'>
            <div className='w-11/12 md:w-6/12 mt-4 flex flex-col'>
                <span className='font-medium text-slate-700'>Issue</span>
                <button onClick={handleOpen} className='text-left rounded-2xl flex flex-row items-center justify-between mt-4 p-4 text-[#C3C3C3] bg-white'>
                    <span>{issue}</span>
                    <FaAngleDown />
                    </button>
                <div className='relative mt-4 w-full'>
                    {open ? <div className='flex h-96 overflow-auto z-10 shadow-xl bg-white rounded-2xl w-full p-8 flex-col absolute bg-white top-full'>
                        <div className='w-full '>
                            <span className='text-lg text-[#6E6E6E]'>All Issues</span>
                            {
                                Data.map((item) => {
                                    return (
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