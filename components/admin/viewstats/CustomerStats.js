import {React, useState, useEffect} from 'react'
import axios from "axios";

const CustomerStats = () => { 
  
  const [customers, setCustomers] = useState([])
  //const [name, setName] = useState()

  useEffect(() => {
    async function getData(){
      const res = await fetch(`/api/viewstats/customerstats`)
      const data = await res.json()
      setCustomers(data)
    }
    getData()
  }, [])

  //async function handleSubmit (){}
  //<button onClick={handleSubmit}>Test</button>

  return (<div style={{ margin: 20 }}>
    <table className="w-full">
      <thead>
        <tr className="text-md tracking-wide text-middle text-gray-900 bg-gray-100 border-b border-gray-600">
          <th className="px-4 py-3">person_identifier</th>
          <th className="px-4 py-3">tax_identifier</th>
          <th className="px-4 py-3">customer_name</th>
          <th className="px-4 py-3">date_of_birth</th>
          <th className="px-4 py-3">joined_system</th>
          <th className="px-4 py-3">street</th>
          <th className="px-4 py-3">city</th>
          <th className="px-4 py-3">state</th>
          <th className="px-4 py-3">zip</th>
          <th className="px-4 py-3">number_of_accounts</th>
          <th className="px-4 py-3">customer_assets</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((x, i) => <tr key={i}>
          <td>{x.person_identifier}</td>
          <td>{x.tax_identifier}</td>
          <td>{x.customer_name}</td>
          <td>{x.date_of_birth}</td>
          <td>{x.joined_system}</td>
          <td>{x.street}</td>
          <td>{x.city}</td>
          <td>{x.state}</td>
          <td>{x.zip}</td>
          <td>{x.number_of_accounts}</td>
          <td>{x.customer_assets}</td>
        </tr>)}
      </tbody>
    </table>
  </div>)
}



//export async function getServerSideProps() {
  // Fetch data from external API
  //const res = await fetch(`http://localhost:5000/api/viewstats/accountstats`)
  //const data = await res.json()
  //console.log(data)

  // Pass data to the page via props
  //return { props: { accounts: [{"bankID":"BA_South","bankName":"Bank of America Plaza-Midtown","street":"600 Peachtree Street NE","city":"Atlanta","state":"GA","zip":"30333","resAssets":42000,"corpID":"BA","manager":"ghopper9"},{"bankID":"BA_West","bankName":"Bank of America West Region Bank","street":"865 Black Gold Circle","city":"Dallas","state":"TX","zip":"75116","resAssets":267000,"corpID":"BA","manager":"smcgill17"},{"bankID":"NASA_Goddard","bankName":"NASA FCU at Goddard SFC","street":"8800 Greenbelt Road","city":"Greenbelt","state":"MD","zip":"20771","resAssets":140000,"corpID":"NASA","manager":"rsanchez"},{"bankID":"NASA_HAL","bankName":"NASA FCU at US Space & Rocket Center","street":"1 Tranquility Base Suite 203","city":"Huntsville","state":"AL","zip":"35805","resAssets":null,"corpID":"NASA","manager":"pbeesly17"},{"bankID":"NASA_KSC","bankName":"NASA FCU at Kennedy Space Center","street":"1 Space Commerce Way","city":"Cape Canaveral","state":"FL","zip":"45678","resAssets":0,"corpID":"NASA","manager":"rholt99"},{"bankID":"TD_GT","bankName":"TD Ameritrade Midtown Branch","street":"47 Tech Parkway","city":"Atlanta","state":"GA","zip":"30333","resAssets":null,"corpID":"TD","manager":"gburdell"},{"bankID":"TD_Online","bankName":null,"street":null,"city":null,"state":null,"zip":null,"resAssets":0,"corpID":"TD","manager":"kjennings66"},{"bankID":"WF_1","bankName":"Wells Fargo #1 Bank","street":"1010 Binary Way","city":"Seattle","state":"WA","zip":"98101","resAssets":127000,"corpID":"WF","manager":"sville19"},{"bankID":"WF_2","bankName":"Wells Fargo #2 Bank","street":"337 Firefly Lane","city":"Seattle","state":"WA","zip":"98101","resAssets":553000,"corpID":"WF","manager":"mmcgill4"}] } }
//}

export default CustomerStats;

