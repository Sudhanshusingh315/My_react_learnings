import { useEffect, useState } from "react"
const STATUS = {
    LOADING:'LOADING',
    SUCCESS:'SUCCESS',
    ERROR:'ERROR'
}
export default function TypeAhead(){
    const [query,setQuery] = useState("")
    const [result,setResult] = useState([])
    const [status,setStatus] = useState(STATUS.LOADING)
    useEffect(()=>{
        const abortController = new AbortController()
        try{
            console.log("Api call")
            setStatus(STATUS.LOADING);
            const fetchData = async () =>{
                const res = await fetch(`https://dummyjson.com/products/search?q=${query}`,{signal});
                const data = await res.json();
                setResult(data?.products);
                setStatus(STATUS.SUCCESS);
            }
        const timerId = setTimeout(fetchData,1000);
            
        return ()=>{
            clearTimeout(timerId);
            abortController.abort();
        }
        }catch(err){
            setStatus(STATUS.ERROR);
        }
    },[query])  
    return(
        <>
            <div> 
                <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
            </div>
            <ul>
            {status === STATUS.LOADING && <div>...Loading</div>}
            {status === STATUS.ERROR && <div>...Error</div>}
            {status === STATUS.SUCCESS && 
            (result?.map((element,index)=>{
               return  <li key={index}>{element.title}</li>
            }))
            }
            </ul>
        </>
    )
}