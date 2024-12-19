import {useState,useEffect} from 'react'
import Record from './Record'

export default function AddRecord({addRecord,data}){

    const [newDate,setNewDate]=useState(new Date().toISOString().split('T')[0])
    const [newMpesa,setNewMpesa]=useState('')
    const [newMshwari,setNewMshwari]=useState('')
    const [newLocked,setNewLocked]=useState('')
    const [liveRecord,setLiveRecord]=useState({date:newDate,mpesa:{balance:0,change:0},mshwari:{balance:0,change:0},locked:{balance:0,change:0},volume:{balance:0,change:0}})

    const previousRecord=[...data.records].reverse()[0]

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

    useEffect(()=>{

        const newMpesaChange=(newMpesa-previousRecord.mpesa.balance).toFixed(2)
        const newMshwariChange=(newMshwari-previousRecord.mshwari.balance).toFixed(2)
        const newLockedChange=(newLocked-previousRecord.locked.balance).toFixed(2)

        const newVolume=(parseFloat(newMpesa)||0) +(parseFloat(newMshwari) ||0) +(parseFloat(newLocked)||0)
        const newVolumeChange=(newVolume-previousRecord.volume.balance).toFixed(2)

        setLiveRecord({
            date:newDate,
            mpesa:{balance:newMpesa,change:newMpesaChange},
            mshwari:{balance:newMshwari,change:newMshwariChange},
            locked:{balance:newLocked,change:newLockedChange},
            volume:{balance:newVolume,change:newVolumeChange}
        })
    },[newDate,newMpesa,newMshwari,newLocked])
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
            <div className="historyCard-label">
                        <p>volume</p>
                        <p>mpesa</p>
                        <p>mshwari</p>
                        <p>locked</p>
                    </div>
                <h5>Yesterday's record</h5>
                <Record recordData={previousRecord}/>   
                <span className="icon material-symbols-outlined">arrow_downward</span>
                <h5 className='live-record-label'>Live record</h5>
                <Record recordData={liveRecord}/>
            </div>
        </section>
    )
}