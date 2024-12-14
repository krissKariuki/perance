export default function Record(){
    return(
        <div className="record">
            
            <p className="field date">1-12-2024</p>

            <div className="field field-volume">
            <p className="volume-change">-240.50</p>
            <p className="volume-balance">
                <span className="currency">kes</span>
                <span className="volumeBalance">5350.00</span>
            </p>
            </div>

            <div className="field mpesa-volume">
            <p className="mpesa-change">+100.50</p>
            <p className="mpesa-balance">
                <span className="currency">kes</span>
                <span className="mpesaBalance">500.00</span>
            </p>
            </div>

            <div className="field mshwari-volume">
            <p className="mshwari-change">+150.50</p>
            <p className="mshwari-balance">
                <span className="currency">kes</span>
                <span className="mshwariBalance">550.00</span>
            </p>
            </div>

            <div className="field locked-volume">
            <p className="locked-change">+300.00</p>
            <p className="locked-balance">
                <span className="currency">kes</span>
                <span className="lockedBalance">1500.00</span>
            </p>
            </div>
        </div>
    )
}