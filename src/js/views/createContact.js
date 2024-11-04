
import React from "react";
import { useState, useContext } from "react";
import { useActionData } from "react-router";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const CreateContact = () => {
    const {actions} = useContext(Context);
    const navigate = useNavigate();
    const [newContact, setNewContact] = useState({});
    return (
        <div container>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><strong>Full Name</strong></label>
                <input onChange={(evento) => setNewContact({...newContact, name:evento.target.value})} value={newContact.name || ""} type="text" className="form-control" placeholder="Full Name" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><strong>Email</strong></label>
                <input onChange={(evento) => setNewContact({...newContact, email:evento.target.value})} value={newContact.email || ""} type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><strong>Phone</strong></label>
                <input onChange={(evento) => setNewContact({...newContact, phone:evento.target.value})} value={newContact.phone || ""} type="phone" className="form-control" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label"><strong>Address</strong></label>
                <input onChange={(evento) => setNewContact({...newContact, address:evento.target.value})} value={newContact.address || ""} type="text" className="form-control" placeholder="Enter address" />
            </div>

            <button onClick={async() => {
                await actions.createContact(newContact)
                navigate("/") // nos devuelve a la vista Home una vez quede creado un contacto nuevo. También se puede usar -1 sin comillas.
                              // hay que importarlo desde "react-router-dom"              
                }} type="submit" className="btn btn-primary w-100">Submit</button>

            <div className="ml-auto">
				<Link to="/">
					<button className="btn btn-success">Back home</button>
				</Link>
			</div>

        </div>
    )
}