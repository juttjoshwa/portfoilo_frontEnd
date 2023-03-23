import React from 'react'
import { Link } from 'react-router-dom'
import "./Contact.css"

const ThankYou = () => {
    
    let animationprop 

    const handleClick = ()=>{
        animationprop = "data-aos=slide-down data-aos-anchor=.other-element data-aos-duration=1000"
    }
  return (
    <div data-aos="slide-down" data-aos-anchor=".other-element" data-aos-duration="1000"  >
        {animationprop}
        <div className='container'>
            <div className='row thank'>
                <div className='col-12 Yashwa d-flex justify-content-center align-items-center animate__animated animate__jello animate__repeat-2'>
Thank You
                </div>
                <p className='text-center text-capitalize' >back to <span><Link to={'/'} type='btn' onClick={handleClick} className='btn btn-outline-info'>Home</Link></span></p>
            </div>
        </div>
    </div>
  )
}

export default ThankYou