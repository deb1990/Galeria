export default function(state = {
    list: [],
    imageDetails: {
        index: null,
        open: false
    },
    fetching: false,
    fetched: false,
    error: false,
    filter: {
        open: false,
        section: 'hot',
        sort: 'viral',
        page: 0,
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
                list: state.list.concat(action.payload.data)
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
            returnVal.list = [];
            returnVal.filter[action.payload.type] = action.payload.value;
            return returnVal;
        }
        case "GET_MORE_DATA": {
            let returnVal = {
                ...state
            };
            returnVal.filter["page"] = returnVal.filter["page"] + 1;
            return returnVal;
        }
        case "SHOW_IMG_DETAILS": {
            let returnVal = {
                ...state
            };
            returnVal.imageDetails = {
                index: action.payload,
                open: true
            };
            return returnVal;
        }
        case "HIDE_IMG_DETAILS": {
            let returnVal = {
                ...state
            };
            returnVal.imageDetails = {
                index: null,
                open: false
            };
            return returnVal;
        }
    }
    return state;
}