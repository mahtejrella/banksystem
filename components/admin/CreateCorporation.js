import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';

export default function CreateCorporation() {

    const [corporation, setCorporation] = useState({
      ip_corpID:"",
      ip_shortName:"",
      ip_longName:"",
      ip_resAssets:"",
    })

    const onSubmit=async(e)=>{
      e.preventDefault();
      let data = await axios.post('/api/viewstats/corporationstats', corporation);
      console.log("data", data.data)
      setCorporation({
        ip_corpID:"",
        ip_shortName:"",
        ip_longName:"",
        ip_resAssets:"",
      });
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
  
                      <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Corporation ID
                        </label>
                        <input
                          type="text"
                          name="ip_corpID"
                          placeholder='Enter Corporation Identifer'
                          value={corporation.ip_corpID}
                          onChange={(e) => setCorporation({...corporation, ip_corpID: e.target.value})}
                          //onChange={(e) => setCorporation(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-yellow-500 block w-full shadow sm:text-sm border-black rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Long Name
                        </label>
                        <input
                          type="text"
                          name="ip_longName"
                          placeholder='Enter Long Name'
                          value={corporation.ip_longName}
                          onChange={(e) => setCorporation({...corporation, ip_longName: e.target.value})}
                          //onChange={(e) => setCorporation(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-yellow-500 block w-full shadow sm:text-sm border-black rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Short Name
                        </label>
                        <input
                          type="text"
                          name="ip_shortName"
                          placeholder='Enter Short Name'
                          value={corporation.ip_shortName}
                          onChange={(e) => setCorporation({...corporation, ip_shortName: e.target.value})}
                          //onChange={(e) => setCorporation(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-yellow-500 block w-full shadow sm:text-sm border-black rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">
                          Reserved Assets
                        </label>
                        <input
                          type="text"
                          name="ip_resAssets"
                          placeholder='Enter Reserved Assets'
                          value={corporation.ip_resAssets}
                          onChange={(e) => setCorporation({...corporation, ip_resAssets: e.target.value})}
                          //onChange={(e) => setCorporation(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-yellow-500 block w-full shadow sm:text-sm border-black rounded-md"
                        />
                      </div>

                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>
  
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-gray-200" />
          </div>
        </div>
      </>
    )
  }
  