export default function Mainframe(){
    return(
        <div className="mainframe">
            <div className="left-section">
                <div className="center-self categories-info">
 
                </div>
                <div className="center-self chart-area">
                    <h4 className="chart-area_label">Portfolio</h4>
                    <div className="center-self chart-area_graph"></div>
                </div>
            </div>
            <div className="right-section">
                <div className="volume-card"></div>
                <div className="history-card"></div>
            </div>
        </div>
    )
}