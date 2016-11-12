import React from "react";


import Dialog from 'material-ui/Dialog'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'


class FilterImages extends React.Component {
    constructor() {
        super();
    }

    handleClose() {
        this.props.closeFilter();
    }
    handleSubmit() {
        this.props.applyFilter();
        this.props.closeFilter();
    }

    handleSection(event, index, value) {
        this.props.updateFilter({
            type: "section",
            value
        });
    }
    
    handleWindow(event, index, value) {
        this.props.updateFilter({
            type: "window",
            value
        });
    }
    handleSort(event, index, value) {
        this.props.updateFilter({
            type: "sort",
            value
        });
    }
    handleViral(event, value) {
        this.props.updateFilter({
            type: "viral",
            value
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmit.bind(this)}
            />
        ];
        return <Dialog
            actions={actions}
            modal={false}
            open={this.props.data.open}>
            <SelectField
                floatingLabelText="Section"
                value={this.props.data.section}
                onChange={this.handleSection.bind(this)}>
                <MenuItem value="hot" primaryText="Hot" />
                <MenuItem value="top" primaryText="Top" />
                <MenuItem value="user" primaryText="User" />
            </SelectField>
            <SelectField
                floatingLabelText="Window"
                value={this.props.data.window}
                onChange={this.handleWindow.bind(this)}>
                <MenuItem value="day" primaryText="Day" />
                <MenuItem value="week" primaryText="Week" />
                <MenuItem value="month" primaryText="Month" />
                <MenuItem value="year" primaryText="Year" />
            </SelectField>
            <SelectField
                floatingLabelText="Sort"
                value={this.props.data.sort}
                onChange={this.handleSort.bind(this)}>
                <MenuItem value="viral" primaryText="Viral" />
                <MenuItem value="top" primaryText="Top" />
                <MenuItem value="time" primaryText="Time" />
                <MenuItem value="rising" primaryText="Rising" />
            </SelectField>

            <Checkbox
                label="Viral"
                checked={this.props.data.viral}
                onCheck={this.handleViral.bind(this)}
            />
        </Dialog>
    }
}


export default FilterImages;