import Image from 'next/image'
import React from 'react'
import importButton from '../../public/importButton.png'
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from './ui/tooltip'

function ImportWalletAccount() {
  return (
    <div>
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Image src={importButton} alt='plusButton'
                        className='mx-auto opacity-10 hover:opacity-75'>
                    </Image>
                </TooltipTrigger>
                <TooltipContent>
                    Import an existing wallet 
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    </div>
  )
}

export default ImportWalletAccount