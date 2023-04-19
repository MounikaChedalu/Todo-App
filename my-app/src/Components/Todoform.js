import React,{useState} from 'react';
import './Todoform.css';

const Todoform = (props) => {
    const [input,setInput] = useState(" ");
    const handleChange = (e) =>{
        setInput(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
         
        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text:input
        });
        setInput('');
    };

  return (
    <div>
        <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a Task" value ={input} name = "text" className='todo-input' onChange={handleChange} /> 
            <button className='todo-button'>Add</button>
        </form>
    </div>
  )
}

export default Todoform;