import '../App.css'

// import links
import { Link } from 'react-router-dom'

// import assets
import video from '../assets/e-solutions.mp4'
import logo from '../assets/logo.jpg'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Test = () => {
    return (
        <div className='flex items-center h-[100vh] w-[100%] m-auto rounded-lg overflow-hidden shadow-lg'>
            <div className="p-1 container flex flex-col md:flex-row items-center h-[80vh] w-[60%] m-auto justify-between rounded-lg bg-gray-200 ">
                <div className='flex flex-col w-full md:w-[60%] h-full text-center justify-center rounded-lg overflow-hidden relative'>

                    <video src={video} autoPlay muted loop className='h-[100%] w-[100%] object-cover top-0 bottom-0 right-0 left-0 absolute'></video>
                    <div className='relative'>
                        <h1 className='text-blue-700 text-3xl font-extrabold sm:text-xl'>Ready to Manage Your Business License?</h1>
                        <p className='p-1 font-medium sm:p-4'>Do it with Masvingo City Council e-Licensing Portal</p>
                    </div>

                    <div className='bottom-5 h-[60px] items-center p-2 bg-[rgba(14,13,13,0.25)] left-5 right-5 justify-between backdrop:blur-[1px] rounded-lg absolute'>
                        <span className="text-amber-100 font-bold sm:text-lg">
                            Don't have any account?
                        </span>
                        <Link to="/register">
                            <button className='ml-1 h-10 p-2 rounded-md border text-center bg-slate-500 hover:bg-blue-700 hover:border-green-700 transition ease-in'>Sign Up</button>
                        </Link>
                    </div>
                </div>
                {/* sign up form */}
                <div className="basis-[50%] flex-col p-4 gap-6 items-center">
                    <div className='flex flex-col items-center text-center mb-4'>
                        <img
                            src={logo}
                            alt=""
                            width={60}
                            className='pb-2'

                        />
                        <h3 className='text-2xl font-semibold text-black'>Welcome Back</h3>
                    </div>

                    {/* form */}
                    <form className="flex items-center flex-col gap-4" action=''>

                        <span className='block p-4 text-white bg-red-700 text-center rounded-lg'>Login msg goes here</span>

                        <div className="inputDiv">
                            <label htmlFor="username" className='text-black font-normal text-[14px] py-2 block'>username/license id</label>
                            <div className=' flex items-center gap-2'>
                                <FaUserShield className=' text-blue-500 text-2xl' />
                                <input
                                    type="text"
                                    id='username'
                                    placeholder='Enter Username'
                                    className='w-[250px] border border-blue-500 hover:border-red-500 rounded-lg p-2 outline-none bg-amber-50 transition-all duration-300 ease-in'
                                />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password" className='text-black font-normal text-[14px] py-2 block'>Enter your password</label>
                            <div className='flex items-center gap-2'>
                                <BsFillShieldFill className=' text-blue-500 text-2xl' />
                                <input
                                    type="password"
                                    id='password'
                                    placeholder='Enter Password'
                                    className="w-[250px] border border-blue-500 hover:border-red-500 rounded-lg p-2 outline-none bg-slate-50 transition-all duration-300 ease-in" />
                            </div>
                        </div>

                        <button
                            type='submit'
                            className="inline-flex items-center justify-center mx-auto px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[50px] transition-all duration-300 ease-in hover:bg-transparent hover:outline hover:text-black">
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon' />
                        </button>

                        <a href="/dashboard">To dashboard</a>

                        <span className='text-[13px] text-black text-center'>
                            Did you forgot your password?<br />
                            <a className='cursor-pointer underline opacity-70' href="">Click Here</a>
                        </span>

                    </form>


                </div>
            </div>
        </div>
    )
}

export default Test