import React, { useEffect } from "react";
import Item from "./Item";
import "./style.scss";
import { gsap } from "gsap";

const listTeam = [{ "title": "Motion", "listItem": [{ "id": 0, "name": "Cienema" }, { "id": 1, "name": "TVC" }, { "id": 2, "name": "Viral" }, { "id": 3, "name": "Show" }, { "id": 4, "name": "Drama" }] }, { "title": "Design", "listItem": [{ "id": 0, "name": "Brnad Design" }, { "id": 1, "name": "Motion Design" }, { "id": 2, "name": "Social Design" }] }, { "title": "Sound", "listItem": [{ "id": 0, "name": "Looc.Music" }, { "id": 1, "name": "Producing Music" }, { "id": 2, "name": "Music Studio" }] }, { "title": "Academy", "listItem": [{ "id": 0, "name": "Looc.Music.Academy" }, { "id": 1, "name": "Academic Seminar" }] }, { "title": "Games", "listItem": [{ "id": 0, "name": "mini Game" }, { "id": 1, "name": "Virtual R&D" }] }, { "title": "Platform", "listItem": [{ "id": 0, "name": "Video Monster" }, { "id": 1, "name": "IMG Monster" }, { "id": 2, "name": "Motion Trend" }, { "id": 3, "name": "Samsung / SI" }] }, { "title": "Development", "listItem": [{ "id": 0, "name": "Severless" }, { "id": 1, "name": "Platform" }, { "id": 2, "name": "WEB" }] }, { "title": "Store", "listItem": [{ "id": 0, "name": "Space.Looc" }, { "id": 1, "name": "Maho Table" }, { "id": 2, "name": "Piggy Bank" }, { "id": 3, "name": "Huion" }] }];

const Teams: React.FC = () => {


  useEffect(() => {
    const TL = gsap.timeline();
    TL.from(".teams header", {
      y: -400,
      autoAlpha: 0,
      duration: 0.5
    }
    ).from(".list-team .item", {
      x: -500,
      y: -400,
      stagger: 0.1,
      autoAlpha: 0
    });
  }, []);


  return <div className="teams">
    <div className="teams-wrapper">
      <div>
        <header>
          <h2>TEAMS</h2>
        </header>
        <div className="list-wrapper">
          <div className="list-team">
            {listTeam?.map((item, index) => {
              return (
                <Item item={item} key={index} />
              );
            })}

          </div>
        </div>
      </div>
    </div>
    <div className="overlay"></div>
  </div>;
};

export default Teams;
