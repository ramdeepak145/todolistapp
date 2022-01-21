import React,{FC,ChangeEvent,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ITask} from './Interfaces'
import TodoTask from './MyComponents/TodoTask';


const App:FC=()=> {

  const[task,setTask]=useState<string>("");
  const[todoList,setTodoList]=useState<ITask[]>([]);

  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
      setTask(event.target.value);
  };

  const addTask=():void=>{
      const newTask={taskName:task};
      setTodoList([...todoList,newTask]);
      setTask("")

      console.log(todoList);
  };

  const deleteTask=(taskNameToDelete:string):void=>{
      setTodoList(todoList.filter((task)=>{
          return task.taskName != taskNameToDelete; 
      }))
  };
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
        <input type="text" placeholder='Task...' name="task" value={task} onChange={handleChange}/>
        </div>
        <button onClick={addTask}>Add</button>
      </div>

      <div className='todoList'>
        {todoList.map((task:ITask,key:number)=>{
          return <TodoTask key={key} task={task} deleteTask={deleteTask}/>;
        })}
      </div>
    </div>
  );
};

export default App;
