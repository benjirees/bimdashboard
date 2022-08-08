import React, { useState } from 'react'
import './settings.css'
import ToggleButton from '@mui/material/ToggleButton'
import { MdDarkMode } from 'react-icons/md'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import { BsFillVolumeMuteFill } from 'react-icons/bs'

function Settings() {

    const [selected, setSelected] = React.useState(false);
    const [selectedBright, setSelectedBright] = React.useState(false);
    const [selectedMute, setSelectedMute] = React.useState(false);

  return (
    <div className='parent'>

        <div className='toggleButton'>
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

        <div className='toggleButton'>
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

        <div className='toggleButton'>
            <ToggleButton
            value="check"
            selected={selectedMute}
            onChange={() => {
            setSelectedMute(!selectedMute);
            }}
            >
                <BsFillVolumeMuteFill />
                <h5>Mute Tab</h5>
            </ToggleButton>
        </div>
    </div>
  )
}

export default Settings