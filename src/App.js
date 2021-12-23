
 import { useEffect, useState } from 'react';

import './App.css';
import Card from "./Card";
import axios from 'axios';

// const data = {
//   results: [
//     {name: 'Walter White', nickname: 'Heisenberg', occupation:  
//     'High School Chemistry Teacher',  birthday: '09-07-1958', category: 'Breaking Bad', char_id: '1', src: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg' },
//     {name: 'Jesse Pinkman',   nickname: 'Cap  Cook',  occupation: 'Meth Dealer', birthday: '09-24-1984', category: 'Breaking Bad', char_id: '2', src: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441'},
//     { name: 'Skyler White', nickname: 'sky', occupation:  'House wife, Book Keeper, Car Wash Manager, Taxi Dispatcher', birthday: '08-11-1970', category: 'Breaking Bad', char_id: '3',
//    src:'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg' },
//    {name: 'Henry Schrader', nickname: 'Hank', occupation: 'DEA Agent', birthday: 'Unknown', category: 'Breaking Bad', char_id: '5', 
//     src: 'https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136'}
    
  
//   ]
// }
// console.log(data.results)

// export default App() 

//   const renderListUsingMap = () =>{
//    const mappedList = data.results.map((item,idx) => <Card  name={item.name} nickname={item.name} occupation={item.occupation} birthday={item.birthday} category={item.category} char_id={item.char_id} img={item.img}/> )
//   return mappedList
//   }


function App() {
  
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    console.log("inside useEffect");
    getAllCharacters();
  }, [])

  const getAllCharacters = () => {
    axios.get("https://www.breakingbadapi.com/api/characters")
    .then((res) => setCharacters(res.data))
    .catch((err) => console.log(err));
  }

  console.log("characters", characters);

  const renderListUsingMap = () =>{
    const mappedList =characters.map((item,idx) => <Card  name={item.name} nickname={item.name} occupation={item.occupation} birthday={item.birthday} category={item.category} char_id={item.char_id} img={item.img}/> )
   return mappedList
   }
  
  return (
    <div style={{display: "flex",margin:"0 auto", flex:'wrap'}}>
    
      {/* <Card /> */}
     
     {renderListUsingMap()}
    </div>
  );
}

export default App;

