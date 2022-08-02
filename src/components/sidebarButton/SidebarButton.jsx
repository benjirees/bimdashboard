import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import Sidebar from '../sidebar/Sidebar'

function SidebarButton() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    return (
        <>
        <IconButton size='large' edge='false' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <IconContext.Provider value={{size: 30}}>
                <AiOutlineMenu className='outline'/>
            </IconContext.Provider>
        </IconButton>
            <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={1} width='250px' textAlign='center' role='presentation'>
                    <Sidebar />
                </Box>
            </Drawer>
        </>
  )
}

export default SidebarButton