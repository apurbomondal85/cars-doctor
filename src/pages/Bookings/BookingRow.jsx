
import React from 'react'
import { FaTimes } from 'react-icons/fa'

function BookingRow({ booking, handleDelete }) {


    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <button onClick={() => handleDelete(booking._id)} type="button" className="text-white bg-slate-950 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                        <FaTimes></FaTimes>
                    </button>
                </div>
            </td>
            <td className="px-6 py-4">
                <img src={booking?.img} className='h-16' alt="" />
            </td>
            <td className="px-6 py-4">
                {booking?.name}
            </td>
            <td className="px-6 py-4">
                {booking?.email}
            </td>
            <td className="px-6 py-4">
                {booking?.price}
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    )
}

export default BookingRow
