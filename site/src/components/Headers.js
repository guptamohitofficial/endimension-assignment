import React, { Component } from "react";
import { websocketDomain } from "../non-components/easy";

export default class PrivateHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewMessage: true,
      isChatWindow: false
    };
    this.chatWS = new WebSocket(`${websocketDomain()}chat`);
  }
  componentDidMount() {
    this.chatWS.onopen = () => {
      this.chatWS.send(JSON.stringify({ reqType: "getPrevChat" }));
    };
    this.chatWS.onmessage = dataString => {
      var data = JSON.parse(dataString.data);
      if (data.do === "history") {
        this.setState({
          chatRender: data.chats.map(a => (
            <div className="border-bottom mb-3">
              <h6>
                <b>{a.fromUser["first_name"]}</b>
              </h6>
              <h6>{a.message}</h6>
            </div>
          ))
        });
      } else {
        document.getElementsByClassName("new-msg-place")[0].focus();
        document.getElementsByClassName("new-msg-place")[0].outerHTML =
          "<div class='border-bottom mb-3'><h6><b>" +
          data.fromUser["first_name"] +
          "</b></h6><h6>" +
          data.message +
          "</h6></div><div class='new-msg-place'></div>";
      }
    };
  }
  render() {
    return (
      <div>
        <header className="col-12 mx-0">
          <div className="flex-column flex-md-row p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <nav className="navbar navbar-expand-md">
              <h5 className="my-0 mr-auto my-auto font-weight-normal">
                <a href="/">Endimension Quick Sample</a>
              </h5>

              <button
                className="navbar-toggler ml-auto collapsed text-dark"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample04"
                aria-controls="navbarsExample04"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="bx bx-down-arrow"></span>
              </button>

              <div className="navbar-collapse collapse" id="navbarsExample04">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item my-auto">
                    <a
                      className="p-2 text-dark text-center"
                      href="https://github.com/guptamohitofficial/endimension-sample"
                    >
                      Download Source
                    </a>
                  </li>
                  <a className="btn btn-outline-danger" href="/logout">
                    Logout
                  </a>
                </ul>
              </div>
            </nav>
          </div>
        </header>
        <div>
          {this.state.isChatWindow ? (
            <div
              className="shadow col-md-3 m-md-5 m-2 bg-white border"
              style={{
                position: "absolute",
                zIndex: "1",
                bottom: "0",
                right: "0",
                width: "95%",
                height: "600px",
                borderRadius: "10px"
              }}
            >
              <div
                className="col-12 py-3"
                style={{
                  overflow: "auto",
                  height: "450px"
                }}
              >
                {this.state.chatRender}
                <div className="new-msg-place"></div>
              </div>
              <div
                className="col-12"
                style={{ bottom: "0", right: "1.5px", position: "absolute" }}
              >
                <div className="my-2">
                  <input
                    type="text"
                    className="mx-0 p-2 text-message-input"
                    placeholder="Type your Message here."
                    style={{ width: "100%" }}
                    onKeyUp={e => {
                      if (e.key === "Enter")
                        document
                          .getElementsByClassName("send-message-btn")[0]
                          .click();
                    }}
                  />
                </div>
                <button
                  onClick={() => {
                    var msg = document.getElementsByClassName(
                      "text-message-input"
                    )[0].value;
                    if (msg !== "") {
                      document.getElementsByClassName(
                        "text-message-input"
                      )[0].value = "";
                      this.chatWS.send(
                        JSON.stringify({
                          reqType: "message",
                          message: msg
                        })
                      );
                    }
                  }}
                  className="btn mb-2 btn-outline-success col-12 send-message-btn"
                >
                  Send
                </button>
                <button
                  className="btn mb-2 btn-outline-danger col-12"
                  onClick={() => {
                    this.setState({ isChatWindow: false });
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div
              className="m-md-5 m-2"
              style={{ position: "absolute", bottom: "0", right: "0" }}
            >
              {this.state.isNewMessage ? (
                <span className="my-2" style={{ float: "left" }}>
                  <div
                    className="bg-danger py-1"
                    style={{
                      borderRadius: "50%",
                      padding: "4px",
                      width: "12px",
                      height: "12px"
                    }}
                  ></div>
                </span>
              ) : null}

              <span
                className="btn btn-warning m-0"
                onClick={() => {
                  this.setState({ isChatWindow: true });
                }}
                style={{
                  fontSize: "2em",
                  borderRadius: "50%"
                }}
              >
                <span className="bx bx-chat p-0"></span>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
}
