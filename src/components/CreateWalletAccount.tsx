'use client'
import React from 'react'
import Image from 'next/image'
import plusButton from '../../public/plusButton.png'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'



function CreateWalletAccount() {
  return (
    <div>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Image src={plusButton} alt='plusButton'
                        className='mx-auto opacity-10 hover:opacity-75'>
                    </Image>
                </TooltipTrigger>
                <TooltipContent>
                    Create a new wallet 
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
  )
}

export default CreateWalletAccount