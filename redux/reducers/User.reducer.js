import {STORE_USER_DATA} from '../actionTypes/UserActionTypes';

const INITIAL_STATE: ProfileState = {
  data: [{
    email: 'admin@gmail.com',
    password: 'password@123'
  },
  {
    email: 'user@gmail.com',
    password: 'password@123'
  }
]
};

function profileReducer(
  state = INITIAL_STATE,
  action: ProfileTypes
): ProfileState {
  switch (action.type) {
    case STORE_USER_DATA: {
      return {
        ...state,
        data: {...action.payload},
      };
    }
    default:
      return state;
  }
}

export default profileReducer;
