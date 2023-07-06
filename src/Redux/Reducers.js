

const Initail = {
    count: 0,
    position:"",

}

export const Countreducer = (state = Initail, action) => {

    switch (action.type) {
        case "Add":
            return {...state, count: state.count + 1 }
        case "Dec":
            return {...state, count: state.count - 1 }
        default:
    }



    return state;

}

export const Deptreducers = (state = Initail, action) => {
    switch (action.type) {
        case "Inbo":
            return {  ...state, position: "Pentaho"}
            default:
    }
    
return state;
}