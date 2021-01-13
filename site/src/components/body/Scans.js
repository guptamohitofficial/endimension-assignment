import React, { Component } from "react";
import ApiCalls from "../../non-components/easy";

export default class Scans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfScans: (
        <tr>
          <td className="text-center" colSpan={6}>
            No Records Found
          </td>
        </tr>
      )
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.newAdded !== false &&
      this.props.user.last_name === "hospital"
    ) {
      // resetting signal state
      this.props.resetNewAdded();
      this.componentDidMount();
    }
  }
  componentDidMount() {
    ApiCalls.getCall("hospital/get-records").then(response => {
      if (response.data["valid"]) {
        if (response.data["records"].length >= 1) {
          this.setState({
            listOfScans: response.data["records"].map(a => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.age}</td>
                <td>{a.gender}</td>
                <td>{a.time}</td>
                <td>
                  <span
                    onClick={() => {
                      this.props.history.push(`/record/${a.id}`);
                    }}
                    className="col-12 btn btn-outline-info"
                    type="button"
                  >
                    Details
                  </span>
                </td>
              </tr>
            ))
          });
        }
      }
    });
    this.createReport = pid => {
      ApiCalls.postCall("").then(response => {
        if (response.data["valid"]) {
          console.log();
        }
      });
    };
  }
  render() {
    return (
      <div>
        <h4 className="mb-4 text-center">Table of Scans</h4>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th>Scan Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Time</th>
                <th>Report</th>
              </tr>
            </thead>
            <tbody>{this.state.listOfScans}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
