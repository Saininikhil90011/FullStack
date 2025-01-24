import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllDetails from './Component/AllDetails'
import FinancialDetails from './Component/FinancialDetails'
import BasicDetails from './Component/Basic Details'
import BankDelails from './Component/Bank Details'
import AddressInformation from './Component/AddressInformation'
import OtherSourceIncome from './Component/Other Sources of Income'
import Deductions from './Component/Deductions'
import PrepaidTax from './Component/Prepaid Tax'
import Computation from './Component/Computation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AllDetails />
    <FinancialDetails/> 
    <BasicDetails/>
    <BankDelails/>
    <AddressInformation/>
    <OtherSourceIncome/>
    <Deductions/>
    <PrepaidTax/>
    <Computation/>
    </>
  )


}

export default App
