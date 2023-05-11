
import image1 from '../../../assets/images/about_us/person.jpg'
import image2 from '../../../assets/images/about_us/parts.jpg'

function About() {
    return (
        <div className='py-20'>
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-md px-4 py-8 gap-6">
                <div className="md:w-1/2 md:flex-shrink-0 relative">
                    <img
                        className="rounded-md md:w-3/4 h-[380px]"
                        src={image1}
                        alt="Card Image"
                    />
                    <img
                        className="rounded-md md:w-1/2 h-[230px] absolute right-0 top-1/2 border-8 border-white"
                        src={image2}
                        alt="Card Image"
                    />
                </div>
                <div className="md:ml-6 md:pr-16 lg:pr-24 space-y-4">
                    <h2 className="text-lg font-bold text-[#FF3811]">About Us</h2>
                    <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
                    <p className="text-gray-700 mt-2">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="text-gray-700 mt-2">
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn bg-[#FF3811] text-white font-bold">
                        Get More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
