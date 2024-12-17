import {useState,useEffect} from 'react'

export default function AddRecord({addRecord}){
    const [mpesa,setMpesa]=useState('')
    const [mshwari,setMshwari]=useState('')
    const [locked,setLocked]=useState('')
    const [date,setDate]=useState(new Date().toISOString().split('T')[0])

    const updateValue=(type,value)=>
    {
        const mapInputStates={
            'mpesa':()=>setMpesa(value),
            'mshwari':()=>setMshwari(value),
            'locked':()=>setLocked(value),
            'date':()=>setDate(value)
        }
        return mapInputStates[type]()
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        const record={
            date:date,
            mpesa:mpesa,
            mshwari:mshwari,
            locked:locked
        }
        console.log(record)

        setMpesa('')
        setMshwari('')
        setLocked('')
        setDate('')
    }
    return(
        <section className="page AddRecord">
            <form className="form-field" onSubmit={handleSubmit}>

                <label>
                    <span>mpesa</span>
                    <input required type="number" id="input-mpesa" placeholder="100.00" value={mpesa} onChange={(e)=>updateValue('mpesa',e.target.value)}/>

                </label>
                <label>
                    <span>mshwari</span>
                    <input required type="number" id="input-mshwari" placeholder="100.00" value={mshwari} onChange={(e)=>updateValue('mshwari',e.target.value)}/>
                </label>
                <label>
                    <span>locked</span>
                    <input required type="number" id="input-locked" placeholder="100.00" value={locked} onChange={(e)=>updateValue('locked',e.target.value)}/>
                </label>
                <label> 
                    <span>date</span>
                    <input required type="date" id="input-date" value={date} onChange={(e)=>updateValue('date',e.target.value)}/>
                </label>


                <button type='submit' id="add-record">add record</button>
            </form>

           
        </section>
    )
}