
import React from "react";
import { useState, useContext } from "react";
import { useActionData } from "react-router";
import { Context } from "../store/appContext";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

export const CreateContact = (props) => {
    const {actions} = useContext(Context);
    const navigate = useNavigate();
    const [newContact, setNewContact] = useState({});
    const {id} = useParams();

    let urlLocation = useLocation().pathname;
    console.log(urlLocation);
    
    return (
        <div className="mt-5 px-5" style={{"width": "550px"}}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label text-success"><strong>Full Name</strong></label>
                <input onChange={(evento) => setNewContact({...newContact, name:evento.target.value})} value={newContact.name || ""} type="text" className="form-control bg-black text-success" placeholder="Full Name" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label text-success"><strong>Email</strong></label>
                <input onChange={(evento) => setNewContact({...newContact, email:evento.target.value})} value={newContact.email || ""} type="email" className="form-control bg-black text-success" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label text-success"><strong>Phone</strong></label>
                <input onChange={(evento) => setNewContact({...newContact, phone:evento.target.value})} value={newContact.phone || ""} type="phone" className="form-control bg-black text-success" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label text-success"><strong>Address</strong></label>
                <input onChange={(evento) => setNewContact({...newContact, address:evento.target.value})} value={newContact.address || ""} type="text" className="form-control bg-black text-success" placeholder="Enter address" />
            </div>

            <button onClick={ async() => { (urlLocation == "/create") ? await actions.createContact(newContact) : await actions.editContact(id, newContact)
                navigate("/") // nos devuelve a la vista Home una vez quede creado un contacto nuevo. También se puede usar -1 sin comillas.
                              // hay que importarlo desde "react-router-dom"              
                }} type="submit" className="mt-3 btn btn-success text-black w-100">Submit</button>

            <div className="mt-2 ml-auto">
				<Link to="/">
					<button className="btn btn-secondary text-black">Back home</button>
				</Link>
			</div>


        </div>
    )
}