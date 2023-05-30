import React from 'react';

const Header = ({ children }) => {
    return (
        <header className='doc-header'>
            <div className='doc-container'>
                {children}
            </div>
        </header>
    );
};

export default Header;