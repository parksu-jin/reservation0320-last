import { useState } from "react";
import {BiCheckCircle} from "react-icons/bi";


function ClickDown({nameValue,sortBy,onSortChange}){
  if(!nameValue){
      return null;
  }

  return(
    <div id="boxfour">
      <li onClick={()=>onSortChange('people')}> 고객이름{(sortBy === 'people') && <BiCheckCircle />}</li>
      <li onClick={()=>onSortChange('title')}> title{(sortBy === 'title') && <BiCheckCircle />}</li>
      <li onClick={()=>onSortChange('date')}> 등록일{(sortBy === 'date') && <BiCheckCircle />}</li>
      <li onClick={()=>onSortChange('body')}> 내용{(sortBy === 'body') && <BiCheckCircle />}</li>
    </div>
  )
}


function Search({query,onQueryChange,sortBy,onSortChange}) {
  const [nameValue,setNameValue] = useState(false)

    return (
    <div id="btn">
     <input
     type="text" 
     placeholder=" 검색어를 입력해주세요" 
     value ={query}
     onChange={
         (event) => {onQueryChange(event.target.value)}
     }
     />
     <button type="button" 
     onClick={()=> setNameValue(!nameValue)}
     ><br /><br /><br /> <ClickDown 
     nameValue ={nameValue}
     sortBy ={sortBy}
     onSortChange ={mySort => onSortChange(mySort)}
     />
    </button>
   
   </div>
    );
  }
  
  export default Search;