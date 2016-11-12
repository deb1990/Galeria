import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';

class ImageList extends React.Component {
    constructor(){
        super();
    }

    getList() {
        var images = this.props.data.map((item)=>{
            if(!item.is_album) {
                return <GridTile
                    key={item.id}
                    title={item.title}
                    subtitle={<span>{item.topic}</span>}>
                    <img src={item.link}/>
                </GridTile>;
            }
        });
        images = images.filter((item)=>{
            return item;
        });

        return images;
    }

    render() {
        return <GridList
            cols={3}
            cellHeight={500}
            padding={1}
            >{this.getList()}
        </GridList>;
    }
}

export default ImageList;