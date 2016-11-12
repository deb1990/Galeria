export default function(state = {
    list: [],
    fetching: false,
    fetched: false,
    error: false,
    filter: {
        open: false,
        section: 'hot',
        sort: 'viral',
        window: 'day',
        viral: true
    }
}, action) {
    switch (action.type){
        case "FETCH_START": {
            return {
                ...state,
                fetching: true,
                error: false
            };
        }
        case "FETCH_ERROR": {
            return {
                ...state,
                fetching: false,
                error: true
            };
        }
        case "FETCH_END": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                list: action.payload.data
            };
        }
        case "TOGGLE_FILTER": {
            let returnVal = {
                ...state
            };
            returnVal.filter.open = !returnVal.filter.open;
            return returnVal;
        }
        case "UPDATE_FILTER": {
            let returnVal = {
                ...state
            };
            returnVal.filter[action.payload.type] = action.payload.value;
            return returnVal;
        }
    }
    return state;
}