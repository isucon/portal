import "./broadcast_view.scss";
import { ApiClient } from "../ApiClient";
import { BroadcastViewApp } from "../BroadcastViewApp";
import React from "react";
import ReactDOM from "react-dom";

(async function () {
  const client = new ApiClient();
  const session = await client.getCurrentSession();
  const elem = document.getElementById("app");
  ReactDOM.render(<BroadcastViewApp session={session} client={client} />, elem);
})();
