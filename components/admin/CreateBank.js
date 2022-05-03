import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';

export default function Example() {

  const [bank, setBank] = useState()

  const [name, setName] = useState()

  const [street, setStreet] = useState()

  const [city, setCity] = useState()

  const [state, setState] = useState()

  const [zip, setZip] = useState()

  const [resAssets, setresAssets] = useState()

  const [selectedCorp, setSelectedCorp] = useState("BA_South")

  const [selectedManager, setSelectedManager] = useState("ghopper9")

  const [selectedEmployee, setSelectedEmployee] = useState("arwhite6")

  const [corpList, setCorpList] = useState([])

  const [managerList, setManagerList] = useState([])

  const [employeeList, setEmployeeList] = useState([])

  useEffect(() => {
    async function getData(){
      const res = await fetch(`/api/corporation`)
      const data = await res.json()
      setCorpList(data)
      console.log("data", data)
    }

    async function getData2(){
      const res = await fetch(`/api/bank`)
      const data = await res.json()
      setManagerList(data)
      console.log("data", data)
    }

    async function getData3(){
      const res = await fetch(`/api/employee`)
      const data = await res.json()
      setEmployeeList(data)
      console.log("data", data)
    }

    getData()
    getData2()
    getData3()
  }, [])

  const onSubmit=async(e)=>{
    e.preventDefault();
    const payload = {bank, name, street, city, state, zip, resAssets, selectedCorp, selectedManager, selectedEmployee};
    let data = await axios.post('/api/bank', payload);
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

                  <div className="col-span-6 block text-md font-bold font-large text-gray-700">Create Bank</div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bank ID
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={bank}
                        onChange={(e) => setBank(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 block text-md font-bold font-large text-gray-700">Address Info</div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State Abbr.
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Zip code
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 block text-md font-bold font-large text-gray-700">Operation Info</div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Reserved Assets
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        value={resAssets}
                        onChange={(e) => setresAssets(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        CorpID
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        value={selectedCorp}
                        onChange={(e) => setSelectedCorp(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                      {corpList.map((x, i) =>
                        <option key={x}>{x.corpID}</option>
                      )}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        manager
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={selectedManager}
                        onChange={(e) => setSelectedManager(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                      {managerList.map((x, i) =>
                        <option key={x}>{x.manager}</option>
                      )}
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        employee
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={selectedEmployee}
                        onChange={(e) => setSelectedEmployee(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                      {employeeList.map((x, i) =>
                        <option key={x}>{x.perID}</option>
                      )}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow text-sm font-medium rounded-md text-white bg-black hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
  );
}
