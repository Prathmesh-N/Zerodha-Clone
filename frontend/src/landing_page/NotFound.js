import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mt-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 fs-1'>404 couldn’t find that page</h1>
                <p className='fs-5'>We couldn’t find the page you were looking for. Visit <Link style={{textDecoration :"none"}} to={"/"}>Zerodha’s home page</Link></p>
            </div>
        </div>
     );
}

export default NotFound;