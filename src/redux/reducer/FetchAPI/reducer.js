const initialState = {
    data:[],
}
const FetchApiReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_USER_REQUEST':
            console.log("hell0 from reducer action FetchUserRequest")
            return{
                ...state,
            };
        case 'FETCH_USER_SUCCESS':
            return{ 
               
                data:action.payload,
                error:''
            };    
        case 'FETCH_USER_FAILURE':
            return{
                data:[],
                error:action.payload,
            };
        
    };
    console.log('reducer-state--data',state,state.data)
    return state
};
export default FetchApiReducer;