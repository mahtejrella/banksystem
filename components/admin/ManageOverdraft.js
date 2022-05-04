import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';

export default function ManageOverdraft() {

  const [checkingList, setCheckingList] = useState([])
  const [overdraftList, setOverdraftList] = useState([])
  const [savingsList, setSavingsList] = useState([])

  const [selectedChecking, setSelectedChecking] = useState("checking_A")
  const [selectedOverdraft, setSelectedOverdraft] = useState()
  const [selectedSavings, setSelectedSavings] = useState("savings_B")

  const [bankList, setBankList] = useState([])
  const [selectedBank, setSelectedBank] = useState("BA_West")

  const [bankList1, setBankList1] = useState([])
  const [selectedBank1, setSelectedBank1] = useState("BA_West")

  const [overdraft, setOverdraft] = useState("Add")

  useEffect(() => {
    async function getData(){
      const res = await fetch(`/api/checking`)
      const data = await res.json()
      setCheckingList(data)
      console.log("data", data)
    }

    async function getData2(){
      const res = await fetch(`/api/savings`)
      const data = await res.json()
      setSavingsList(data)
      console.log("data", data)
    }

    async function getData3(){
      const res = await fetch(`/api/checking`)
      const data = await res.json()
      setBankList(data)
      console.log("data", data)
    }

    async function getData4(){
      const res = await fetch(`/api/savings`)
      const data = await res.json()
      setBankList1(data)
      console.log("data", data)
    }

    getData()
    getData2()
    getData3()
    getData4()
  }, [])

  const onSubmit=async(e)=>{
    e.preventDefault();
    const payload = {selectedChecking, selectedSavings, selectedBank, selectedBank1};

    if (overdraft == "Add") {
      let data = await axios.post('/api/addoverdraft', payload);
      console.log("data", data.data)
    } else {
      let data = await axios.post('/api/removeoverdraft', payload);
      console.log("data", data.data)
    }
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
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Bank (Checking)
                          </label>
                          <select
                            id="country"
                            value={selectedBank}
                            onChange={(e) => setSelectedBank(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                          {bankList.map((x, i) =>
                            <option key={x}>{x.bankID}</option>
                          )}
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Bank (Saving)
                          </label>
                          <select
                            id="country"
                            value={selectedBank1}
                            onChange={(e) => setSelectedBank1(e.target.value)}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                          {bankList1.map((x, i) =>
                            <option key={x}>{x.bankID}</option>
                          )}
                          </select>
                        </div>
                      
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Available Checking Accounts
                        </label>
                        <select
                          id="country"
                          value={selectedChecking}
                          onChange={(e) => setSelectedChecking(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {checkingList.map((x, i) =>
                          <option key={x}>{x.accountID}</option>
                        )}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Overdraft Policy
                        </label>
                        <select
                          id="country"
                          value={overdraft}
                          onChange={(e) => setOverdraft(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Add</option>
                          <option>Remove</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Available Savings Accounts
                        </label>
                        <select
                          id="country"
                          value={selectedSavings}
                          onChange={(e) => setSelectedSavings(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {savingsList.map((x, i) =>
                          <option key={x}>{x.accountID}</option>
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

