import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './App.css'
import Cards from './components/Card/Card';
import { Data } from './Data';
import { BsEmojiWink } from "react-icons/bs";
import { BsEmojiLaughing } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import TextField from '@mui/material/TextField';

function App() {

  return (
    <>
      <div className='HeadingDiv'>
        <h1>Cards Section</h1>
      </div>
      <div className='CardMainDiv'>
        {
          Data.map((e, i) => {
            return <Cards key={i} id={e.id} title={e.title} desc={e.desc} imgSrc={e.imgSrc} />
          })
        }
      </div>
      <div className='IconDiv'>
        <BsEmojiWink />
        <BsEmojiLaughing />
        <BsEmojiHeartEyes />
      </div>
      <div className='MaterialUIDiv'>
        <TextField id="outlined-basic" label="Full Name" variant="outlined" />
      </div>
    </> 
  )
}

export default App
