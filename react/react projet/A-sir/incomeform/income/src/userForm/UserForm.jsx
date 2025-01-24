import React from 'react'
import IncomeForm from './IncomeSources'
import Form16UploadPage from './UplodeForm16'
import BasicDetails from './BasicDetails'
import FinancialDetailsForm from './FinancialDetails'
import BasicDetails2 from './BasicDetails2'
import SalaryForm from './SalaryIncome'
import TaxSavingForm from './Deductions1'
import Section80DForm from './Deductions2'
import DonationForm from './Deductions3'
import BankAndAadhaarDetails from './BankDetails'
import PrepaidTaxes from './PrepaidTaxes'
import ExtraDetails from './ExtraDetails'
import SourcesofIncome from './SourcesofIncome'
import HouseProperty from './HouseProperty'
import TaxForm from './Deductions4'
import BusinessNatureSelect0 from './PrimitiveIn'
import BusinessNatureSelect from './PresumptiveIncome'
import IncomeForm2 from './OtherSourceofIncome'


function UserForm() {
  return (
    <div>
       
       <IncomeForm/>
      <Form16UploadPage/>
     <FinancialDetailsForm/>
      <BasicDetails/>
      <BasicDetails2/>
      <SalaryForm/> 
      <TaxSavingForm/> 
      <Section80DForm/> 
      <DonationForm/>
      <TaxForm/>
      <BankAndAadhaarDetails/>
      <PrepaidTaxes/>
      <ExtraDetails/>
      {/* <SourcesofIncome/> */}
      <HouseProperty/>
      <BusinessNatureSelect0/>
      <BusinessNatureSelect/>
      <IncomeForm2/>
    </div>
  )
}

export default UserForm