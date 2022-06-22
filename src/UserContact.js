import React, { useState } from "react";
import "./UserContact.css";

function UserContact() {
  // STATE
  const [message, setMessage] = useState(7);

  // STATE FUNCTION
  function addMess() {
    setMessage((prev) => prev + 1);
  }
  function delMess() {
    setMessage((prev) => prev - 1);
  }

  // STATE FUNCTION OBJECT
  const [contact, setContact] = useState({
    firstName: "Aliahmad",
    gender: "👳‍♂️ Male",
  });

  // STATE YANGILASH
  function onChange() {
    setContact((prev) => {
      return {
        ...prev,
        firstName: "Muslimahon",
        gender: "💂‍♀️ Female",
      };
    });
  }
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">USER MESSAGE 📩</h1>
            </div>
            <div className="card-body">
              <div className="title">
                <h2>
                  <i className="fa-solid fa-users"></i>
                  USERS CONTACT 👇
                </h2>
                <br />
                <h3>
                  {contact.firstName} {contact.gender}
                </h3>
              </div>
            </div>
            <div className="card-footer">
              <div className="footer-info">
                <a href="!#" className="position-relative">
                  <i className="fa-solid fa-message fa-4x p-3"></i>
                  <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                    {message}
                  </span>
                </a>
                <br />
                <div className="message-add">
                  <h3>
                    MESSAGE
                    <span className="position-relative">
                      <span class="position-absolute translate-middle badge rounded-pill bg-warning text-dark">
                        {message}
                      </span>
                    </span>
                  </h3>
                </div>
                <br />
                <h4 onClick={onChange}>
                  <i className="fa-solid fa-pen-clip"></i> EDIT
                </h4>
              </div>
              <br />
              <div className="d-md-block ">
                <button
                  type="button"
                  className="btn btn-primary m-2"
                  onClick={addMess}
                >
                  ADDED
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={delMess}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserContact;
