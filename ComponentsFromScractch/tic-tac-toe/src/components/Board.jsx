export default function Board({size,board, handleClick}){
return <div className="board" style={{gridTemplateColumns:`repeat(${size},80px)`}}>
        {
            board?.map((row,rowInex)=>{
                return row?.map((col, colIndex)=>{
                    return <div key={`${rowInex}-${colIndex}`} className="cell" onClick={()=>{handleClick(rowInex,colIndex)}}>{col}</div>
                })
            })
        }
        
    </div>
}