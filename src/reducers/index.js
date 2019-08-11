import { combineReducers } from 'redux';

import UserReducer from './reducer-user-list';
import ActiveUser from './reducer-user-details';

const allReducers = combineReducers({
    users: UserReducer,
    active_user: ActiveUser
});
export default allReducers;