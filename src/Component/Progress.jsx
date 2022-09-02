/* Imports */
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Input from './Input';
import RadioCard from './RadioCard';
import Select from './Select';
import { FaAngleLeft } from 'react-icons/fa'

/* Progress Component */
function Progress() {
    /* useState all to get number of input elements. */
    const [all, setAll] = useState(0)
    /* useState to show first 3 questions. */
    const [front, setFront] = useState(true);
    /* useState to show progress on questions completed. */
    const [progress, setProgress] = useState('w-0');
    /* useState to store question's response. */
    const [value, setValue] = useState({
        Name: '',
        Nature: '',
        Type: '',
        Place: '',
        IssuedYear: '',
        ExpiryYear: ''
    })

    /* Declare inputs variable. */
    let inputs;
    inputs = document.getElementsByTagName('input');
    /* to get the width % of one input element */
    let divideWidth = (1 / all) * 100;

    /* handleBack triggers when use clicks Back button. */
    const handleBack = () => {
        setFront(true);
        setValue({ ...value, Nature: '', Type: '' })
    }
    /* useEffect on inputs updated. */
    useEffect(() => {
        /* Variable set to 0. */
        let total = 0;
        /* To get all input elements. */
        for (let index = 0; index < inputs.length; ++index) {
            total = total + 1
        }

        total = total + 1;
        /* Set total to useState all. */
        setAll(total);
    }, [inputs])

    /* useEffect on value, inputs.length, divideWidth updates. */
    useEffect(() => {
        /* set width variable to 0 */
        let width = 0
        /* Gets all keys from useState value. */
        let keys = Object.keys(value)
        /* Check if all keys are filled with value or not if filled then add divideWidth to width. */
        keys.map((item) => {
            if ((item === 'Name' && value[item].length >= 3) || (item === 'Place' && value[item].length >= 3)) {
                width += divideWidth
            }
            else if (item !== 'Name' && item !== 'Place' && value[item] !== '') {
                width += divideWidth
            }
            return <></>
        })
        /* Set useState progress to width value. */
        setProgress(width)

        /* If first 3 questions are completed then automatically show next three questions. */
        if (value.Name !== '' && value.Name.length >= 3 && value.Nature !== '' && value.Type !== '') {
            setFront(false)
        }  
    }, [value, inputs.length, divideWidth])

    /* Returns */
    return (
        <div className='p-3 w-11/12 md:w-6/12 my-12 relative bg-white rounded-xl flex flex-col justify-center items-center'>
            <div className='bg-gray-200 rounded-xl w-full h-1.5'>
                {/* Progress Div to show progress of completed questions. */}
                <div  style={{width: `${progress}%`}} className={`bg-[#FA3637] rounded-xl h-full`}></div>
            </div>
            <div className='text-center text-[#FA3637] font-bold text-xl mt-4'>Let's get started!</div>
            <div className='text-center text-[14px] font-medium text-gray-500'>Add your details (As per your registered records)</div>
        {/* If useState front is true, show below divs else other div. */}
            {front ?
                <div className='w-full flex flex-col  justify-center items-center'>
                    {/* Renders Input Component to show Name field with props data. */}
                    <Input name="Name" title='Name' placeholder='Enter Name' value={value} setValue={setValue} />
                    <div className='w-full md:px-4 mt-4 flex flex-col'>
                        <span className='font-medium text-slate-700'>Nature of Driving License</span>
                        <div className='w-full flex justify-start items-center'>
                            {/* Render RadioCard Component to show Radio field with props data. */}
                            <RadioCard type='Nature' title='Private' value={value} setValue={setValue} />
                            <RadioCard type='Nature' title='Commercial' value={value} setValue={setValue} />
                        </div>
                    </div>
                    <div className='w-full md:px-4 mt-4 flex flex-col'>
                        <span className='font-medium text-slate-700'>Type of Previous Driving License</span>
                        <div className='w-full flex justify-start items-center'>
                            {/* Renders RadioCard Component to show Radio field with props data. */}
                            <RadioCard type='Type' title='Paper Driving License' value={value} setValue={setValue} />
                            <RadioCard type='Type' title='Smart Driving License' value={value} setValue={setValue} />
                        </div>
                    </div>
                </div>
                :
                /* Else below this. */
                <div className='w-full flex flex-col  justify-center items-center'>
                    {/* Renders Input Component to show Place field with props data. */}
                    <Input name="Place" title='Place where Driving License was issued' placeholder='Enter Place Name' value={value} setValue={setValue} />
                    {/* Renders Select Component to show Select field with props data. */}
                    <Select value={value} setValue={setValue} name='IssuedYear' title='Issued Year of License' placeholder='Choose Issued Year of License' />
                    <Select value={value} setValue={setValue} name='ExpiryYear' title='Type of Previous Driving License' placeholder='Choose Expired Year of License' />
                </div>
            }
            {/* onClick back to first 3 questions. */}
            <div onClick={handleBack} className='cursor-pointer flex flex-row justify-center items-center py-2 mt-8 shadow-lg text-center w-2/5 md:w-3/12 text-white rounded-xl bg-[#FA3637]'><FaAngleLeft className='mr-4' /> <span>Back</span></div>
        </div>
    )
}

export default Progress;