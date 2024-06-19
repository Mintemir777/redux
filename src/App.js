import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addUsers, deleteUsers } from './store/action';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.cash.count);
  const customers = useSelector(state => state.customers.customers);

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addUsers(customer));
  };

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => {
          const name = prompt('Enter customer name:');
          if (name) addCustomer(name);
        }}>Добавить клиента</button>
      </div>

      {customers.length > 0 ? (
        <div>
          <h2>Customers:</h2>
          <ul>
            {customers.map(customer => (
              <ui key={customer.id}>
                <h3 style={{ }}>{customer.name}</h3>
                <button onClick={() => dispatch(deleteUsers(customer.id))}>Delete</button>
              </ui>
            ))}
          </ul>
        </div>
      ) : (
        <div>Клиенты отсутствуют!</div>
      )}
    </div>
  );
}

export default App;
