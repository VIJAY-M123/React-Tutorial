



const myreducer=(state={count:0},action)=>{
       
       if(action.type==="incre"){
            return {count:state.count +1}
       }
       if(action.type==="decre"){
          return {count:state.count -1}
     }
      return state
}
export default myreducer;
// export const mystore =createStore(myreducer);


