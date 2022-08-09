import React from 'react'
import { Drawer, Box, Typography, IconButton } from '@mui/material'
import Collapsible from 'react-collapsible'
import { useState } from 'react'
import { MdOutlineNotificationsNone } from 'react-icons/md'
import { IconContext } from 'react-icons'
import Settings from '../../pages/Settings/Settings'
import Notifications from '../../pages/Notifications/Notifications'

function NotificationButton() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <>
        <IconButton size='large' edge='false' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
            <IconContext.Provider value={{size: 32}}>
                <MdOutlineNotificationsNone style={{ color: 'black'}} className='outline'/>
            </IconContext.Provider>
        </IconButton>

            <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                <Box p={1} width='250px' textAlign='center' role='presentation'>
                    <Notifications />
                </Box>
            </Drawer>
        </>
  )
}

export default NotificationButton