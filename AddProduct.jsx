import React from 'react'
import {useForm } from 'react-hook-form'

const AddProduct = () => {

  const{register,handleSubmit,reset} =useForm()

  const onSubmit =(data) =>{
  console.log(data)
  alert('product Added!')
  reset()
}
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
    <form className='bg-white p-6 rounded-1g shadow-md w-96 space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <h2 className='text-xl font-semihold text-center'></h2>


      <input placeholder='Enter product name'
      className='w-full border p-2 rounded'
      {...register("price")}/>




<input placeholder='Enter product name'
      className='w-full border p-2 rounded'
      {...register("image")}/>




<textarea placeholder='Enter product description'
      className='w-full border p-2 rounded h-24'
      {...register("description")}/>

      <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded'>Addproduct</button>

    </form>
</div>
  )
}
export default AddProduct