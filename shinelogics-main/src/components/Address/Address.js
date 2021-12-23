import React from 'react';
import { Button } from '@material-ui/core';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import './Address.css'
const Address = () => {
    return (
        <div>
            <div className='toolbar'>
                <Button className='imgh'><LocationOnIcon/></Button>
                <p className='p'>3rd Floor, KJ Aditya Towers,Vikram Sarabhai Instronic Estate Phase II, (SRP Tools),Thiruvanmiyur, Chennai-600042</p>
                <Button className='imgh'><EmailIcon/></Button>
                <p className='p'>info@shinelogics.com</p>
                <Button className='imgh'><PhoneAndroidIcon/></Button>
                <p className='p'>+91-9445033734</p>
            </div>
        </div>
    )
}

export default Address
