import React, { useState } from 'react'

import '../components/form.scss'

const Form = () => {

    

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">All types form</span>
                <form >
                    <input type="text" placeholder='Username..' />
                    <input type="text" placeholder='Email..' />
                    <input type="text" placeholder='Occupation..' />
                     <label htmlFor="">Gender</label>
                     <div className='gender'>
                     <input type="radio" />
                     <label htmlFor="male">male</label>
                     <input type="radio" />
                     <label htmlFor="female">Female</label>
                     <input type="radio" />
                     <label htmlFor="others">Others</label>
                     </div>
                  
                    <button >Submit</button>
                </form>

            </div>
        </div>
    )
}

export default Form