<<<<<<< HEAD
import {GET_USERS, GET_USERNAME, POST_USER, GET_JOBS, GET_WORKERS_PREMIUM, ORDER_BY_RATING, FILTER} from "../actions/actions_vars"
=======
import {LOADING,GET_USERS_CONTRACTS,GET_WORKER_DETAIL, GET_WORKERS, GET_JOBS, GET_USERS, GET_USERNAME, POST_USER, GET_WORKERS_PREMIUM, LOGIN_SUCCES , GET_WORKERS_SEARCH } from '../actions/actions_vars'
>>>>>>> dc9a8c5f94f3b0d6716503bf6715508cadf678dd

const localStorageAuth = () => {
  const auth = localStorage.getItem("auth");
  if(JSON.parse(auth)) return JSON.parse(auth);
  return { isLoggedIn: false , user: { id : "", name : "", token: ""}}
}

const storagedData = localStorageAuth();

const initialState = {
  workers: [],
  allWorkers: [],
  users: [],
  jobs: [],
  workersPremium: [],
  authState: storagedData,
  workerDetail: {},
  selectedContracts: [],
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return{
        ...state,
        isLoading:true
      }
    case GET_USERS_CONTRACTS:
      return{
        ...state,
        selectedContracts:action.payload,
        isLoading:false
      }

    case GET_WORKER_DETAIL:
      return{
        ...state,
        workerDetail: action.payload,
        isLoading:false
      }
    case GET_USERS:
        return {
          ...state,            
          users: action.payload,
          allWorkers: action.payload         
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
    case LOGIN_SUCCES:
      const authState = {
        isLoggedIn: true,
        user: action.payload
      }

      localStorage.setItem('auth', JSON.stringify(authState));
      return {
        ...state,
        authState
      }
    case GET_WORKERS:
      return {
        ...state,
        workers: action.payload
      }
    case GET_WORKERS_SEARCH:
      
      let filtrado = state.workers.filter( (e) => e.User.name.toLowerCase().includes(action.payload.toLowerCase()))
      if(filtrado.length === 0) {
        filtrado = state.workers.filter( c => c.Jobs.some( j => j.name.toLowerCase() === action.payload.toLowerCase()))
        //filtrado = state.workers.filter( (e) => e.Jobs[0].name.includes(action.payload))
        //filtrado = state.workers.filter((e) => e.Jobs.filter((e) => e.name.includes(action.payload))) 
        //filtrado = state.workers.filter( (e) => e.Jobs.map(e => e.name.includes(action.payload)))      
        
        // for (let i = 0; i < state.workers.length; i++) {
        //   const worker = state.workers[i]
        //   for (let k = 0; k < worker.Jobs.length; k++) {
        //     const job = worker.Jobs[i]
        //     if(job === action.payload){
        //       filtrado.push(worker)
        //     }
        //   }
          
        // }
      }
    return {
        ...state,
        workers: filtrado
      }
    case ORDER_BY_RATING:{
      return {
        ...state,
        workers: action.payload
      }
    }
    case FILTER: {
      return {
        ...state,
        workers: action.payload
      }
    }
    default:
      return state;
  }
}

export default reducer;