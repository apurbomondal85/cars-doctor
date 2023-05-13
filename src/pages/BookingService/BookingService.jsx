
import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'

function BookingService() {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)

    const handleBook = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const service_id = service._id;
        const img = service.img

        const order = {
            name,date,email,price,service_id,img
        }

        fetch(`http://localhost:5000/booking`,{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                alert('Your produce added')
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleBook} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                <h2 className='text-center text-3xl font-bold mb-6'>Booking service : {service.title}</h2>
                <div className="w-full flex items-center gap-6">
                    <div className='w-1/2'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            name='name'
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className='w-1/2'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date"
                            type="date"
                            name='date'
                        />
                    </div>
                </div>
                <div className="w-full flex items-center gap-6">
                    <div className='w-1/2'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            name='email'
                            type="email"
                            defaultValue={user?.email}
                        />
                    </div>
                    <div className='w-1/2 my-8'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                            Due amount
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="text"
                            name='price'
                            defaultValue={`$${service?.price}`}
                        />
                    </div>
                </div>
                <div>
                    <button
                        className="bg-blue-500 w-full mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Order Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BookingService
