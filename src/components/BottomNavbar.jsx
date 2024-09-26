import React from 'react'

const BottomNavbar = () => {
  return (
    <div className='bottom-navbar'>
        <a href="/">
            <span className="material-symbols-outlined">
                home
            </span>
        </a>
        <a href="">
            <span className="material-symbols-outlined">
                arrow_back_ios
            </span>
        </a>
        <a href="">
            <span className="material-symbols-outlined">
                arrow_forward_ios
            </span>
        </a>
        <a href="">
            <span className="material-symbols-outlined">
                refresh
            </span>
        </a>
      
    </div>
  )
}

export default BottomNavbar
