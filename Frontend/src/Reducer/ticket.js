const {
    CANNOT_CANCEL,
    CANCEL_TICKET,
    TICKETS_FOUND,
    NO_TICKET,
    BOOKING_FAIL,
    BOOKING_SUCCESS,
} = '../../action/type';

const initialState = {
    tickets: {},
    loading: true,
    error: {}
};

const tickets = (state = initialState, action) =>{
    const { type, payload } = action
    console.log(type,payload)
    switch (type){
        case BOOKING_SUCCESS:
            console.log("enter in the booking")
            return {
                ...state,
                ...payload,
                loading: false
            };
        case TICKETS_FOUND:
            console.log("enter in the tickets")
            return {
                ...state,
                tickets: {...payload},
                loading: false
            };
        case BOOKING_FAIL:
            return {
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state;
    }
}
export default tickets

