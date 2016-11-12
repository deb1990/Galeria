export function fetchStart(){
    return {
        type: "FETCH_START"
    }
}

export function fetchError() {
    return {
        type: "FETCH_ERROR"
    }
}


export function dataFetched(value) {
    return {
        type: "FETCH_END",
        payload: value
    }
}

export function toggleFilterDialog() {
    return {
        type: "TOGGLE_FILTER"
    }
}

export function updateFilter(value) {
    return {
        type: "UPDATE_FILTER",
        payload: value
    }
}

export default {fetchStart, fetchError, dataFetched, toggleFilterDialog, updateFilter};

