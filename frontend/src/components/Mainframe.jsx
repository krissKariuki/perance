export default function Mainframe(){
    return(
        <div className="mainframe">
            <div className="left-section">
                <div className="center-self info-cards">
                    <div className="info-card amount-card">
                        <span className="material-symbols-outlined center-child card-icon">savings</span>
                        <h4 className="card-label">Amount</h4>
                        <p className="amount-info">
                            <span className="label">expected</span>
                            <span className="currency">Kes</span><span className="amount-current">1750.00</span>
                        </p>
                        <p className="amount-info">
                            <span className="label">current</span>
                            <span className="currency">Kes</span><span className="amount-current">5300.00</span>
                        </p>
                        <p className="amount-info">
                            <span className="label">remain</span>
                            <span className="currency">Kes</span><span className="amount-current">44700.00</span>
                        </p>
                        <p className="amount-info">
                            <span className="label">surplus</span>
                            <span className="currency">Kes</span><span className="amount-surplus">4200.00</span>
                        </p>
                        <p className="amount-info">
                            <span className="label">completed</span>
                            <span className="amount-completePctg">14.37</span><span className="pctg">%</span>
                        </p>
                        
                    </div>

                    <div className="info-card period-card">
                    <span className="material-symbols-outlined center-child card-icon">schedule</span>
                    <h4 className="card-label">period</h4>

                        <p className="period-info">
                            <span className="label">current</span>
                            <span className="period-current"><span className="period">day</span>11</span>
                        </p>
                          <p className="period-info">
                            <span className="label">remain</span>
                           <span className="amount-current">354<span className="period">days</span></span>
                        </p>
                        <p className="period-info">
                            <span className="label">surplus</span>
                            <span className="period-surplus">25</span><span className="period">days</span>
                        </p>
                        <p className="period-info">
                            <span className="label">completed</span>
                            <span className="amount-completePctg">3.14</span><span className="pctg">%</span>
                        </p>
                      
                    </div>

                    <div className="info-card variables-card">
                    <span className="material-symbols-outlined center-child card-icon">shopping_bag_speed</span>
                    <h4 className="card-label">spending</h4>
                        <p className="variable-info">
                            <span className="label">total</span>
                            <span className="currency">Kes</span><span className="spending">152.00</span>
                        </p>    
                        <p className="variable-info">
                            <span className="label">saveSpend ratio</span>
                            <span className="currency">Kes</span><span className="saveSpendRatio">47.53</span>
                        </p>
                    </div>
                </div>
                <div className="center-self chart-area">
                    <h4 className="chart-area_label">Portfolio</h4>
                    <div className="center-self chart-area_graph"></div>
                </div>
            </div>
            <div className="right-section">
                <div className="volume-card">
              
                </div>
                <div className="history-card"></div>
            </div>
        </div>
    )
}