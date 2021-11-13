import React from 'react'

function Header(){
    return(
        <div className="header">
            <nav>
                <img className='logo' src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" width="150px"  />
            </nav>
        </div>
    )
}
export default Header