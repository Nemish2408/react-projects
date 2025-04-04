import React, { Component, createRef } from "react";

export default class ScrollingList extends Component {
    constructor(props) {
        super(props);
        this.listRef = createRef();
        this.state = {
            items: Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`),
        };
        console.log("ScrollingList: Constructor");
    }

    componentDidMount(){
        console.log(" ScrollingList: componentDidMount");        
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("ScrollingList: getSnapshotBeforeUpdate", prevProps, prevState);
        if (prevState.items.length < this.state.items.length) { 
            const list = this.listRef.current;
            return list.scrollHeight - list.scrollTop;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("ScrollingList: componentDidUpdate", prevProps, prevState, snapShot);
        if (snapShot !== null) {
            const list = this.listRef.current;
            list.scrollTop = list.scrollHeight - snapShot;
        }
    }

    addItem = () => {
        this.setState((prevState) => ({
            items: [...prevState.items, `Item ${prevState.items.length + 1}`],
        }));
    };

    render() {
        console.log("ScrollingList: Render");
        return(
            <div className="component-box">
                <h2>Scrolling List Component</h2>
                <div ref={this.listRef} style={{border: "1px solid #ccc", height: "290px", overflowY: "scroll", marginBottom: "10px"}}>
                    {this.state.items.map((item, index) => (
                        <div key={index} style={{padding: "5px", borderBottom: "1px solid #eee"}}>
                            {item}
                        </div>
                    ))}
                </div>
                <button onClick={this.addItem}>Add Item</button>
            </div>
        );
    }
}