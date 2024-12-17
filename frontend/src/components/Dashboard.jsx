import {useState,useEffect} from 'react'
import Mainframe from './Mainframe'

export default function Homepage(){

    const [data,setData]=useState(false)

    const fetchData=(url)=>{
        fetch(url)
        .then(response=>response.json())
        .then(result=>{
            setData(result)
        })
    }

    useEffect(()=>{
        fetchData('/db/data.json')
    },[])

    return(
        <section className="page Dashboard">
            {data && <Mainframe data={data}/>}
        </section>
    )
}