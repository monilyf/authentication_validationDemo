export function fetchUserRequest(){
    console.log('hello from action fetchuserRequest')
    return {
        type:'FETCH_USER_REQUEST',
    };
};

const fetchUserSuccess=()=>{
    return {
        type:'FETCH_USER_SUCCESS',
    };
};

const fetchUserFailure=()=>{
    return {
        type:'FETCH_USER_FAILURE',
    };
};