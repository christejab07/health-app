"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { CustomDoctorProps} from '../../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farstar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from '.';

const DoctorTemplate = ({name, specification, hospital, imageSrc, styles}: CustomDoctorProps) => {
  const[isOpen, setIsOpen] = useState(false)
  const handleClick = () =>{
    setIsOpen(!isOpen)
    console.log(isOpen);
    
  }
  return (
    <div className='flex w-full p-8'>
        <Image src={imageSrc} className={`${styles} h-auto w-[40%]`} alt='doctor' width={100} height={100} />
        <div className='px-16 w-[60%] pt-10 text-lg'>
            <h1 className='underline font-bold text-black capitalize py-1'>{`Dr. ${name}`}</h1>
            <p className='capitalize font-thin py-1'>{specification}</p>
            <p className='capitalize font-thin py-1'>{hospital}</p>
            <div className='py-1'>
              <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
              <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
              <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
              <FontAwesomeIcon icon={faStar} className='text-yellow-300' />
              <FontAwesomeIcon icon={farstar} className='text-gray-300' />

            </div>
            <div className='bg-blue-500 flex px-3 py-2 rounded-md hover:rounded-lg '>
              <Button title='view more' btnType='button' containerStyles='' textStyles='ml-20 mr-16 capitalize hover:font-bold' rightIcon="/right-arrow.svg" onClick={handleClick}/>
            </div>
        </div>
        {/* <DoctorDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} doctor={doctor} /> */}
    </div>
  )
}

export default DoctorTemplate