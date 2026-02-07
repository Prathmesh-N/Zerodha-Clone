import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h2 className="fs-3 mt-5 mx-4">Charges explained</h2>
        <div className="col-6 p-5 mt-4 text-muted">
          <h6>Securities/Commodities transaction tax</h6>
          <p>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <h6>Transaction/Turnover Charges</h6>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to â‚¹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to â‚¹1,00,000
            per crore of gross turnover.
          </p>
          <p>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at â‚¹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            â‚¹275 per crore of gross turnover.
          </p>
          <h6>Call & trade</h6>
          <p>
            Additional charges of â‚¹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <h6>Stamp charges</h6>
          <p>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <h6>NRI brokerage charges</h6>
          <div>
            <ul>
              <li>
                For a non-PIS account, 0.5% or â‚¹50 per executed order for equity
                and F&O (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or â‚¹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                â‚¹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </div>
          <h6>Account with debit balance</h6>
          <p>
            If the account is in debit balance, any order placed will be charged
            â‚¹40 per executed order instead of â‚¹20 per executed order.
          </p>
          <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
          <div>
            <ul>
              <li>
                Equity and Futures - â‚¹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - â‚¹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - â‚¹0.05 per lakh + GST of turnover for Futures and â‚¹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </div>
          <h6>Margin Trading Facility (MTF)</h6>
          <div>
            <ul>
              <li>
                MTF Interest: 0.04% per day (â‚¹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: â‚¹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 p-5 mt-4 text-muted">
          <h6>GST</h6>
          <p>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <h6>SEBI Charges</h6>
          <p>
            Charged at â‚¹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <h6>DP (Depository participant) charges</h6>
          <p>
            â‚¹15.34 per scrip (â‚¹3.5 CDSL fee + â‚¹9.5 Zerodha fee + â‚¹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p>
            Female demat account holders (as first holder) will enjoy a discount
            of â‚¹0.25 per transaction on the CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of â‚¹0.25 on the CDSL fee.
          </p>
          <h6>Pledging charges</h6>
          <p>â‚¹30 + GST per pledge request per ISIN.</p>
          <h6>AMC (Account maintenance charges)</h6>
          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than â‚¹4,00,000. To learn more about BSDA
          </p>
          <p>
            For non-BSDA demat accounts: â‚¹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC
          </p>
          <h6>Corporate action order charges</h6>
          <p>
            â‚¹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <h6>Off-market transfer charges</h6>
          <p>â‚¹25 per transaction.</p>
          <h6>Physical CMR request</h6>
          <p>
            First CMR request is free. â‚¹20 + â‚¹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <h6>Payment gateway charges</h6>
          <p>â‚¹9 + GST (Not levied on transfers done via UPI)</p>
          <h6>Delayed Payment Charges</h6>
          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.
          </p>
          <h6>Trading using 3-in-1 account with block functionality</h6>
          <div>
            <ul>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>
        <div>
          <h6 className="p-2">Disclaimer</h6>
          <p className="p-2 text-muted">
            For Delivery based trades, a minimum of â‚¹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged â‚¹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or â‚¹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;

