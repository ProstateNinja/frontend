import { Button, Checkbox, TextField } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <div>
        <div>
            <div>Let's Connect</div>
            <div>Let us Know How We can Help You</div>
        </div>
        <div>
            <div>
                mapIcon
            </div>
            <div>
                <p>
                    Contact Information
                </p>
                <div>
                    <div>Email</div><div>fjd@mail.com</div>
                    <div>Email</div><div>fjd@mail.com</div>
                    <div>Email</div><div>fjd@mail.com</div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <p>Send a message</p>
                <table>
                    <tr>
                        <td>Name*</td>
                        <td><TextField variant='standard' /></td>
                    </tr>
                    <tr>
                        <td>Name*</td>
                        <td><TextField variant='standard' /></td>
                    </tr>
                    <tr>
                        <td>Name*</td>
                        <td><TextField variant='standard' /></td>
                    </tr>
                </table>
                <Button variant='contained'>Send</Button>
                <div>
                    <Checkbox /> 
                    <>I have read and accept the Privacy Policy</>
                </div>
            </div>
            <div>
                globe image
            </div>
        </div>
    </div>
  )
}

export default Contact