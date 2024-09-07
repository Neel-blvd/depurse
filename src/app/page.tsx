import Image from 'next/image'
import React from 'react'
import importButton from '../../public/importButton.png'
import plusButton from '../../public/plusButton.png'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'

function page() {
  return (
    <div className='h-screen min-h-screen bg-gradient-to-b from-zinc-900 to-slate-900 text-white'>
      <div className='h-full grid grid-cols-12 grid-rows-12'>
        <p className='col-span-6 col-start-4 row-start-4 text-center font-mono text-3xl'>
          Welcome to depurse!
        </p>
        <div className='w-fit h-fit col-start-5 row-start-8'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                  <Image src={plusButton} alt='plusButton'
                    className='mx-auto opacity-10 hover:opacity-75'>
                  </Image> 
              </TooltipTrigger>
              <TooltipContent>
                Add a new wallet
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className='h-fit w-fit col-start-8 row-start-8'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                  <Image src={importButton} alt='importButton'
                    className='mx-auto opacity-10 hover:opacity-75'>
                  </Image>
              </TooltipTrigger>
              <TooltipContent>
                Import an existing wallet
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}

export default page