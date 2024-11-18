import accordianStyles from './accordian.module.css'
import {faqs} from '../data.json'
import { useState } from 'react'
import Meow from './meow';

export default function Accordian(){
    return <div className={accordianStyles.container}>
        <div>
            {
                faqs?.map((element,index)=>{
                    return <Meow ques={element} key={index}/> 
                })
            }
        </div>
    </div>
}