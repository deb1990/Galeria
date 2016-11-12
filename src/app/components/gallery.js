import React from "react";
import {connect} from "react-redux";
import axios from "axios";

import galleryActions from "../actions/gallery-actions";

import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';
import IconButton from 'material-ui/IconButton';

import Filter from 'material-ui/svg-icons/content/filter-list';

import ImageList from "./image-list";
import FilterImages from "./filter-images";
import ImageDetails from "./image-details";

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
};

class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            isFilterOpen: false
        }
    }

    getAPIUrl() {
        const apiPrefix = "https://api.imgur.com/3/gallery/";
        return apiPrefix +
            this.props.galleryData.filter.section + "/" +
            this.props.galleryData.filter.sort + "/" +
            this.props.galleryData.filter.window + "/" +
            "?showViral=" + this.props.galleryData.filter.viral;
    }
    
    getData() {
        this.props.dispatch(galleryActions.fetchStart());
        axios({
            method: "get",
            url: this.getAPIUrl(),
            headers: {'Authorization': 'Client-ID 093fd3f83b3fea9'}
        }).then((response)=>{
                this.props.dispatch(galleryActions.dataFetched(response.data));
            });
    }

    componentDidMount(){
        this.getData();
    }

    showLoader() {
        if(this.props.galleryData.fetching) {
            return <div>
                <CircularProgress/>
            </div>;
        }
    }

    toggleFilterDialog() {
        this.props.dispatch(galleryActions.toggleFilterDialog());
    } 
    
    updateFilterState(value) {
        this.props.dispatch(galleryActions.updateFilter(value));
    }

    showImageDetails(index) {
        this.props.dispatch(galleryActions.showImageDetails(index));
    }
    
    hideImageDetails() {
        this.props.dispatch(galleryActions.hideImageDetails());
    }

    render() {
        return <div style={styles.root}>
            {this.showLoader()}
            <AppBar
                title="Galeria"
                iconElementRight={
                <IconButton onTouchTap={this.toggleFilterDialog.bind(this)}>
                    <Filter/>
                </IconButton>
                }
            />
            <FilterImages
                data = {this.props.galleryData.filter}
                closeFilter={this.toggleFilterDialog.bind(this)}
                updateFilter={this.updateFilterState.bind(this)}
                applyFilter={this.getData.bind(this)}
            />
            

            <ImageList
                data = {this.props.galleryData.list}
                showImageDetails = {this.showImageDetails.bind(this)}
            />
            <ImageDetails 
                data={this.props.galleryData.list}
                hideImageDetails = {this.hideImageDetails.bind(this)}
                image={this.props.galleryData.imageDetails}>
                
            </ImageDetails>
        </div>
    }
}

function mapStatetoProps(state){
    return {
        galleryData: state.galleryData
    }
}

export default connect(mapStatetoProps)(Gallery);