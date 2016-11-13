import React from "react";
import {GridList, GridTile} from 'material-ui/GridList';

class ImageList extends React.Component {
    constructor(){
        super();
    }
    
    getList() {
        var images = this.props.data.map((item, index)=>{
            if(!item.is_album) {
                return <GridTile
                    key={item.id}
                    title={item.title}
                    rows={0.8}
                    titleBackground="rgba(0, 0, 0, 0.9)"
                    subtitle={<span>{item.topic}</span>}>
                    <img src={item.link}
                         onClick={()=>{this.props.showImageDetails(index)}}/>
                </GridTile>;
            }
        });
        images = images.filter((item)=>{
            return item;
        });

        return images;
    }

    render() {
        var list = this.getList();
        return <GridList
            id="image-grid"
            cols={3}
            cellHeight={500}
            padding={1}
            >{list}
        </GridList>;
    }
}

export default ImageList;