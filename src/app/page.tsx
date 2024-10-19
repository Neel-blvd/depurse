import CreateWalletAccount from '@/components/CreateWalletAccount'
import ImportWalletAccount from '@/components/ImportWalletAccount'
import ViewWallets from '@/components/ViewWallets'
import React from 'react'

function page() {
  return (
    <div className='h-screen min-h-screen bg-zinc-600'>
      <p className='text-center text-4xl p-10'>
        Welcome to Depurse
      </p>
      <div className='flex justify-evenly mt-10'>
        <CreateWalletAccount />
        <ImportWalletAccount />
      </div>
      <div className='mt-10'>
        <ViewWallets />
      </div>
    </div>
  )
}

export default page