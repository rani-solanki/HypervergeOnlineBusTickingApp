import { combineReducers } from 'redux';
import alert from './aleart'
import auth from './auth';
import searchBus from './searchBus';
import busStatus from './busStatus';
import Agency from './Agency';
import Staff from './Staff';
import Location from './Location';
import Buses from './Bus';
import tickets from './ticket';

export default combineReducers({
    alert,
    auth,
    searchBus,
    busStatus,
    Agency,
    Staff,
    Location,
    Buses,
    tickets
});


