import React from "react";
import ReactDOM from "react-dom";

const Review = (props)=>{
    return(
        <div className="ui cards">
            <div className="card">
                <div className="content">{props.children}</div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">{props.btnApproveText}</div>
                        <div className="ui basic red button">{props.btnRejectText}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Review.defaultProps = {
    btnApproveText:'Approve',
    btnRejectText:'Reject'
}

export default Review;