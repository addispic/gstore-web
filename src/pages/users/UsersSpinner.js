import React from 'react'

const UsersSpinner = () => {
  return (
    <div className='w-full h-[64vh] flex items-center justify-center flex-grow'>
        <div className='w-[64px] flex-shrink-0 aspect-square border rounded-full border-green-600 border-r-transparent animate-spin flex items-center justify-center relative'>
            {/* second */}
            <div className='w-[42px] flex-shrink-0 aspect-square border rounded-full border-green-600 border-l-transparent animate-spin flex items-center justify-center relative'>
            <div className='w-[24px] flex-shrink-0 aspect-square border rounded-full border-green-600 border-r-transparent animate-spin flex items-center justify-center relative'></div>
            </div>
        </div>
    </div>
  )
}

export default UsersSpinner