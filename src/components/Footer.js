import React from 'react';

import I4G from '../images/I4G.png';
import internLogo from '../images/intern_logo.png';

const Footer = () => {
  return (
    <div className='w-full flex gap-3 items-start md:justify-between md:items-center flex-col md:flex-row '>
        <div><img alt='intern logo' src={internLogo} /></div>
        <div className='text-lg text-gray-500 '>HNG Internship 9 Frontend Task</div>
        <div><img alt='intern logo' src={I4G} /></div>
    </div>
  )
}

export default Footer