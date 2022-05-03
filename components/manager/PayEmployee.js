import {React, useState, useEffect} from 'react'
import axios from 'axios';

export default function PayEmployee() {

  const onSubmit=async(e)=>{
    e.preventDefault();
    let data = await axios.post('/api/pay');
  }

  return (
      <>
        
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div>
              <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow text-sm font-medium rounded-md text-white bg-black hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Pay Employee 
              </button>
          </div>
        </form>
      </>
  )
}
