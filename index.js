const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const additionState = {
  user: 'Vladimir',
  status: 'online'
}

//const newState = Object.assign({}, defaultState, additionState)
const newState = {...defaultState, ...additionState, friends: 700}

console.log(newState)
