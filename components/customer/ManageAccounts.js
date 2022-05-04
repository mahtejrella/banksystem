import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';

export default function ManageAccounts() {

    //Existing accounts
    const [existingAccountList, setExistingAccountList] = useState([])
    const [selectedExistingAccount, setSelectedExistingAccount] = useState("GT_investments")
  
    const [existingCustomerList, setExistingCustomerList] = useState([])
    const [selectedExistingCustomer, setSelectedExistingCustomer] = useState("arwhite6")
    const [permission, setPermission] = useState("Add Access")
  
    const [existingBankList, setexistingBankList] = useState([])
    const [selectedExistingBank, setSelectedExistingBank] = useState("BA_South")

    const [username, setUsername] = useState()

    useEffect(() => {

      setUsername(localStorage.getItem("user"))
  
      async function getData(){
        const res = await fetch(`/api/account`)
        const data = await res.json()
        setExistingAccountList(data)
        console.log("data", data)
      }
  
      async function getData1(){
        const res = await fetch(`/api/customer`)
        const data = await res.json()
        setExistingCustomerList(data)
        console.log("data", data)
      }
  
      async function getData2(){
        const res = await fetch(`/api/bank`)
        const data = await res.json()
        setexistingBankList(data)
        console.log("data", data)
      }
  
      getData()
      getData1()
      getData2()
    }, [])

    const onSubmit2=async(e)=>{
      e.preventDefault();
  
      const payload = {selectedExistingBank, selectedExistingAccount, selectedExistingCustomer, username};
  
      if (permission == "Add_Access") {
        let data = await axios.post('/api/addaccess', payload);
        console.log("data", data.data)
      } else {
        let data = await axios.post('/api/removeaccess', payload);
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
            <form onSubmit={onSubmit2}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">

                      <div className="col-span-6 sm:col-span-4">
                          <label
                          htmlFor="country"
                          className="block text-lg font-bold font-large text-gray-700"
                          >
                          Existing Accounts: Add/Remove Owners
                          </label>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Bank
                        </label>
                        <select
                          id="country"
                          value={selectedExistingBank}
                          onChange={(e) => setSelectedExistingBank(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {existingBankList.map((x, i) =>
                          <option key={x}>{x.bankID}</option>
                        )}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Accessible Accounts
                        </label>
                        <select
                          id="country"
                          value={selectedExistingAccount}
                          onChange={(e) => setSelectedExistingAccount(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          {existingAccountList.map((x, i) =>
                            <option key={x}>{x.accountID}</option>
                          )}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Customer
                        </label>
                        <select
                          id="country"
                          value={selectedExistingCustomer}
                          onChange={(e) => setSelectedExistingCustomer(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            {existingCustomerList.map((x, i) =>
                              <option key={x}>{x.perID}</option>
                            )}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Permission Type
                        </label>
                        <select
                          id="country"
                          value={permission}
                          onChange={(e) => setPermission(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Add_Access</option>
                          <option>Remove_Access</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-black hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Confirm
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
  
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0"></div>
            </div>
          </div>
        </div>
      </>
    );
  }