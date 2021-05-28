import './App.css';
import React,{useState} from 'react';

function App() {
  const [link,setLink] = useState('https://images.all-free-download.com/images/graphicthumb/natural_beauty_highdefinition_picture_166132.jpg');
  
  const handleClick = (e)=>{
   setLink(e.target.src);
   


  }
  return (
   
    <div className="App">
    <div className="row" id= "viewer">
<h1>viewer</h1>
<img src={link} alt='N.A.'/>
    </div>
  <div className='row' id = 'gallery'>
<img src='https://images.all-free-download.com/images/graphicthumb/natural_beauty_highdefinition_picture_166132.jpg' alt='Nature1' onClick={handleClick}/>
<img src='https://images.all-free-download.com/images/graphicthumb/a_big_lead_to_the_distant_highdefinition_picture_166031.jpg' alt='Nature2' onClick={handleClick}/>
<img src='https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2015/03/Memorable_Jaunts_Portraits_During_Golden_Hour_DPS_Article-12.jpg?resize=600%2C400&ssl=1' alt='' onClick={handleClick}/>

  </div>
    </div>
  );
}

export default App;
