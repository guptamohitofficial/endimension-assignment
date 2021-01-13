import React, { Component } from "react";
import Scans from "./Scans";
import ApiCalls from "../../non-components/easy";

export default class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfDoctors: [],
      newAdded: false,
      resetNewAdded: () => {
        this.setState({ newAdded: false });
      }
    };
  }
  componentDidMount() {
    ApiCalls.getCall("doctor/get-doctors").then(response => {
      if (response.data["valid"]) {
        this.setState({
          listOfDoctors: response.data["doctors"].map(a => (
            <option key={a.id} value={a.id}>
              {a.first_name}
            </option>
          ))
        });
      }
    });
  }
  handleNewScan = e => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append(
      "doctor",
      document.getElementsByClassName("to-doctor")[0].value
    );
    formdata.append("name", document.getElementsByClassName("pname")[0].value);
    formdata.append("age", document.getElementsByClassName("age")[0].value);
    formdata.append(
      "image",
      document.getElementsByClassName("image-file")[0].files[0]
    );
    formdata.append(
      "gender",
      document.getElementsByClassName("gender")[0].value
    );

    ApiCalls.postCallFormData("hospital/save-a-record", formdata).then(
      response => {
        if (response.data["valid"]) {
          this.setState({ newAdded: true });
          document.getElementsByClassName("close")[0].click();
        } else window.alert("Something went wrong");
      }
    );
  };
  render() {
    return (
      <div>
        <div className="row mx-0 border border-top-0 border-left-0 border-right-0">
          <div>
            <h4>{this.props.user.first_name}</h4>
            <h6>{this.props.user.email}</h6>
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
                <form onSubmit={this.handleNewScan}>
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
                  <div className="modal-body">
                    <div>
                      <div className="form-row m-0">
                        <div className="form-group col-6 m-0">
                          <input
                            type="text"
                            className="form-control pname"
                            placeholder="Patient Name"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="number"
                            className="form-control age"
                            placeholder="Age"
                            required
                          />
                        </div>
                      </div>
                      <div className="form-row m-0">
                        <div className="form-group col-6 m-0">
                          <select className="form-control gender" required>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="form-group col-6 m-0">
                          <input
                            type="file"
                            className="form-control image-file"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div className="form-row m-0">
                        <div className="form-group col-12 my-2">
                          <select className="form-control to-doctor" required>
                            <option disabled={true}>
                              --- Select Doctor ---
                            </option>
                            {this.state.listOfDoctors}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Send to Doctor
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="ml-auto">
            <button
              className="btn btn-outline-success"
              type="button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Create a Record
            </button>
          </div>
        </div>
        <Scans
          newAdded={this.state.newAdded}
          resetNewAdded={this.state.resetNewAdded}
          {...this.props}
        />
      </div>
    );
  }
}
