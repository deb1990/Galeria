import React from "react";
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

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
                actions={actions}
                modal={false}
                open={this.props.image.open}>
                <img src={item.link}/>
                <div>
                    Score {item.score},
                    Title {item.title},
                    UpVotes {item.ups},
                    DownVotes {item.downs},
                </div>
            </Dialog>
        } else {
            return <div></div>;
        }
    }
}

export default ImageDetails;