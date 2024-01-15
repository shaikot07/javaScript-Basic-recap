// defining constants 

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state 
const initialCounterState ={
      count : 0,
};
const initialUsersState ={
      user :[{name: "saiful islam shaikat"}]
};
// action - Object- type, payload
const incrementCounter =()=>{
      return {
            type: INCREMENT,
      };
};
const decrementCounter =()=>{
      return {
            type: DECREMENT,
      };
};

const addUser =()=>{
      return {
            type: ADD_USER,
            payload:{name:"shaikat"},
      }
}

// create reducer for counter 
const counterReducer =(state= initialCounterState, action)=>{
      switch (action.type) {
            case INCREMENT:
                  return {
                        ...state,
                        count: state.count + 1,
                  };
            case DECREMENT:
                  return{
                        ...state,
                        count:state.count - 1,
                  }
            default:
                  state;
      }
}

// stape of redux 
// 1. state 
// 2.dispatch action 
// 3. reducer 
// 4.store