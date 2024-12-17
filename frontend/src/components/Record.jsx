export default function Record({recordData}){

    const date=recordData.date
    const volumeBalance=recordData.volume.balance
    const mpesaBalance=recordData.mpesa.balance
    const mshwariBalance=recordData.mshwari.balance
    const lockedBalance=recordData.locked.balance

    const volumeChange=recordData.volume.change
    const mpesaChange=recordData.mpesa.change
    const mshwariChange=recordData.mshwari.change
    const lockedChange=recordData.locked.change



    return(
        <div className="record">
            
            <p className="field date">{date}</p>

            <div className="field field-volume">
            <p className={volumeChange>0?`volume-change positive-bg`:`volume-change negative-bg`}>{volumeChange}</p>
            <p className="volume-balance">
                <span className="currency">kes</span>
                <span className="volumeBalance">{volumeBalance}</span>
            </p>
            </div>

            <div>
            <p className={mpesaChange>0?`mpesa-change positive-fore`:`mpesa-change negative-fore`}>{mpesaChange}</p>
            <p className="mpesa-balance">
                <span className="currency">kes</span>
                <span className="mpesaBalance">{mpesaBalance}</span>
            </p>
            </div>

            <div>
            <p className={mshwariChange>0?`mshwari-change positive-fore`:`mshwari-change negative-fore`}>{mshwariChange}</p>
            <p className="mshwari-balance">
                <span className="currency">kes</span>
                <span className="mshwariBalance">{mshwariBalance}</span>
            </p>
            </div>

            <div>
            <p className={lockedChange>0?`locked-change positive-fore`:`locked-change negative-fore`}>{lockedChange}</p>
            <p className="locked-balance">
                <span className="currency">kes</span>
                <span className="lockedBalance">{lockedBalance}</span>
            </p>
            </div>
        </div>
    )
}