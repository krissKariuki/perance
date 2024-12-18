export default function Settings(){
    return (
        <section className=" page Settings">
            <div className="settings-sidebar">
                <button className="settings-nav active-tab">
                    <span className="material-symbols-outlined">person</span>
                    <span>account</span>
                </button>

                <button className="settings-nav">
                    <span className="material-symbols-outlined">notifications</span>
                    <span>notifications</span>
                </button>

                <button className="settings-nav">
                    <span className="material-symbols-outlined">dark_mode</span>
                    <span>theme</span>
                </button>
            </div>
            <div className="settings-mainframe">
            </div>        
        </section>
    )
}