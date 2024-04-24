import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/contacts.css";

const Contacts = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate()

  return (
    <>
    <div className="container-fluid m-3 p-3 ">
      <div className=" ">
        <h1 className="text-center text-secondary">AGENDA</h1>
        {store.contacts &&
          store.contacts.length > 0 &&
          store.contacts.map((contact) => {
            return(
              <div className="card w-100  m-3 border border-3 rounded  p-2 text-dark bg-opacity-10" style={{ width: "540px" }}>
              <div className="row ">
                <div className="col-2 ">
                  <img
                    src={rigoImage}
                    className="rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title"><span class="border-bottom">{contact.name}</span></h5>
                    <p className="card-text"><span class="border-bottom">{contact.address}</span></p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                      <span class="border-bottom">{contact.phone}</span>
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                      <span class="border-bottom">{contact.email}</span>
                      </small>
                    </p>
                  </div>
                </div>
                <div className="d-flex col-2  justify-content-around my-5">
                  <div >
                    <i role="button" onClick={() => navigate("/edit/" + contact.id)} className="bi bi-pen-fill fs-5 rounded-circle" ></i>
                  </div>
                  <div>
                    <i role="button" onClick={() => actions.deleteContact(contact.id)} className="bi bi-trash-fill fs-5 rounded-circle"></i>
                  </div>
                </div>
              </div>
            </div>
            )
            
          })}
      </div>
    </div>
    </>
  );
};

export default Contacts;
