import React, { useState } from 'react'
import Pdata from "../Data/base.json"
function Product() {
  const filter={

  }
  return (
    <div>  
                  <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VanshajMart</span>
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/product" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Product</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>     
      <div className=' w-screen'> 
        <div>
          <div className='flex m-2 bg-blue-700 text-white rounded-lg p-3'>
            <form className='flex'>
              <span className="text-[30px] font-bold">Filters : </span>
              <div className='flex'>
                <h1  className='font-bold m-2'>Company Name</h1>
                <select name="" id="" className='text-black  rounded-lg'>
                                    <option value="">Select a company</option>
                                    <option value="AMZ">AMZ</option>
                                    <option value="FLP">FLP</option>
                                    <option value="SNP">SNP</option>
                                    <option value="MYN">MYN</option>
                                    <option value="AZO">AZO</option>
                         </select>
              </div>
              <div className='flex'>
                <h1  className='font-bold  m-2'>Rating</h1>
                <select name="" id=""  className='text-black rounded-lg'>
                <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div className='flex'>
                <h1 className='font-bold m-2'>Price Range :</h1>
                <label htmlFor=""  className='ml-2'>min</label>
                <input type="number" min="0" className='text-black rounded-lg'/>
                <label htmlFor="">max</label>
                <input type="number" min="0" value="1000"  className='text-black rounded-lg'/>
              </div>
              <div className='flex'>
                
                <h1  className='font-bold m-2'>availablibity</h1>
                <select name="" id=""  className='text-black'>
                  <option value="0">Include All</option>
                  <option value="1">Available</option>
                  <option value="2">Out Of Stock</option>
                </select>
              </div>
              <button className='bg-white text-blue-600 rounded-lg ml-4 p-4'>Apply</button>
              </form>
          </div>
          <div className='flex m-2 bg-blue-700 text-white rounded-lg p-3'>
            <form action="">
          <span className="text-[25px] font-bold">Sort : </span>
                  <select className='text-black  rounded-lg'>
                    <option value="sort">Sort</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                    <option value="discount">Discount</option>
                  </select>
                  <button className='bg-white text-blue-600 rounded-lg ml-4 p-4'>Apply</button>
            </form>
          </div>
        </div>
      </div> 
      <div className='flex gap-x-2 m-4'>
      {Pdata.map((data,index) => (
      <div key={index} class="cardanimation w-1/6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href={`/${data.productName}`}>
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.productName}</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {data.price}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rating: {data.rating}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Discount: {data.discount}</p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Availability: {data.availability}</p>
          <a href={`/${data.productName}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
          </a>
      </div>

  ))}</div>   
  </div>
  )
}

export default Product