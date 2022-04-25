import React from 'react'
import axios from "axios";

const AccountStats = ({ accounts }) => <div style={{ margin: 20 }}>
  <table class="w-full">
    <thead>
      <tr class="text-md tracking-wide text-middle text-gray-900 bg-gray-100 border-b border-gray-600">
        <th class="px-4 py-3">bankID</th>
        <th class="px-4 py-3">bankName</th>
        <th class="px-4 py-3">street</th>
        <th class="px-4 py-3">city</th>
        <th class="px-4 py-3">state</th>
        <th class="px-4 py-3">zip</th>
        <th class="px-4 py-3">resAssets</th>
        <th class="px-4 py-3">corpID</th>
        <th class="px-4 py-3">manager</th>
      </tr>
    </thead>
    <tbody>
      {accounts?.data.map((x, i) => <tr key={i}>
        <td>{x.bankID}</td>
        <td>{x.bankName}</td>
        <td>{x.street}</td>
        <td>{x.city}</td>
        <td>{x.state}</td>
        <td>{x.zip}</td>
        <td>{x.resAssets}</td>
        <td>{x.corpID}</td>
        <td>{x.manager}</td>
      </tr>)}
    </tbody>
  </table>
</div>


AccountStats.getInitialProps = async () => {
  const { data } = await axios.get('http://localhost:5000/api/viewstats/accountstats');
  return { accounts: data };
}

export default AccountStats;

