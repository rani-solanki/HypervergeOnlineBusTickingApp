import axios from 'axios';
import setAlert from './aleart';
import { BUSNOT_FOUND, BUS_FOUND } from './type';

// Search bus
export const searchbus = ({ from, to, date }) => async dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    }
    const start = from.trim().split(',')
    const End = to.trim().split(',')

    from = { "city": start[0], "state": start[1] }
    to = { "city": End[0], "state": End[1] }

    const data = {
        "from": {
            "city": start[0],
            "state": start[1]
        },
        "to": {
            "city": End[0],
            "state": End[1]
        },
        date
    }
    const body = JSON.stringify(data)
    try {
        const res = await axios.post('/api/buses/searchbus', body, config);
        if (res.data.length === 0) {
            dispatch({
                type: BUSNOT_FOUND,
                payload: res.data
            })
        }
        else {
            dispatch({
                type: BUS_FOUND,
                payload: res.data
            })
        }
        console.log({ payload: res.data })
        
    } catch (err) {
        const errors = err.response.data.err;
        if (errors) {
            alert("Not Found")
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: BUSNOT_FOUND
        })
    }
}
