import React, { useState ,useEffect }  from 'react'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import '../components/Home.css'
const Home = () => {
   
    const [Text, setText] = useState('');
    const [savedText , setSavedText] = useState([]);

    const handlesubmit = async(e)=>{
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/api/v5/text', {content : Text})
         fetchSavedText();
          console.log(response)
          toast.success('Text Saved Succesfully')
        } catch (error) {
          toast.error('error in saving text' , error)
        }
     }

    const handleChanage = (e)=>{
        setText(e.target.value);

    }

    const fetchSavedText = async() =>{
      try {
          const response = await axios.get('http://localhost:8000/api/v5/text')
          setSavedText(response.data)
      } catch (error) {
        console.log(error)
      }
    }

     useEffect(()=>{
      fetchSavedText();
     })

      
  return (
    <div className='container'>
        <form onSubmit={handlesubmit}>
        <div className='textarea'>
        <h1>Text Area</h1>
        <textarea cols='30' rows='10' onChange={handleChanage}/>
        <button className='btn-primary'>Submit</button>
     </div>
        </form>
        <div className='getTextArea'>
         {savedText.map((Text , index)=>(
          <p key={index}>{Text.content}</p>
         ))}
        </div>
      <ToastContainer/>
    </div>
  )
}

export default Home
