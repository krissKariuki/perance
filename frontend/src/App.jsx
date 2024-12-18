import {useState,useEffect} from 'react'

import './styles/App.css'
import './styles/Dashboard.css'
import './styles/AddRecord.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import AddRecord from './components/AddRecord'

export default function App() {
  const [data,setData]=useState(null)
  const [window,setWindow]=useState({tab:'nav-dashboard',page:'Dashboard'})
  const dashboardPage=window.page==='Dashboard'
  const addRecordPage=window.page==='AddRecord'
  const settingsPage=window.page==='Settings'

  const url='http://localhost:8000/data'
  const backupUrl='/db/newData.json'

  const handlePageSwitch=(pg)=>setWindow(pg)
  const activeTab=window.tab

  const handleAddRecord=async(record)=>{
  const response=await fetch(url,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(record)
  })

  handleGetRecords(url)

  setWindow({tab:'nav-dashboard',page:'Dashboard'})
}
  
  const handleGetRecords=(url)=>{
    fetch(url).then(response=>response.json()).then(result=>setData(result)).catch(err=>handleGetRecords(backupUrl))
  }

  useEffect(()=>{
    handleGetRecords(url)
  },[])

  return(
    <>
    <Header/>
    <Sidebar tab={activeTab} switchPage={handlePageSwitch}/>
    {dashboardPage && data && <Dashboard data={data}/>}
    {addRecordPage && data && <AddRecord data={data} addRecord={handleAddRecord}/>}
    {settingsPage && <Settings/>}
    </>
  )
}