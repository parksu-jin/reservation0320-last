import { useState } from "react";
import {FaHospitalAlt} from "react-icons/fa"

function Addcontents({toggleForm,formData,setFormData,formPublish}){
  if(!toggleForm){
    return null;
} 
  return(
    <div id="cont">
    <ul>
    <li>
      <label htmlFor="userName">이름</label><br />
      <input type="text" id="userName"
      onChange={(event) => {
        setFormData({...formData,people:event.target.value})
      }}
      ></input>
    </li>

    <li>
      <label htmlFor="userDate">방문일</label><br />
      <input type="date" id="userDate"
      onChange={(event) => {
        setFormData({...formData,date:event.target.value})
      }}
      ></input>
    </li>

    <li>
      <label htmlFor="userTitle">내원이유</label><br />
      <input type="text" id="userTitle"
      onChange={(event) => {
        setFormData({...formData,title:event.target.value})
      }}
      ></input>
    </li>

    <li>
      <label htmlFor="userWrite">진료내용</label><br />
      <textarea id="userWrite"
      onChange={(event) => {
        setFormData({...formData,body:event.target.value})
      }}
      ></textarea>
    </li>
  </ul>
          <p id="sub">
              <button type="submit"
              onClick={formPublish}>예약하기</button>
         </p>
  </div>
  )
}




function Addappointment({onSendAppointment,lastId}) {
  const clearData={
    "people": "",
    "title": "",
    "date": "",
    "body": ""
}

    // state
    const [toggleForm, setToggleForm] = useState(false)
    const [formData,setFormData] = useState(clearData)

    function formPublish(){
        // 합본객체
     const appointmentInfo ={
        id: lastId + 1,
        people: formData.people,
        title: formData.title,
        body: formData.body,
        date: formData.date + ' ' + formData
     }
    //  데이터 보내기
    onSendAppointment(appointmentInfo)
    // reset
    setToggleForm(!toggleForm)
    setFormData(clearData)
    }
    return (
   <div id="reserv">
     <h4 onClick={()=>setToggleForm(!toggleForm)}> 예약 <FaHospitalAlt /></h4>
     <Addcontents 
         toggleForm={toggleForm}
         formData ={formData}
         formPublish ={formPublish}
         setFormData ={setFormData}/>
         </div>
    );
  }
  
  export default Addappointment;