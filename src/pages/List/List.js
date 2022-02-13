import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import { cardData } from "../../DummyData";
import "./List.scss";

const List = () => {
  return (
    <div className="list_page">
      <Sidebar />
      <main>
        <Topbar />
        <div id="header">
          <Header />
        </div>

        <section className="grid">
          {cardData.map(
            ({ id, name, title, date, content, assignee, color }) => (
              <Card
                key={id}
                name={name}
                title={title}
                date={date}
                content={content}
                assignee={assignee}
                color={color}
              />
            )
          )}
        </section>
      </main>
    </div>
  );
};

export default List;
