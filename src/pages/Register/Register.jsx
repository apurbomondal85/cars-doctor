
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

function Register() {
    const {register} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        register(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            form.reset();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
          });

    }

    return (
        <div className='flex items-center justify-center gap-8 py-16 px-8 bg-gray-100'>
            <div className="w-1/2">
                <img src={img} alt="login image" />
            </div>
            <form onSubmit={handleRegister} className="w-1/2 shadow-lg bg-white rounded-md p-8">
                <h1 className="text-center text-4xl font-bold text-slate-800 mb-6">Sing Up</h1>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="name"
                            type="text"
                            placeholder="Name"
                            name='name'
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name='email'
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                            id="password"
                            type="password"
                            placeholder="********"
                            name='password'
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="w-full bg-[#FF3811] text-white font-bold btn"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
                <div className='text-slate-700 mt-4 space-y-4 text-center'>
                    <p>Or Sign Up with</p>
                    <div className='flex items-center justify-center gap-4 text-xl'>
                        <Link className='w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center'><FaFacebook></FaFacebook></Link>
                        <Link className='w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center'><FaLinkedinIn></FaLinkedinIn></Link>
                        <Link className='w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center'><FcGoogle></FcGoogle></Link>
                    </div>
                    <p>Have an account? <Link className='text-[#FF3811]' to='/login'>Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register
