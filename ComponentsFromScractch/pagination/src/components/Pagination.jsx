import './Pagination.css'

const Pagination = ({pageNo, setPageNo}) =>{
    const preThreeNoArray = Array.from({length:3},(_,index)=> pageNo - 1 - index).filter((element)=>element>0).reverse()
    const nextThreeNoArray =Array.from({length:3},(_,index)=> pageNo + index)
    const paginationArary = [...preThreeNoArray,...nextThreeNoArray];
    console.log("pagination array",paginationArary);
    const handleNext = () =>{
        setPageNo(prev => prev +1)
    }

    const handlePrev = () =>{

        setPageNo(prev => prev -1)
    }

    return(
        <div className="pagination-container">
            {pageNo > 1 && <div onClick={handlePrev} className="page-btn">{"<"}</div>}
            {
                paginationArary.map((element,index)=>{
                    return <div onClick={()=>{setPageNo(element)}} key={index} className={element === pageNo ? "page-btn active " : "page-btn"}>{element}</div>

                })
            }
            {pageNo < 9 && <div onClick={handleNext} className="page-btn">{">"}</div>}
        </div>
    )
}

export default Pagination;