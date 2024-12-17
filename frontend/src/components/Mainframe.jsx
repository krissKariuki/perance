import {useState,useEffect} from 'react'
import Record from './Record'
import Chart from './Chart.jsx'

export default function Mainframe({data}){

    const dates=data.records.map(record=>record.date)
    const records=[...data.records].reverse()
    const recentRecord=records[0]

    const recentDate=recentRecord.date
    const recentVolumeBalance=recentRecord.volume.balance
    const recentMpesaBalance=recentRecord.mpesa.balance
    const recentMshwariBalance=recentRecord.mshwari.balance
    const recentLockedBalance=recentRecord.locked.balance
    
    const recentVolumeChange=recentRecord.volume.change
    const recentMpesaChange=recentRecord.mpesa.change
    const recentMshwariChange=recentRecord.mshwari.change
    const recentLockedChange=recentRecord.locked.change

    return(
        <div className="mainframe">
            <div className="left-section">
                <div className="center-self info-cards">
                    <div className="info-card amount-card">
                        <span className="material-symbols-outlined center-child card-icon">money</span>
                        <h4 className="card-label">Amount</h4>
                        <p className="amount-info amount-expected">
                            <span className="label">expected</span>
                            <span className="currency">Kes</span><span>{data.expectedAmount}</span>
                        </p>
                        <p className="amount-info amount-current">
                            <span className="label">current</span>
                            <span className="currency">Kes</span><span>{data.currentAmount}</span>
                        </p>
                        <p className="amount-info amount-remaining">
                            <span className="label">remain</span>
                            <span className="currency">Kes</span><span>{data.remainingAmount}</span>
                        </p>
                        <p className="amount-info amount-surplus">
                            <span className="label">surplus</span>
                            <span className="currency">Kes</span><span>{data.surplusAmount}</span>
                        </p>
                        <p className="amount-info amount-completePctg">
                            <span className="label">completed</span>
                            <span>{data.completedAmountPctg}</span><span className="pctg">%</span>
                        </p>
                        
                    </div>

                    <div className="info-card period-card">
                    <span className="material-symbols-outlined center-child card-icon">schedule</span>
                    <h4 className="card-label">period</h4>

                        <p className="period-info">
                            <span className="label">current</span>
                            <span className="period-current"><span className="period">day</span>{data.currentPeriod}</span>
                        </p>
                          <p className="period-info">
                            <span className="label">remain</span>
                           <span className="period-remaining">{data.remainingPeriod}<span className="period">days</span></span>
                        </p>
                        <p className="period-info">
                            <span className="label">surplus</span>
                            <span className="period-surplus">{data.surplusPeriod}</span><span className="period">days</span>
                        </p>
                        <p className="period-info">
                            <span className="label">completed</span>
                            <span className="period-completePctg">{data.completedPeriodPctg}</span><span className="pctg">%</span>
                        </p>
                      
                    </div>

                    <div className="info-card variables-card">
                    <span className="material-symbols-outlined center-child card-icon">shopping_bag_speed</span>
                    <h4 className="card-label">spending</h4>
                        <p className="spending-info">
                            <span className="label">total</span>
                            <span className="currency">Kes</span><span className="spending">{data.spending}</span>
                        </p>    
                        <p className="spending-info">
                            <span className="label">saveSpend ratio</span>
                            <span className="currency">Kes</span><span className="saveSpendRatio">{data.saveSpendRatio}</span>
                        </p>
                    </div>
                </div>
                <div className="center-self chart-area">
                    <h4 className="chart-area_label">volume</h4>
                    <div className="center-self chart-area_graph">
                        <Chart chartData={data.records}/>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="recentRecord-card">

                    <div className="recentRecord recent-mpesa">
                        <h4 className="recentLabel">mpesa</h4>
                        <p className="recent-field recentField-balance">
                            <span className="currency">Kes</span><span className="recent-balance">{recentMpesaBalance}</span>
                        </p>
                        <p className={recentMpesaChange>0?'recent-change positive-bg':'recent-change negative-bg'}>
                        <span className="recent-balance">{recentMpesaChange}</span>
                        </p>
                    </div>

                    <div className="recentRecord recent-mshwari">
                        <h4 className="recentLabel">mshwari</h4>
                        <p className="recent-field recentField-balance">
                            <span className="currency">Kes</span><span className="recent-balance">{recentMshwariBalance}</span>
                        </p>
                        <p className={recentMshwariChange>0?'recent-change positive-bg':'recent-change negative-bg'}>
                        <span className="recent-balance">{recentMshwariChange}</span>
                        </p>
                    </div>
                    
                    <div className="recentRecord recent-locked">
                        <h4 className="recentLabel">locked</h4>
                        <p className="recent-field recentField-balance">
                            <span className="currency">Kes</span><span className="recent-balance">{recentLockedBalance}</span>
                        </p>
                        <p className={recentLockedChange>0?'recent-change positive-bg':'recent-change negative-bg'}>
                        <span className="recent-balance">{recentLockedChange}</span>
                        </p>
                    </div>
                    
                    <div className="recentRecord recent-volume">
                        <h4 className="recentLabel">volume</h4>
                        <p className="recent-field recentField-balance">
                            <span className="currency">Kes</span><span className="recent-balance">{recentVolumeBalance}</span>
                        </p>
                        <p className={recentVolumeChange>0?'recent-change positive-bg':'recent-change negative-bg'}>
                        <span className="recent-balance">{recentVolumeChange}</span>
                        </p>

                        <p className='recent-date'>{recentDate}</p>
                    </div>
                </div>
                <div className="history-card">
                    <div className="historyCard-label">
                        <p>volume</p>
                        <p>mpesa</p>
                        <p>mshwari</p>
                        <p>locked</p>
                    </div>
                    <div className="historyCard-records">
                   {
                    records.map((record,index)=>(
                        <Record key={index} recordData={record}/>
                    ))
                   }
                    </div>
                </div>
            </div>
        </div>
    )
}