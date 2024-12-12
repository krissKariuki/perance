export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="menu">
                <h4>menu</h4>
                <div className="navs">

                    <button className="active-tab nav nav-dashboard">
                        <span className="icon material-symbols-outlined">dashboard</span>
                        <span>dashboard</span>
                    </button>

                    <button className="nav nav-statistics">
                        <span className="icon material-symbols-outlined">leaderboard</span>
                        <span>statistics</span>
                    </button>

                    <button className="nav nav-walllet">
                        <span className="icon material-symbols-outlined">account_balance_wallet</span>
                        <span>wallet</span>
                    </button>
                </div>
            </div>
            <div className="settings">
                <h4>settings</h4>
                <div className="navs">
                    <button className="nav nav-settings">
                        <span className="icon material-symbols-outlined">tune</span>
                        <span>settings</span>
                    </button>
                    <button className="nav nav-logout">
                        <span className="icon material-symbols-outlined">logout</span>
                        <span>logout</span>
                    </button>
                </div>
            </div>
        </div>
    )
}