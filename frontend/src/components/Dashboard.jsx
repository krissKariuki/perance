import Header from './Header'
import Sidebar from './Sidebar'
import Mainframe from './Mainframe'

export default function Homepage(){
    return(
        <section className="page homepage">
            <Header/>
            <Sidebar/>
            <Mainframe/>
        </section>
    )
}