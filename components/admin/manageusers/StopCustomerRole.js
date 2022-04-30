import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';

export default function StopCustomerRole() {

  const [customerList, setCustomerList] = useState([])

  const [customer, setCustomer] = useState([])

  useEffect(() => {
    async function getData(){
      const res = await fetch(`/api/viewstats/customerstats`)
      const data = await res.json()
      setCustomerList(data)
      console.log("data", data)
    }
    getData()
  }, [])


  const onSubmit=async(e)=>{
    e.preventDefault();
    let data = await axios.delete('/api/viewstats/customerstats', customer);
    console.log("data", data.data)
  }

  return (
    <>

    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>

    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={onSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Customer ID
                    </label>
                    <select
                      id="text"
                      name="ip_perID"
                      placeholder='Employee ID'
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      {customerList.map((x, i) =>
                        <option key={x}>{JSON.stringify(x.person_identifier)}</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}
