import { LockClosedIcon } from '@heroicons/react/solid'
import { Popover, Transition } from '@headlessui/react'
import { Router } from 'react-router-dom'

import {React, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'

export default function Login() {

  const router = useRouter()

  const [perID, setPerID] = useState()

  const [password, setPassword] = useState()

  const [personList, setPersonList] = useState([])

  const [adminList, setAdminList] = useState([])

  const [customerList, setCustomerList] = useState([])

  const [managerList, setManagerList] = useState([])

  const [bothList, setBothList] = useState([])

  useEffect(() => {

    async function getData(){
      const customerUsername = await fetch('/api/customerlogin')
      const data = await customerUsername.json()
      setCustomerList(data)

      const managerUsername = await fetch('/api/managerlogin')
      const data1 = await managerUsername.json()
      setManagerList(data1)

      const bothUsername = await fetch('/api/customerandmanager');
      const data4 = await bothUsername.json()
      setBothList(data4)

      const personUsername = await fetch('/api/person')
      const data2 = await personUsername.json()
      setPersonList(data2)

      const adminUsername = await fetch('/api/admin');
      const data3 = await adminUsername.json()
      setAdminList(data3)
    }

    getData();
  }, [])

  const onSubmit=async(e) => {
    e.preventDefault()

    personList.map((x, i) => {

      if (x.perID == perID && x.pwd == password) {
        localStorage.setItem("user", perID)
        
        customerList.map((customer, i) => {
          if (customer.perID == perID) {
            router.push("/customer")
          }
        })

        adminList.map((admin, i) => {
          if (admin.perID == perID) {
            router.push("/admin")
          }
        })

        managerList.map((manager, i) => {
          if (manager.perID == perID) {
            router.push("/manager")
          }
        })

        bothList.map((choose, i) => {
          if (choose.perID == perID) {
            router.push("/choose")
          }
        })
      }
    })

    //alert(personList.includes({perID, "pwd":password}))

    /*
    if (perID == "admin" && password == "admin") {
      localStorage.setItem("user", perID)
      router.push('/admin')
    } else if (perID == "customer" && password == "customer") {
      localStorage.setItem("user", perID)
      router.push('/customer')
    } else if (perID == "manager" && password == "manager") {
      localStorage.setItem("user", perID)
      router.push('/manager')
    } else if (perID == "choose" && password == "choose") {
      localStorage.setItem("user", perID)
      router.push('/choose')
    }
    */
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg/1280px-Georgia_Tech_Yellow_Jackets_logo.svg.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-black">Sign in to your account</h2>
          </div>


          <form onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  value={perID}
                  onChange={(e) => setPerID(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="perID"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-white group-hover:text-black" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}