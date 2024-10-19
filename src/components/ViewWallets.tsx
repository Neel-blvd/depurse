import Link from 'next/link'
import React from 'react'

function ViewWallets() {
  return (
    <Link href='/wallets'>
        <div className='mx-auto w-fit bg-black text-white p-4 rounded-xl'>
          View my wallets
        </div>
    </Link>
  )
}

export default ViewWallets