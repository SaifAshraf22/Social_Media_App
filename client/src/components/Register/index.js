import React from 'react'
import Signup from './Signup'
import img from '../../assets/rocket.png'

const RegisterPage = () => {
  return (
    <div className='container mt-3'>
    <div className='row'>
      <div className='col-md-5'>
        <Signup />
    
      </div>
      <div className='col-md-7 my-auto'>
        <img className='img-fluid w-100' src={img}/>
      </div>
    </div>
  </div>
  )
}

export default RegisterPage