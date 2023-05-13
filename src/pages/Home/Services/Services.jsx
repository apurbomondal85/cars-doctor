
import React, { useEffect, useState } from 'react'
import Service from './Service'

function Services() {
    const [services, setServices] = useState(null)

    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

  return (
    <div className='py-12'>
      <div className='text-center space-y-4'>
        <h2 className='text-[#FF3811] text-xl font-bold'>Service</h2>
        <h1 className='text-[#151515] text-4xl font-bold'>Our Service Area</h1>
        <p className='lg:w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      </div>
      <div className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
        {
            services?.map(service => <Service key={service._id} service={service}></Service>)
        }
      </div>
    </div>
  )
}

export default Services
