// import {atom, selector} from 'recoil';

// export const textState = atom({
//     text: 'textState',
//     default: ''
// });

// export const changeText = selector({
//     key: 'changeText',
//     get: ({get}) => {
//         let text = get(textState);

//         return text.length;
//     }
// })


// import { atom, selector } from 'recoil';

// export const todoListState = atom({
//     key: 'todoListState',
//     default: [],
// });

// export const todoListFilterState = atom({
//     key: 'todoListFilterState',
//     default: 'Show All'
// })

// // todoList FilterState랑, todoListState를 감시하다가, 둘 중 하나라도 변하면 
// // fillteredTodoListState는 재 실행된다.
// export const filteredTodoListState = selector({
//     key: 'filterTodoListState',
//     get: ({get}) => {
//         const filter = get(todoListFilterState);
//         const list = get(todoListState);

//         switch(filter){
//             case 'Show Completed':
//                 return list.filter(item => item.isComplete);
//             case 'Show Uncompleted':
//                 return list.filter(item => !item.isComplete);
//             default:
//                 return list;
//         }
//     }
// })

// export const todoListStatsState = selector({
//     key: 'todoListStatsState',
//     get: ({get}) => {
//       const todoList = get(todoListState);
//       const totalNum = todoList.length;
//       const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
//       const totalUncompletedNum = totalNum - totalCompletedNum;
//       const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;
  
//       return {
//         totalNum,
//         totalCompletedNum,
//         totalUncompletedNum,
//         percentCompleted,
//       };
//     },
//   });