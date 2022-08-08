import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState } from 'react'
import { FiSettings } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import Settings from '../../pages/Settings/Settings'

function SettingsButton() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
        <IconButton size='large' edge='false' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <IconContext.Provider value={{size: 30}}>
                <FiSettings style={{ color: 'black'}} className='outline'/>
            </IconContext.Provider>
        </IconButton>
            <Drawer anchor='top' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={1} width='250px' textAlign='center' role='presentation'>
                    <Settings />
                </Box>
            </Drawer>
        </>
  )
}

export default SettingsButton