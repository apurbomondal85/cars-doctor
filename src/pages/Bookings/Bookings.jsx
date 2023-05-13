
import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import img from '../../assets/images/checkout/checkout.png'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import BookingRow from './BookingRow'

function Bookings() {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/booking?email=${user.email}`

    useEffect(() => {
        fetch(url,{
                method: "GET",
                headers: {
                    authorization : `bearer ${localStorage.getItem('cars-token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are you sure for delete')
        if (proceed) {
            fetch(`http://localhost:5000/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <div className='h-[300px] w-full flex items-center pl-16' style={{ backgroundImage: `url(${img})` }}>
                <h1 className='text-white text-3xl font-bold'>Bookings List</h1>
            </div>
            <div className='my-16 '>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="px-6 py-3">
                                Delete
                            </th>
                            <th className="px-6 py-3">
                                Image
                            </th>
                            <th className="px-6 py-3">
                                Name
                            </th>
                            <th className="px-6 py-3">
                                Email
                            </th>
                            <th className="px-6 py-3">
                                Price
                            </th>
                            <th className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map(booking => <BookingRow key={booking._id} handleDelete={handleDelete} booking={booking}></BookingRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bookings
