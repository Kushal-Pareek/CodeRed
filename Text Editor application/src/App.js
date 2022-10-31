
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import background from './assets/images/pexels-pixabay-261763.jpg'
import React ,{useState}from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');//theme mode
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
         setAlert({
          msg:message,
          type:type
         })
         setTimeout(() => {
          setAlert(null);
         },3000);
  }
  const toggleMode=()=>{
        if(mode==='light'){
          setMode('dark');
          document.body.style.backgroundColor='#042743';
          showAlert("Dark mode has been enabled!","Success");
        }
        else{
          setMode('light');
          document.body.style.backgroundColor='white';
          showAlert("Light mode has been enabled!","Success");
        }
  }
  return (
    <>  
    <Navbar title="TextEdit" aboutText="About TextEdit" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
   <div className='container my-3'>
      <TextForm heading="Enter the text to analyze:" mode={mode}/>
      
      </div>
    </>
  );
}

export default App;
