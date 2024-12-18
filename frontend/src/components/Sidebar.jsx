export default function Sidebar({tab,switchPage}){
    const activeTab='active-tab'

    return(
        <div className="sidebar">
            <div className="menu">
                <h4>menu</h4>
                <div className="navs">

                    <button className={tab==='nav-dashboard'?`nav ${activeTab}`:'nav'} onClick={()=>switchPage({tab:'nav-dashboard',page:'Dashboard'})}>
                        <span className="icon material-symbols-outlined">dashboard</span>
                        <span>dashboard</span>
                    </button>

                    <button className={tab==='nav-addRecord'?`nav ${activeTab}`:'nav'} onClick={()=>switchPage({tab:'nav-addRecord',page:'AddRecord'})}>
                        <span className="icon material-symbols-outlined">add_box</span>
                        <span>new record</span>
                    </button>
                </div>
            </div>
            <div className="more">
                <h4>more</h4>
                <div className="navs">
                    <button className="nav nav-logout">
                        <span className="icon material-symbols-outlined">logout</span>
                        <span>logout</span>
                    </button>

                    <button className="nav nav-version">
                        <span className="icon material-symbols-outlined">category</span>
                        <span>version</span><span className="version-number">0.0.1</span>
                    </button>
                </div>
            </div>
        </div>
    )
}