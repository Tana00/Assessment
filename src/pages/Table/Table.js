import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Header from "../../components/Header/Header";
import TableContainer from "../../components/Table/Table";
import { TableData } from "../../DummyData";
import "./Table.scss";

const Table = () => {
  return (
    <div className="table_page">
      <Sidebar />
      <main>
        <Topbar />
        <div id="header">
          <Header />
        </div>
        <section id="table">
          <TableContainer headData={TableData.head} bodyData={TableData.body} />
        </section>
      </main>
    </div>
  );
};

export default Table;
