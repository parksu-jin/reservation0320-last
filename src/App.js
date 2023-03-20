import AddInfo from './components/AddInfo';
import Search from './components/Search';
import Addappointment from './components/Addappointment';
import './index.css';
// import appointmentList from './data.json';
import { useState ,useCallback , useEffect} from 'react';


function App() {
  // 데이터 가져오기
  const[appointmentList,setAppointmentList] = useState([])
  const [query,setQuery] = useState('');
  const [sortBy,setSortBy] = useState('people');
  
  const filterAppointments = appointmentList.filter(
    item => {
      return(
        item.people.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.body.toLowerCase().includes(query.toLowerCase()) 
      )
    }
  ).sort(
    (a,b)=> {
      return(a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? -1 : 1)
    }
  )
const fetchData = useCallback(
  ()=>{
    fetch('./data.json')
    .then(response => response.json())
    .then(data => setAppointmentList(data))
  },[]
)
useEffect(
  fetchData,[fetchData]
)


  return (
    <div id='mainmain'>
 <article>
  <h1>진료예약 시스템</h1>
  <div>
   
 <Search 
 query = {query}
 onQueryChange ={(myQuery)=> setQuery(myQuery)}
 sortBy ={sortBy}
 onSortChange ={(mySortBy)=>setSortBy(mySortBy)}
/>
 

 <div id='main'>
 <Addappointment 
  onSendAppointment ={
    myAppointment => setAppointmentList([...appointmentList,myAppointment])
  }
  // lastID ={
  //   appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max ,1)
  // }
  />
 <ul id='all'>
 {filterAppointments.map(
             (appointment) => 
                 (<AddInfo 
                  key={appointment.id} 
                  appointment={appointment} 

                  // delete
                  onDelectAppoint ={
                    appointmentId => setAppointmentList(appointmentList.filter(appointment => appointment.id !== appointmentId))
                  }
                  />)
                  )
         }
 </ul>
 
 </div>
 </div>
 </article>
 </div>
  );
}

export default App;
