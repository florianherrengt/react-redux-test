import { SHOW_SOMETHING } from '../actions/about';

export default function data(state = null, action) {
    const { type, data } = action;
    switch (type) {
       case SHOW_SOMETHING:
        return data;
    default:
        return state;
    }
}
