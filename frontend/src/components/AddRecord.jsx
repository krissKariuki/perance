import {useState,useEffect} from 'react'
import Record from './Record'

export default function AddRecord({addRecord,data}){

    const [newDate,setNewDate]=useState(new Date().toISOString().split('T')[0])
    const [newMpesa,setNewMpesa]=useState('')
    const [newMshwari,setNewMshwari]=useState('')
    const [newLocked,setNewLocked]=useState('')

    const updateValue=(type,value)=>
    {
        const mapInputStates={
            'mpesa':()=>setNewMpesa(value),
            'mshwari':()=>setNewMshwari(value),
            'locked':()=>setNewLocked(value),
            'date':()=>setNewDate(value)
        }
        return mapInputStates[type]?.()
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        const record={
            date:newDate,
            mpesa:newMpesa,
            mshwari:newMshwari,
            locked:newLocked
        }

        addRecord(record)

        setNewMpesa('')
        setNewMshwari('')
        setNewLocked('')
    }

    return(
        <section className="page AddRecord">
            <form className="form-field" onSubmit={handleSubmit}>

                <label>
                    <span>mpesa</span>
                    <input required type="number" id="input-mpesa" placeholder="100.00" value={newMpesa} onChange={(e)=>updateValue('mpesa',e.target.value)}/>

                </label>
                <label>
                    <span>mshwari</span>
                    <input required type="number" id="input-mshwari" placeholder="100.00" value={newMshwari} onChange={(e)=>updateValue('mshwari',e.target.value)}/>
                </label>
                <label>
                    <span>locked</span>
                    <input required type="number" id="input-locked" placeholder="100.00" value={newLocked} onChange={(e)=>updateValue('locked',e.target.value)}/>
                </label>
                <label> 
                    <span>date</span>
                    <input required type="date" id="input-date" value={newDate} onChange={(e)=>updateValue('date',e.target.value)}/>
                </label>


                <button type='submit' id="add-record">add record</button>
            </form>

            <div className="preview">
                <h4 className='center-self'>
                    <span className="icon material-symbols-outlined">construction</span>
                    <span>updates will be made to this page soon</span>
                    </h4>
            </div>
        </section>
    )
}