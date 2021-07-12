const initialState = {
    users : []
}

export const usersReduser = (state = initialState, {type, payload}) => {
    switch(type){
        case "FETCH_USERS" :
            // state.users.push("faqih")
            return {...state, users : payload}
        default :
            return state
    }
}