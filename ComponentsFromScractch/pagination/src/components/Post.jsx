import { useEffect, useState } from "react";
import './Post.css'
import Pagination from "./Pagination";
import axios from 'axios';
export default function Post(){
    const [data,setData] = useState([]);
    const [pageNo,setPageNo] = useState(1);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        (async()=>{
            setLoading(true);
            await axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`).then((res)=>{(setData(res.data))}); 
            setLoading(false);
        })
       
    },[pageNo])
    return <div>
    <div className="image-container">
            { 
               data.length ? data?.map((item,i)=>{
                    return <img key={i} src={item?.download_url}/>
            }): <div>LOADING....</div>
            }
        </div> 

      <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
        </div>
}