
export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const addUsers = (user) => {
  return {
    type: 'ADD',
    payload: user
  };
};

export const deleteUsers = (id) => {
  return {
    type: 'DELETE',
    payload: id
  };
};
