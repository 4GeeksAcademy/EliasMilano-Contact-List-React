
import React from "react";

export const ContactCard = (props) => {
    return (
        <div className="card mb-3 p-3 bg-black text-success border" style={{"maxWidth": "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"https://i.pravatar.cc/200?u=" + props.name} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><i class="fa-solid fa-location-dot"></i> {props.address}</p>
                        <p className="card-text"><i class="fa-solid fa-phone"></i><small className="text-body-secondary"> {props.phone}</small></p>
                        <p className="card-text"><i class="fa-solid fa-envelope"></i><small className="text-body-secondary"> {props.email}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )

}
