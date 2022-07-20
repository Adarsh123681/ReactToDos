import React,{useState} from 'react'

 const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
function List(props) { 
   const [currentDate] = useState(new Date());
   let daysName = days[currentDate.getDay()];
 
    return (
     <>
       <div className="float-left mx-14"> 
        <div className="w-96 h-40  text-2xl  my-5 py-10 px-5 text-red-800 bg-white border-2 border-white relative rounded-lg">
           {props.text} 
           <div className='flex absolute right-24 top-2 text-black'>
             <div className="mx-5">{daysName}</div>
            {currentDate.toLocaleTimeString()}
           </div>
         <div className="flex absolute right-40 top-28 text-white">
          <button className='w-26 h-9 text-2xl hover:bg-red-200 bg-red-500 border-2 border-black rounded-lg my-1'
          onClick={()=>{
          props.onSelect(props.id);
         }}>Delete</button>
         </div>
         </div>
         </div>
         </>
  )
}

export default List