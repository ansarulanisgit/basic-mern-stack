import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-3'>
            <nav>
                <Link className='mx-2' to={'/'}>All Users</Link>
                <Link className='mx-2' to={'/adduser'}>Add User</Link>
            </nav>
        </div>
    );
};

export default Header;