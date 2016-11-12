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

export function applyFilter() {
    return {
        type: "APPLY_FILTER"
    }
}

export function showImageDetails(value) {
    return {
        type: "SHOW_IMG_DETAILS",
        payload: value
    }
}

export function hideImageDetails() {
    return {
        type: "HIDE_IMG_DETAILS"
    }
}

export function getMoreData() {
    return {
        type: "GET_MORE_DATA"
    }
}

export default {
    fetchStart, 
    fetchError, 
    dataFetched, 
    toggleFilterDialog, 
    updateFilter, 
    showImageDetails, 
    hideImageDetails, 
    getMoreData,
    applyFilter
};

