import React, { Component } from "react";
import ApiCalls, { mediaDomain } from "../../non-components/easy";

export default class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      record: "",
      report: "",
      sendBtnText: "Send Report",
      sendBtnColor: "btn-primary"
    };
  }
  componentDidMount() {
    ApiCalls.getCall(
      `hospital/get-record-details/${this.props.match.params.id}`
    ).then(response => {
      if (response.data["valid"]) {
        this.setState({
          record: response.data["record"],
          report: response.data["report"],
          loaded: true
        });
      }
    });
  }
  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div className="container-fluid mt-5">
            <div className="row m-0">
              <div className="col-8 p-0">
                <div style={{ height: "80%", overflow: "auto" }}>
                  <img
                    className="col-12 m-0 p-0"
                    src={mediaDomain() + this.state.record.image}
                    alt="Record Resource File"
                  />
                </div>
              </div>
              <div className="col-4">
                <table className="mx-4">
                  <tr>
                    <th className="my-2 p-2" colSpan="2">
                      Patient Name : {this.state.record.name}
                    </th>
                  </tr>
                  <tr>
                    <td className="p-2">Age : {this.state.record.age}</td>
                    <td className="p-2">Gender : {this.state.record.gender}</td>
                  </tr>
                  <tr>
                    <td className="p-2" colSpan="2">
                      Time : {this.state.record.time}
                    </td>
                  </tr>
                </table>
                <div className="m-2 my-5">
                  <h5 className="text-center col-12"> Report</h5>
                  <textarea
                    className="form-control m-0 report-text"
                    name=""
                    placeholder="We can write report here"
                    cols="20"
                    rows="14"
                    onChange={() => {
                      this.setState({
                        sendBtnColor: "btn-primary",
                        sendBtnText: "Send Report"
                      });
                    }}
                  >
                    {this.state.report}
                  </textarea>
                  <button
                    type="button"
                    onClick={() => {
                      var report = document.getElementsByClassName(
                        "report-text"
                      )[0].value;
                      this.setState({
                        sendBtnColor: "btn-warning",
                        sendBtnText: "Saving Report"
                      });
                      ApiCalls.postCall("hospital/save-patient-report", {
                        report: report,
                        pid: this.state.record.id
                      }).then(response => {
                        if (response.data["valid"]) {
                          this.setState({
                            sendBtnColor: "btn-success",
                            sendBtnText: "Successfully Saved"
                          });
                        }
                      });
                    }}
                    className={`btn ${this.state.sendBtnColor} col-12 m-0 my-3`}
                  >
                    {this.state.sendBtnText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="linePreloader-green"></div>
        )}
      </div>
    );
  }
}
