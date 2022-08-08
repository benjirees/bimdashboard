import React, { useState } from 'react'
import './settings.css'
import ToggleButton from '@mui/material/ToggleButton'
import { MdDarkMode } from 'react-icons/md'
import { BsFillBrightnessHighFill } from 'react-icons/bs'

function Settings() {

    const [selected, setSelected] = React.useState(false);
    const [selectedBright, setSelectedBright] = React.useState(false);

  return (
    <div className='parent'>

        <div className='toggleButtonDark'>
            <ToggleButton
                value="check"
                selected={selected}
                onChange={() => {
                setSelected(!selected);
                }}
            >
                <MdDarkMode />
                <h5>Dark Mode</h5>
            </ToggleButton>
        </div>

        <div className='toggleButtonLight'>
            <ToggleButton
            value="check"
            selected={selectedBright}
            onChange={() => {
            setSelectedBright(!selectedBright);
            }}
            >
                <BsFillBrightnessHighFill />
                <h5>Light Mode</h5>
            </ToggleButton>
        </div>
    </div>
  )
}

export default Settings