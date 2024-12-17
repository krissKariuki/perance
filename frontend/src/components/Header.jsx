import Logo from './Logo'
import Dp from './Dp'

export default function Header(){
    return (
        <div className="header">
            <Logo/>

            <div className="searchbar">
            <span className='material-icons center-child search-icon'>search</span>
            <input type="text" id="search-input" className="search-input" placeholder='search here'/>
            </div>
            <div className="dynamic-window"></div>
            <Dp/>
        </div>
    )
}