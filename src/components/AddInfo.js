

function AddInfo({appointment,onDelectAppoint}) {
    return (
   <div id="info">
       <dl>
        <dt>이름</dt>
        <dd>{appointment.people}</dd>

        <dt>내원이유</dt>
        <dd>{appointment.title}</dd>

        <dt>방문일</dt>
        <dd>{appointment.date}</dd>

        <dt>진료내용</dt>
        <dd className="last">{appointment.body}</dd>

        <button 
      //  onClick={}
        type="button" id="del"
        onClick={() => onDelectAppoint(appointment.id)}
        >delete</button>
      </dl>
   </div>
    );
  }
  
  export default AddInfo;