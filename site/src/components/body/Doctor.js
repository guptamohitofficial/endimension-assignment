import React, { Component } from "react";
import Scans from "./Scans";

export default class Doctor extends Component {
  render() {
    return (
      <div>
        <div className="row mx-0 border border-top-0 border-left-0 border-right-0">
          <div>
            <h4>{this.props.user.first_name}</h4>
            <h6>{this.props.user.email}</h6>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content" style={{ borderRadius: "10px" }}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Make a Scan Record
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Send to Doctor
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <Scans {...this.props} />
        </div>
      </div>
    );
  }
}
