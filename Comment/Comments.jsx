import React from "react";
import ReactDOM from "react-dom";

const Comments = (props)=>{
    return(
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="Image1" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">{props.name}</a>
                <div className="text">
                    <p>{props.comment}</p>
                </div>
            </div>
        </div>
    )
}

export default Comments;