import React,{useState} from 'react';
import Todoform from './Todoform';
import { MdDelete } from 'react-icons/md';
import{FaRegEdit} from 'react-icons/fa';
import './Todoform.css';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });
  
    const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id: null,
        value: ''
      });
    };
    if(edit.id){
        return <Todoform edit={edit} onSubmit={submitUpdate} />;
    }
  return todos.map((todo,index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
    key={index}
     >
        <div key={todo.id} onClick ={() =>completeTodo(todo.id)}>
            {todo.text}

        </div>
        <div className='icons'>
            <FaRegEdit  onClick={() =>setEdit({id:todo.id,value:todo.text})} className='edit-icon'/>
            <MdDelete onClick={() =>removeTodo(todo.id)} className='delete-icon'/>

        </div>
     </div>

))
   
}

export default Todo;