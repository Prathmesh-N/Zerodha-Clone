import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid'>
            <div className='row' id='supportHero'>
                <div className='col-10 mt-5' id='supportPortal'>
                    <h1>Support Portal</h1>
                </div>
                <div className='col-2 mt-5' id='myTicket'>
                    <button className='p-2 btn btn-primary mb-5' >My tickets</button>
                </div>
                <form id='searchBar'>
                    <input className='border-0 border-ra outline-none' type='text' placeholder='Eg: How do I open my account, How I activate F&O...' />
                </form>
            </div>
        </section>
     );
}

export default Hero;