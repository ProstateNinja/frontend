import { ArrowRight, ArrowRightAltSharp } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

function About() {
  return (
     <div className='pt-10'>
      <div className='min-h-screen p-6 flex flex-col bg-slate-200 justify-center' >
        <div className=' w-full max-w-5xl mx-auto'>
          <div className='text-3xl md:text-5xl mb-4' >Who are we ? </div>
          <div className='text:2xl md:text-3xl mb-4 font-extralight ' >
            Est et do ea ea anim in tempor. Irure ea mollit minim laborum velit reprehenderit aute voluptate sit culpa sint sit in. Nostrud anim dolore labore labore Lorem consequat elit enim consequat excepteur aliquip dolor. Sint magna pariatur in consequat incididunt .
          </div>
          {/* <Button variant='contained' className='mt-4' >More</Button> */}
        </div>
      </div>
      <div className='w-[90%] m-auto py-6 md:p-10 ' >
        <div className='text-4xl my-2' >Quick Links</div>
        <div className='text-md font-extralight' >Access The Information and Resources You Need</div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10 my-10' >
          <div className='flex justify-between border hover:bg-slate-200 transition duration-300 border-black rounded-md p-3 group' >
            <div>Find A  screening</div>
            <span className=' transition duration-300 group-hover:-rotate-45' >
              <ArrowRightAltSharp />
            </span>
          </div>
          <div className='flex justify-between border hover:bg-slate-200 transition duration-300 border-black rounded-md p-3 group' >
            <div>Find A  screening</div>
            <span className=' transition duration-300 group-hover:-rotate-45' >
              <ArrowRightAltSharp />
            </span>
          </div>
          <div className='flex justify-between border hover:bg-slate-200 transition duration-300 border-black rounded-md p-3 group' >
            <div>Find A  screening</div>
            <span className=' transition duration-300 group-hover:-rotate-45' >
              <ArrowRightAltSharp />
            </span>
          </div>
        </div>
      </div>

      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">144K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Downloads
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Subscribers
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div class="text-center">
            <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
            <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Cookies
            </p>
          </div>
        </div>
      </div>
      <div className='py-6 dark:bg-gray-800 dark:text-gray-100'>
        <section class="py-6 dark:bg-gray-800 dark:text-gray-100 max-w-7xl m-auto">
          <div class="container p-4 mx-auto space-y-16 sm:p-10">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold leading-none sm:text-5xl text-left ">Meet our team</h3>
              <p class="max-w-2xl dark:text-gray-400 text-left">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
            </div>
            <div class="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 1, 1, 1, 1, 1, 1, 1].map(() => <div class="space-y-4">
                <img alt="" class="object-cover h-56 mx-auto mb-4 bg-center rounded-sm dark:bg-gray-500" src="https://source.unsplash.com/240x320/?portrait?0" />
                <div class="flex flex-col items-center">
                  <h4 class="text-xl font-semibold">Leroy Jenkins</h4>
                  <p class="text-sm dark:text-gray-400">Web developer</p>
                  <div class="flex mt-2 space-x-2">
                    <a rel="noopener noreferrer" href="#" title="Twitter" class="dark:text-gray-400 hover:text-gray-500 ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-4 h-4">
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a rel="noopener noreferrer" href="#" title="LinkedIn" class="dark:text-gray-400 hover:text-gray-500 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-4 h-4">
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a rel="noopener noreferrer" href="#" title="GitHub" class="dark:text-gray-400 hover:text-gray-500 ">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-4 h-4">
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>)}
            </div>
          </div>
        </section>
      </div>
      <div className='flex flex-col md:flex-row p-7 mt-[5vh]'>
        <div className='md:w-2/5 text-3xl md:text-4xl md:sticky top-[300px] items-start font-bold pt-7' >Your Questions Answered</div>
        <div className='md:w-3/5 text-[18px] md:text-[25px] text-left '>
          {
            [1,1,1,1,1].map((item, index) => 
              <div>
            <div className='group cursor-pointer font-bold py-7 border border-transparent border-b-black h-fit transform duration-500' >Is it free to sign up and create a talent profile ?
              <div className='h-0 overflow-hidden font-light transform group-hover:h-auto group-hover:overflow-visible duration-500 group-hover:py-4 md:group-hover:py-10 cursor-pointer text-base'>
                Yes, it's completely free to sign up and create a talent profile on our platform.
              </div>
            </div>
          </div>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default About