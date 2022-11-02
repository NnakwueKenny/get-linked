import React from 'react';

import githubIcon from '../images/github_icon.png';
import slackIcon from '../images/slack.png';

const MainSection = () => {
  return (
    <div className='w-full max-w-4xl flex flex-col gap-4 md:gap-6 py-6 px-2'>
        <div className='w-full bg-gray-200 hover:bg-gray-300 w-full rounded-lg cursor-pointer'>
            <a className='px-4 py-6 flex flex-col justify-center font-semibold' href='https://twitter.com/kenny_nnakwue' target='_blank' rel='noreferrer'>
              Twitter Link
            </a>
        </div>
        <div className='w-full bg-gray-200 hover:bg-gray-300 w-full rounded-lg cursor-pointer'>
            <a id='btn__zuri' className='px-4 py-6 flex flex-col justify-center font-semibold' href='https://training.zuri.team/' target='_blank' rel='noreferrer'>
              Zuri Team
            </a>
        </div> 
        <div className='w-full bg-gray-200 hover:bg-gray-300 w-full rounded-lg cursor-pointer'>
            <a id='btn__zuri' className='px-4 py-6 flex flex-col gap-1 justify-center font-semibold' href='https://training.zuri.team/' target='_blank' rel='noreferrer'>
              <h3>Books</h3>
              <p className='font-normal'>Design and Coding</p>
            </a>
        </div> 
        <div className='w-full bg-gray-200 hover:bg-gray-300 w-full rounded-lg cursor-pointer'>
            <a id='book__python' className='px-4 py-6 flex flex-col gap-1 justify-center font-semibold' href='https://books.zuri.team/python-for-beginners?ref_id=Kene' target='_blank' rel='noreferrer'>
              <h3>Python Books </h3>
              <p className='font-normal'>Become a good python Developer</p>
            </a>
        </div> 
        <div className='w-full bg-gray-200 hover:bg-gray-300 w-full rounded-lg cursor-pointer'>
            <a id='book__python' className='px-4 py-6 flex flex-col gap-1 justify-center font-semibold' href='https://background.zuri.team' target='_blank' rel='noreferrer'>
              <h3>Background Check for Coders</h3>
              <p className='font-normal'>Get checked to verify your knowledge as a Developer</p>
            </a>
        </div> 
        <div className='w-full bg-gray-200 hover:bg-gray-300 w-full rounded-lg cursor-pointer'>
            <a id='book__python' className='px-4 py-6 flex flex-col gap-1 justify-center font-semibold' href='https://books.zuri.team/design-rules' target='_blank' rel='noreferrer'>
              <h3>Design Books</h3>
              <p className='font-normal'>Free design book offered by Zuri</p>
            </a>
        </div>
        <div className='w-full px-4 py-6 flex gap-1 justify-center font-semibold cursor-text' href='https://books.zuri.team/design-rules' target='_blank' rel='noreferrer'>
          <div className='flex items-center gap-6'>
            <span><img alt='slack icon' src={slackIcon} /></span>
            <span><img alt='slack icon' src={githubIcon} /></span>
          </div>
        </div>
    </div>
  )
}

export default MainSection