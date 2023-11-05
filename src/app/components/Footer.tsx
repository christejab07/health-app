import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour, faMedkit, faPhone, faVolumeControlPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faInstagram, faPinterest} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex flex-row'>
      <div className='bg-blue-400 flex flex-col w-[33.33%] px-10 py-5'>
        <FontAwesomeIcon icon={faClockFour} width={30} className='text-white py-3' />
        <h1 className='text-2xl text-white font-semibold py-3 capitalize'>working time</h1>
        <p className='font-semibold uppercase text-md text-white hover:opacity-80'>monday-friday - 24/7</p>
        <hr className='text-white border-[2px] w-[50%] my-5' />
        <p className='font-semibold uppercase text-md text-white hover:opacity-80'>weekends - 8:00-17:00</p>
        <hr className='text-white border-[2px] w-[50%] my-5' />
      </div>
      <div className='bg-blue-600 flex flex-col w-[33.33%] px-10 py-5'>
        <FontAwesomeIcon icon={faMedkit} width={30} className='text-white py-3' />
        <h1 className='text-2xl text-white font-semibold py-3 capitalize'>emergency cases</h1>
        <Link href='/' className='text-center font-semibold'><FontAwesomeIcon icon={faPhone} width={30} className='inline px-1 text-black' />: 10-2345-6789</Link>
        <p className='py-8 text-gray-300'>This is an free emergency you can call when you have a problem, we're always there to help you.</p>
      </div>
      <div className='bg-blue-800 flex flex-col w-[33.33%] px-10 py-5'>
        <FontAwesomeIcon icon={faVolumeControlPhone} width={30} className='text-white py-3' />
        <h1 className='text-2xl text-white font-semibold py-3 capitalize'>Contact us</h1>
        <Link href='/' className='text-gray-300 px-3 py-2'><FontAwesomeIcon icon={faPhone} width={30} className='inline px-1 text-black' />+250 1234567890</Link>
        <Link href='/' className='text-gray-300 px-3 py-2'><FontAwesomeIcon icon={faLinkedin} width={30} className='inline px-1 text-black' /> Marie Angele</Link>
        <Link href='/' className='text-gray-300 px-3 py-2'><FontAwesomeIcon icon={faPinterest} width={30} className='inline px-1 text-black' /> angele.M09</Link>
        <Link href='/' className='text-gray-300 px-3 py-2'><FontAwesomeIcon icon={faInstagram} width={30} className='inline px-1 text-black' /> angele.M09</Link>
        <Link href='/' className='text-gray-300 px-3 py-2'><FontAwesomeIcon icon={faFacebook} width={30} className='inline px-1 text-black' /> angele Marie</Link>
      </div>
    </div>
  )
}

export default Footer