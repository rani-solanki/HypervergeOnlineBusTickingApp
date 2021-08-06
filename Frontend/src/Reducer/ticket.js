import {
    CANNOT_CANCEL,
    CANCEL_TICKET,
    TICKETS,
    NO_TICKETS,
    BOOKING_FAIL,
    BOOKING_SUCCESS,
} from '../action/type';

const initialState ={
    tickets:[],
    loading: true,
    error: {}
};

export default function (state = initialState, action){
    const { type, payload } = action
    switch (type){
        case TICKETS:
            return {
                ...state,
                tickets: payload,
                loading: false
            };
        case BOOKING_SUCCESS:
            return {
                ...state,
                ...payload,
                loading: false
            };
        case NO_TICKETS:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case BOOKING_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CANCEL_TICKET:
            return {
                ...state,
                error: payload,
                loading:false
            }
        case CANNOT_CANCEL:
            return {
                ...state,
                error:payload
            }
        default:
            return state;
    }
}

