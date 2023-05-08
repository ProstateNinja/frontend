import { ArrowDownward } from '@mui/icons-material'
import { Button, TextField } from '@mui/material'
import React from 'react'

function Screening() {
  return (
    <div className='pt-10'>
      <div>
        <div className='min-h-screen flex flex-col justify-center' >
          <div className='text-6xl my-6 mx-auto max-w-5xl text-center font-bold' >
          Get Screened for Prostate Cancer 
          </div>
          <div className='text-md my-6 mx-auto max-w-4xl text-center font-light'>
            Clinical trials are research studies performed in people that are aimed at evaluating a new medical, surgical, or behavioral intervention. A clinical trial is used to learn if a new treatment is more effective and/or has less harmful side effects than the standard treatment.
            <div className='my-6' >
              Search below to browse thousand of Prostate Cancer Clinical Screening.
            </div>
            <ArrowDownward className='animate-bounce' />
          </div>
        </div>
        <div className='bg-slate-100 p-2 md:p-6 md:py-10' >
          <div className='max-w-6xl text-center mx-auto my-10 text-5xl font-bold' >Find a support group near You</div>
          <div className='flex flex-col lg:flex-row lg:space-x-5 w-fit mx-auto ' >
            <TextField label="enter location" />
            <Button variant='contained'>Search</Button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Screening