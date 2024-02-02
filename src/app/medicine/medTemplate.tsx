import React from 'react'
import Image from 'next/image'
import { MedicineProps } from '../../../types'
import { Button } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeControlPhone } from '@fortawesome/free-solid-svg-icons'
const MedTemplate = ({name, location, imageSrc, manufacturer, prix}: MedicineProps) => {
  return (
    <div className='flex flex-row'>
        <Image width="100" height="100" alt={name} src={imageSrc} className='w-1/2 h-52' />
        <div className='mx-5'>
          <p className='font-bold capitalize text-3xl'>{name}</p>
          <p>{manufacturer}</p>
          <p>{location}</p>
          <p><span className='font-semibold'>Price:</span> {prix}rwf/box</p>
          <nav className='flex px-11 my-2 py-2 rounded-md border bg-transparent border-gray-400'>
            <FontAwesomeIcon icon={faVolumeControlPhone} className='text-gray-400 mt-1 mx-2' />
            <Button title='contact the vendor' textStyles='capitalize text-blue-500' btnType='button'/>
          </nav>
          <Button title='get the best price' containerStyles='bg-blue-500 border-blue-500 my-2 border px-16 py-2 rounded-md' textStyles='capitalize font-semibold' />
        </div>
    </div>
  )
}

export default MedTemplate