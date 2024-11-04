
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="card mb-3 p-3 bg-black text-success border" style={{"maxWidth": "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"https://i.pravatar.cc/200?u=" + props.name} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><i class="fa-solid fa-location-dot"></i> {props.address}</p>
                        <p className="card-text"><i class="fa-solid fa-phone"></i><small className="text-body-secondary"> {props.phone}</small></p>
                        <p className="card-text"><i class="fa-solid fa-envelope"></i><small className="text-body-secondary"> {props.email}</small></p>
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="card-body">
                        <i className="fa-solid fa-pen-to-square" title="Edit contact"/>
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="card-body">
                    <i className="fa-solid fa-x" title="Delete contact" 
                        onClick={async() => {await actions.deleteContact(props.id)
                            navigate("/")
                        }}
                    />
                    </div>
                </div>

            </div>
        </div>
    )

}
