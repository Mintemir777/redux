
const defaultState = {
    customers: []
  };
  
  const customersReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'ADD':
        return {
          ...state,
          customers: [...state.customers, action.payload]
        };
      case 'DELETE':
        return {
          ...state,
          customers: state.customers.filter(customers => customers.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default customersReducer;
  
  