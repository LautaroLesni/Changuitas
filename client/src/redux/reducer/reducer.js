import {GET_USERS, GET_USERNAME, POST_USER, GET_JOBS, GET_WORKERS, GET_WORKERS_PREMIUM} from "../actions/actions_vars"




const initialState = {
  workers: [],
  users: [],
  jobs: [],
  workersPremium: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
        return {
          ...state,            
          users: action.payload            
        }
    case GET_USERNAME:
      return {
        ...state,        
        users: action.payload
      }
    case POST_USER:
        return {
          ...state
        }
    case GET_JOBS: 
      return{
        ...state,
        jobs : action.payload
    }

    case GET_WORKERS:
      let workers = action.payload
      var totalrating = 0
      for (let i = 0; i < workers.length; i++) {
        totalrating = 0
        workers[i].Contracts && workers[i].Contracts.map(contract => totalrating = totalrating + contract.rating_W)
        workers[i].rating = totalrating / workers[i].Contracts.length
      }
      return {
        ...state,
        workers: action.payload
}
    case GET_WORKERS_PREMIUM:
      return {
        ...state,
        workersPremium: action.payload

      }
    default:
      return state;
  }
}

export default reducer;