
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Service({ service }) {
    const {_id, img, title, price} = service

    return (
        <div className="bg-white shadow-md rounded-md p-6">
            <img
                className="rounded-md mb-4 w-full h-[200px]"
                src={img}
                alt="Card Image"
            />
            <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
            <div className='text-[#FF3811] flex justify-between items-center'>
                <p className='font-semibold'>Price : ${price}</p>
                <Link to={`/book/${_id}`}><FaArrowRight></FaArrowRight></Link>
            </div>
        </div>
    )
}

export default Service
