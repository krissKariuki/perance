import {useState,useEffect} from 'react'
import './styles/App.css'
import './styles/Dashboard.css'
import './styles/AddRecord.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import AddRecord from './components/AddRecord'
import Settings from './components/Settings'

export default function App() {

  const [window,setWindow]=useState({tab:'nav-dashboard',page:'Dashboard'})
  const dashboardPage=window.page==='Dashboard'
  const addRecordPage=window.page==='AddRecord'
  const settingsPage=window.page==='Settings'

  const handlePageSwitch=(pg)=>setWindow(pg)
  const activeTab=window.tab

  const handleAddRecord=()=>{
    alert('added record')
  }

  return(
    <>
    <Header/>
    <Sidebar tab={activeTab} switchPage={handlePageSwitch}/>
    {dashboardPage && <Dashboard/>}
    {addRecordPage && <AddRecord addRecord={handleAddRecord}/>}
    {settingsPage && <Settings/>}
    </>
  )
}