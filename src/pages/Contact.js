import { Button, Checkbox, TextField } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
    return (
        <div className='py-20 bg-gradient-to-t from-blue-300 to-transparent' >
            <div className='min-h-screen flex flex-col justify-evenly w-screen'>
                <div className='flex flex-col my-10' >
                    <div className='text-6xl font-bold text-center' >Let's Connect</div>
                    <div className='text-lg my-3 font-extralight text-center' >Let us Know How We can Help You</div>
                </div>
                <div className='flex items-center max-w-[1300px] w-full mx-auto py-10' >
                    <div className='w-1/2 flex justify-center items-center' >
                        <LocationOnIcon sx={{ width: 40 }} />
                    </div>
                    <div className='w-1/2' >
                        <p className='text-3xl my-3' >
                            Contact Information
                        </p>
                        <table className='w-full mt-12 ' >
                            <tr className='border-b' >
                                <td className='p-4' >Email</td><td>fjd@mail.com</td>
                            </tr>
                            <tr className='border-b' >
                                <td className='p-4' >Email</td><td>fjd@mail.com</td>
                            </tr>
                            <tr className='border-b' >
                                <td className='p-4' >Email</td><td>fjd@mail.com</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='flex md:w-[90%] mx-auto bg-white py-5 rounded-xl p-16' >
                <div className='w-1/2' >
                    <p className='text-3xl my-10' >Send a message</p>
                    <table className='w-full my-12' >
                        <tr>
                            <td className='py-5 pr-4' >Name*</td>
                            <td className='py-5 pr-4' ><TextField  fullWidth variant='outlined' /></td>
                        </tr>
                        <tr>
                            <td className='py-5 pr-4' >Email*</td>
                            <td className='py-5 pr-4' ><TextField fullWidth  variant='outlined' /></td>
                        </tr>
                        <tr>
                            <td className='py-5 pr-4' >Comment*</td>
                            <td className='py-5 pr-4' ><TextField multiline rows={4} fullWidth variant='outlined' /></td>
                        </tr>
                    </table>
                    <Button variant='contained'>Send</Button>
                    <div className='my-5' >
                        <Checkbox />
                        <>I have read and accept the Privacy Policy</>
                    </div>
                </div>
                <div className='w-1/2 flex justify-center items-center' >
                    globe image
                </div>
            </div>
        </div>
    )
}

export default Contact