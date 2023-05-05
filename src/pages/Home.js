import { Button, TextField } from '@mui/material'
import React from 'react'

function Home() {
  return (
    <div>
      <div>
        <div>What is Prostate Cancer ?</div>
        <div>
          Prostate cancer is the most common non-skin cancer in America.
          <br />
          In the United States, 1 out of every 9 men will be diagnosed with prostate cancer in their lifetime.
          <br />
          Learn more about the symptoms to watch out for, screening recommendations, causes, and survival rates below.
        </div>
      </div>

      <div>
        <div>Clinical Trials</div>
        <div>
          Clinical trials offer hope for many people and an opportunity to help researchers find better treatments for others in the future.
        </div>
        <div>
          Clinical trials are research studies performed in people that are aimed at evaluating a new medical, surgical, or behavioral intervention. A clinical trial is used to learn if a new treatment is more effective and/or has less harmful side effects than the standard treatment.
          <br />
          Search below to browse thousand of Prostate Cancer Clinical Trials.
        </div>
        <div>
        <div>Find a Support Group near You</div>
        <div>
          <TextField label="enter location" />
          <TextField label="enter location" />
          <TextField label="enter location" />
          <Button variant='contained'>Search</Button>
        </div>
        <Button variant='contained'>Search</Button>
      </div>
      </div>
      
      <div>
        <div>Find a Support Group near You</div>
        <div><TextField label="enter location" /></div>
        <Button variant='contained'>Search</Button>
      </div>
      
      <div className='grid grid-cols-3 gap-6 my-8' >
        {
          [1,1,1,1,1,1].map((item, index) => 
          <div class="max-w-[350px] m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700">
          <a href="#">
              <img class="rounded-t-lg w-full h-60 object-cover " src="https://source.unsplash.com/240x320/?portrait?0" alt="" />
          </a>
          <div class="p-5">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog title header</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">HNulla ut sit esse enim consectetur sint esse proident occaecat cupidatat ullamco do quis.</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
          </div>
      </div>)
        }
      </div>
    </div>
  )
}

export default Home