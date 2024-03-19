import React from 'react';
import LocalLinks from './components/Footer/LocalLinks/LocalLinks';
import SocialLinks from './components/Footer/SocialLinks/SocialLinks';

export default function TopFooter(){
    return(
        <div className='topfooter-container'>
        <LocalLinks/>
        <SocialLinks/>
    </div>

    )
   
}