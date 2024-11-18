import { useState } from 'react';
import './fileExplorer.css';
export default function FileExplorer({folderData}){
    console.log(folderData);
    const [show,setShow] = useState(false);
    return <div className='container'>
        <h3 className=''>{folderData?.type === 'folder' ? (show ? "📂":"🗃️"):"📄"}<span onClick={()=>{setShow(!show)}}>{folderData?.name}</span></h3>
        {
           show && folderData?.children?.map((element,index)=>{
                return <FileExplorer key={index} folderData={element}/>
            })
        }
    </div>
}