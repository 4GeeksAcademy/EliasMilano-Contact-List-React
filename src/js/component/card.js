
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    let imageURL = "";
    if (props.name == "Neo") {
        imageURL = "https://raw.githubusercontent.com/4GeeksAcademy/EliasMilano-Contact-List-React/refs/heads/master/src/img/Neo.jpg"
    }
    if (props.name == "Trinity") {
        imageURL = "https://raw.githubusercontent.com/4GeeksAcademy/EliasMilano-Contact-List-React/refs/heads/master/src/img/Trin.jpg"
    }
    if (props.name == "The Oracle") {
        imageURL = "https://raw.githubusercontent.com/4GeeksAcademy/EliasMilano-Contact-List-React/refs/heads/master/src/img/Oracle.jpg"
    }

    return (
        <div className="card mb-3 p-3 bg-black text-success border" style={{"maxWidth": "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={(imageURL != "") ? imageURL : ("https://i.pravatar.cc/200?u=" + props.name)} className="img-fluid rounded-circle" alt="..."/>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><i className="fa-solid fa-location-dot"></i> {props.address}</p>
                        <p className="card-text"><i className="fa-solid fa-phone"></i><small className="text-body-secondary"> {props.phone}</small></p>
                        <p className="card-text"><i className="fa-solid fa-envelope"></i><small className="text-body-secondary"> {props.email}</small></p>
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="card-body">
                        <i className="fa-solid fa-pen-to-square" title="Edit contact"
                            onClick={() => navigate("/edit/" + props.id)}
                        />
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
