import React from 'react'
import PageHeader from '../components/common/PageHeader'
import Spacer from '../components/common/Spacer'
import Pricing from '../components/Pricing'

const PricingPage = () => {
  return (
    <>
      <PageHeader title="Pricing" />
      <Pricing />
      <Spacer />
    </>
  )
}

export default PricingPage
