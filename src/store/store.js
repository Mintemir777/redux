import  {createStore, combineReducers} from 'redux';
import counterReducer from './reducer';
import customersReducer from './reducerCustomers';

const rootReducer = combineReducers(
  {
    cash: counterReducer,
    customers: customersReducer,
  }
)

const store = createStore(
  rootReducer
);

export default store;
