import Logo from './Logo'
import Dp from './Dp'

export default function Header(){
    return (
        <div className="header">
            <Logo/>

            <div className="searchbar">
            <span className='material-icons center-child search-icon'>search</span>
            <input type="text" className="search-input" placeholder='search here'/>
            </div>
            <div className="dynamic-window"></div>
            <div className="account-actions">
                <span className="material-symbols-outlined">edit</span>
                <span className="material-symbols-outlined">notifications</span>
                <span className="material-symbols-outlined">switch_right</span>
                <Dp/>
                <span className="username">John Doe</span>
            </div>

        </div>
    )
}