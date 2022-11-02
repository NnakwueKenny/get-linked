import React from 'react';

// import resources
import profile_image from '../images/profile__image.jpg';
import icon from '../images/Icon.png';
import avatar_share from '../images/_Avatar share button.png';

const Header = () => {
  return (
    <div className='relative flex flex-col items-center gap-6 isolate w-full max-w-5xl'>
        <div className='relative w-24 h-24 rounded-full overflow-hidden'>
            <span className='absolute top-0 left-0 w-full h-full flex justify-center items-end py-3 text-transparent text-2xl bg-gray-600 bg-opacity-0 hover:bg-opacity-25 hover:text-gray-300 cursor-pointer'><i className='fa fa-camera'></i></span>
            <img className='h-full w-full' alt='profile pic' id='profile__img' src={profile_image} />
        </div>
        <div className='text-[#101828] font-bold'>
            <a href='https://twitter.com/kenny_nnakwue' target='_blank' rel='noreferrer' className='hover:underline' id='twitter'>Nnakwue Kenny</a>
        </div>
        <div className='text-[#101828] font-bold sr-only'>
            <p className='hover:underline' id='slack'>Nnakwue Kenechukwu</p>
        </div>
        <div className='absolute md:hidden flex justify-center items-center -top-5 right-2 p-1.5'>
            <button type='button' className='flex justify-center items-center w-10 h-10 rounded-full border'>
                <img src={icon} alt='avatar pic' />
            </button>
        </div>
        <div className='absolute hidden md:flex -top-5 right-44'>
            <button type='button'>
                <img src={avatar_share} alt='avatar pic' />
            </button>
        </div>
    </div>
  )
}

export default Header