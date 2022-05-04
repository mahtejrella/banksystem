import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/dist/client/router'
import axios from 'axios';

export default function ManageAccounts() {

  const [bankList, setBankList] = useState([])
  const [customerList, setcustomerList] = useState([])
  const [selectedBank, setSelectedBank] = useState("BA_South")
  const [selectedAccount, setSelectedAccount] = useState("checking")
  const [selectedCustomer, setSelectedCustomer] = useState("arwhite6")

  const [accountID, setaccountID] = useState()

  const [initial, setInitial] = useState()
  const [min, setMin] = useState()
  const [rate, setRate] = useState()
  const [withdrawals, setWithdrawals] = useState()

  //Existing accounts
  const [existingAccountList, setExistingAccountList] = useState([])
  const [selectedExistingAccount, setSelectedExistingAccount] = useState("GT_investments")

  const [existingCustomerList, setExistingCustomerList] = useState([])
  const [selectedExistingCustomer, setSelectedExistingCustomer] = useState("arwhite6")
  const [permission, setPermission] = useState("Add_Access")

  const [existingBankList, setexistingBankList] = useState([])
  const [selectedExistingBank, setSelectedExistingBank] = useState("BA_South")

  useEffect(() => {
    async function getData(){
      const res = await fetch(`/api/bank`)
      const data = await res.json()
      setBankList(data)
      console.log("data", data)
    }

    async function getData1(){
      const res = await fetch(`/api/customer`)
      const data = await res.json()
      setcustomerList(data)
      console.log("data", data)
    }

    async function getData2(){
      const res = await fetch(`/api/account`)
      const data = await res.json()
      setExistingAccountList(data)
      console.log("data", data)
    }

    async function getData3(){
      const res = await fetch(`/api/customer`)
      const data = await res.json()
      setExistingCustomerList(data)
      console.log("data", data)
    }

    async function getData4(){
      const res = await fetch(`/api/bank`)
      const data = await res.json()
      setexistingBankList(data)
      console.log("data", data)
    }

    getData()
    getData1()
    getData2()
    getData3()
    getData4()
  }, [])

  const onSubmit=async(e)=>{
    e.preventDefault();
    const payload = {selectedBank, selectedAccount, selectedCustomer, accountID, initial, min, rate, withdrawals};
    let data = await axios.post('/api/newaccount', payload);
    console.log("data", data.data)
  }

  const onSubmit2=async(e)=>{
    e.preventDefault();

    const payload = {selectedExistingBank, selectedExistingAccount, selectedExistingCustomer};

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

        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 grid-cols-3 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={onSubmit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">


                    <div className="col-span-6 sm:col-span-4">
                          <label
                          htmlFor="country"
                          className="block text-lg font-bold font-large text-gray-700"
                          >
                          Create New Account
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
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Account ID
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          value={accountID}
                          onChange={(e) => setaccountID(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Owner ID
                        </label>
                        <select
                          id="country"
                          value={selectedCustomer}
                          onChange={(e) => setSelectedCustomer(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        {customerList.map((x, i) =>
                          <option key={x}>{x.perID}</option>
                        )}
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Account Type
                        </label>
                        <select
                          id="country"
                          value={selectedAccount}
                          onChange={(e) => setSelectedAccount(e.target.value)}
                          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>checking</option>
                          <option>savings</option>
                          <option>market</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          $Initial Balance
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          value={initial}
                          onChange={(e) => setInitial(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          $Min Balance
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          value={min}
                          onChange={(e) => setMin(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Interest Rate
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          value={rate}
                          onChange={(e) => setRate(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Max Withdrawals
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          value={withdrawals}
                          onChange={(e) => setWithdrawals(e.target.value)}
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow sm:text-sm border-gray-300 rounded-md"
                        />
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