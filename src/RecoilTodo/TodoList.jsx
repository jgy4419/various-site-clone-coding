import React, {useState, useEffect} from 'react';

// Recoil
// import { todoListState, filteredTodoListState, todoListStatsState, todoListFilterState } from '../Recoil/atom';
import { textState, changeText } from '../Recoil/atom';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


export default function CharacterCounter() {
    return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    );
  }
  
  function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }

function CharacterCount(){
    const count = useRecoilValue(changeText);
    return(
        <>
            Counter {count};
        </>
    )
}



// export default function TodoList() {
//     // changed from todoListState to filteredTodoListState
//     const todoList = useRecoilValue(filteredTodoListState);
  
//     return (
//       <>
//         <TodoListStats />
//         <TodoListFilters />
//         <TodoItemCreator />
  
//         {todoList.map((todoItem) => (
//           <TodoItem item={todoItem} key={todoItem.id} />
//         ))}
//       </>
//     );
//   }

//   function TodoListFilters() {
//     const [filter, setFilter] = useRecoilState(todoListFilterState);
  
//     const updateFilter = ({target: {value}}) => {
//       setFilter(value);
//     };
  
//     return (
//       <>
//         Filter:
//         <select value={filter} onChange={updateFilter}>
//           <option value="Show All">All</option>
//           <option value="Show Completed">Completed</option>
//           <option value="Show Uncompleted">Uncompleted</option>
//         </select>
//       </>
//     );
//   }
//   function TodoListStats() {
//     const {
//       totalNum,
//       totalCompletedNum,
//       totalUncompletedNum,
//       percentCompleted,
//     } = useRecoilValue(todoListStatsState);
  
//     const formattedPercentCompleted = Math.round(percentCompleted * 100);
  
//     return (
//       <ul>
//         <li>Total items: {totalNum}</li>
//         <li>Items completed: {totalCompletedNum}</li>
//         <li>Items not completed: {totalUncompletedNum}</li>
//         <li>Percent completed: {formattedPercentCompleted}</li>
//       </ul>
//     );
//   }



// function TodoItemCreator(){
//     // input??? ????????? ???.
//     const [inputValue, setInputValue] = useState('');
//     // 
//     const setTodoList = useSetRecoilState(todoListState);
//     // Add ????????? ????????? setTodoList??? ????????? oldTodoList?????? ??????, 
//     // ?????? ??????(????????? ??? ?????? id??? 1??? ??????, text??? input??? ????????? ???)??? ????????? ????????? ?????????.
//     const addItem = () => {
//         // setTodoList??? 
//         setTodoList(oldTodoList => [
//             ...oldTodoList,
//             {
//                 id: getId(),
//                 text: inputValue,
//                 isComplete: false,
//             }
//         ]);
//         setInputValue('');
//     };
//     // input?????? text??? ????????????, ????????? text????????? setInputValue??? ????????????.
//     const onChange = ({target: {value}}) => {
//         setInputValue(value);
//     }
//     return(
//         <div>
//             <input type="text" value={inputValue} onChange={onChange} />
//             <button onClick={addItem}>Add</button>
//         </div>
//     )
// }
// // ????????? id??? ?????????????????? ??????.
// let id = 0;
// function getId(){
//     return id++;
// }

// function TodoItem({item}) {
//     const [todoList, setTodoList] = useRecoilState(todoListState);
//     const index = todoList.findIndex((listItem) => listItem === item);
//     // ??? ?????? ???????????? Input??? ????????????, 
//     const editItemText = ({target: {value}}) => {
//       const newList = replaceItemAtIndex(todoList, index, {
//         ...item,
//         text: value,
//       });
  
//       setTodoList(newList);
//     };
  
//     const toggleItemCompletion = () => {
//       const newList = replaceItemAtIndex(todoList, index, {
//         ...item,
//         isComplete: !item.isComplete,
//       });
  
//       setTodoList(newList);
//     };
  
//     const deleteItem = () => {
//       const newList = removeItemAtIndex(todoList, index);
  
//       setTodoList(newList);
//     };
  
//     return (
//       <div>
//         <input type="text" value={item.text} onChange={editItemText} />
//         <input
//           type="checkbox"
//           checked={item.isComplete}
//           onChange={toggleItemCompletion}
//         />
//         <button onClick={deleteItem}>X</button>
//       </div>
//     );
//   }
  
//   // replaceItemAtIndex????????? ????????? ????????? ?????? ????????? ???????????? ??????.
//   function replaceItemAtIndex(arr, index, newValue) {
//     return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
//   }
// // removeItemAtIndex????????? ????????? ?????? ????????? ??? ????????? ?????? ???????????? ??????.
//   function removeItemAtIndex(arr, index) {
//     return [...arr.slice(0, index), ...arr.slice(index + 1)];
//   }