const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const additionState = {
  user: 'Vladimir'
}

const newState = Object.assign({}, defaultState, additionState)

console.log(newState)
