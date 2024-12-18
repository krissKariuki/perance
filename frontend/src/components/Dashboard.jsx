import {useState,useEffect} from 'react'
import Mainframe from './Mainframe'

export default function Dashboard({data}){
    return(
        <section className="page Dashboard">
            <Mainframe data={data}/>
        </section>
    )
}