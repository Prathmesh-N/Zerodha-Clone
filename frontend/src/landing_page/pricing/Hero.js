import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row mt-5 p-5 text-center'>
                <h2>Charges</h2>
                <h5 className='mt-3 text-muted'>List of all charges and taxes</h5>
            </div>
            <div className='row mt-5 p-5 text-center'>
                <div className='col-4'>
                    <img src='media/images/pricingEquity.svg' style={{width: "70%"}}/>
                    <h3 className='mt-4'>Free equity delivery</h3>
                    <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='media/images/intradayTrades.svg' style={{width: "70%"}}/>
                    <h3 className='mt-4'>Intraday and F&O trades</h3>
                    <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades. Flat<br/> ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                    <img src='media/images/pricingMF.svg' style={{width: "70%"}}/>
                    <h3 className='mt-4'>Free direct MF</h3>
                    <p className='mt-4 text-muted'>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;