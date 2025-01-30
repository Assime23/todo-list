import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState('');
    const [listInputs, setListInputs] = useState({});
  
    const handleAddTodo = () => {
        if (headingInput.trim() !== '') {
          setTodos([...todos, { heading: headingInput, lists: [] }]);
          setHeadingInput('');
        }
      };

      const handleAddList = (index) => {
        if (listInputs[index] && listInputs[index].trim() !== '') {
            const newTodos = [...todos];
            newTodos[index].lists.push(listInputs[index]);
            setTodos(newTodos);
            setListInputs({ ...listInputs, [index]: '' });
        }
    };
    
    const handleListInputChange = (index, value) => {
        setListInputs({ ...listInputs, [index]: value });
    };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
            <input
                type="text"
                className="heading-input"
                placeholder="Entrez l'en-tête"
                value={headingInput}
                onChange={(e) => {setHeadingInput(e.target.value);}} // Ajouter un gestionnaire d'événements onChange pour mettre à jour l'état headingInput
            />
          <button className="add-list-button" onClick={handleAddTodo}>Ajouter Heading</button>
        </div>
        <div className='add_list'>
          <input
            type="text"
            className="list-input"
            placeholder="Ajouter une liste"
            value={listInputs[index] || ''}
            onChange={(e) => handleListInputChange(index, e.target.value)}/>
          <button className="add-list-button" onClick={() => handleAddList(index)}>Ajouter la liste</button>
        </div>
      </div>
      <div className="todo_main">
      <ul>
             {todo.lists.map((list, listIndex) => (
               <li key={listIndex} className='todo_inside_list'>
                <p>{list}</p>
               </li>
             ))}
           </ul>
            {todos.map((todo, index) => (
            <div key={index} className="todo-card">
            <div className="heading_todo">
                <h3>{todo.heading}</h3> {/* Display the heading here */}
                <button className="delete-button-heading" onClick={() => handleDeleteTodo(index)}>Delete Heading </button>
            </div>
            </div>
        ))}
        
      </div>
    </>
  );
};

export default TodoList;
