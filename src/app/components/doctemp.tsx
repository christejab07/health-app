import React from 'react'
import Image from 'next/image'
import { CustomDoctorProps } from '../../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farstar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const DoctorTemplate = ({name, hospital, specification, imageSrc}: CustomDoctorProps) => {
  return (
    <div className='flex w-full p-8'>
        <Image src={imageSrc} className='h-auto w-[40%]' alt='doctor' width={100} height={100} />
        <div className='px-16 w-[60%] pt-28 text-lg'>
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
        </div>
    </div>
  )
}

export default DoctorTemplate