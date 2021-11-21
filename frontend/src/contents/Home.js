import React, { useState } from "react";
import Axios from "axios";
import "./home.css";
import $ from "jquery";

function Home() {
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState([]);

  function showPlayer() {
    Axios.get("http://127.0.0.1:3000/player/allplayer").then((response) => {
      console.log(response.data);
      setPlayer(response.data.data);
      $(".tablePlayer .trPlayer").hide();
      $(".tablePlayer .trPlayer").each(function (index) {
        $(this)
          .delay(index * 500)
          .show(500);
      });
    });
  }
  function showTeam() {
    Axios.get("http://127.0.0.1:3000/team/getallteam").then((response) => {
      // console.log(response.data);
      setTeam(response.data.data);
      $(".tableTeam .trTeam").hide();
      $(".tableTeam .trTeam").each(function (index) {
        $(this)
          .delay(index * 500)
          .show(500);
      });
    });
  }

  return (
    <div className="homepageContent">
      <h1>Hello, This is homepage.</h1>
      {/* <p>This is a content for the home page</p> */}
      <div className="playercontent">
        <h2>Player</h2>
        <button className="showDataPlayer" onClick={showPlayer}>
          show data
        </button>
        <table className="tablePlayer">
          <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Position</th>
            <th scope="col">Team</th>
            </tr>
          </thead>
          <tbody>
            {player.map((val) => {
              return (
                <tr className="trPlayer" key={val.player_id}>
                  <td>{val.player_name}</td>
                  <td>{val.player_age}</td>
                  <td>{val.player_position}</td>
                  <td>{val.team.team_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="teamContent">
        <h2>Team</h2>
        <button className="showDataTeam" onClick={showTeam}>
          show data
        </button>
        <table className="tableTeam">
          <thead>
            <tr>
            <th scope="col">Team</th>
            <th scope="col">League</th>
            </tr>
          </thead>
          <tbody>
            {team.map((val) => {
              return (
                <tr className="trTeam" key={val.team_id}>
                  <td>{val.team_name}</td>
                  <td>{val.team_league}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
