import React from "react";
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';
import WhatShot from 'material-ui/svg-icons/social/whatshot';

const styles = {
    dialogStyles: {
        width: "60%",
        textAlign: "center"
    }
};

class ImageDetails extends React.Component {
    constructor() {
        super();
    }

    render() {
        if(this.props.image.index!==null) {
            let item = this.props.data[this.props.image.index];
            const actions = [
                <FlatButton
                    label="Close"
                    primary={true}
                    onTouchTap={this.props.hideImageDetails}
                />
            ];
            return <Dialog
                contentStyle={styles.dialogStyles}
                actions={actions}
                modal={false}
                open={this.props.image.open}>
                <img id="full-image" src={item.link}/>
                <div className="image-title">{item.title}</div>
                <div>
                    <span className="image-info">
                        <WhatShot/>
                        <span>{item.score}</span>
                    </span>
                    <span className="image-info">
                        <ThumbsUp/>
                        <span>{item.ups}</span>
                    </span>
                    <span className="image-info">
                        <ThumbsDown/>
                        <span>{item.downs}</span>
                    </span>
                </div>
            </Dialog>
        } else {
            return <div></div>;
        }
    }
}

export default ImageDetails;