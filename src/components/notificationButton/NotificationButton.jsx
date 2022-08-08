import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState } from 'react'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { IconContext } from 'react-icons'
import Settings from '../../pages/Settings/Settings'

function NotificationButton() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
        <IconButton size='large' edge='false' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <IconContext.Provider value={{size: 32}}>
                <MdOutlineNotificationsNone style={{ color: 'black'}} className='outline'/>
            </IconContext.Provider>
        </IconButton>
            <Drawer anchor='top' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={1} width='250px' textAlign='center' role='presentation'>
                    <h1>WIP: Will try to make this a notification panel!</h1>
                </Box>
            </Drawer>
        </>
  )
}

export default NotificationButton