import React from "react";

import "./styles.css";
import DeleteIcon from '@material-ui/icons/Delete';


function DevItem({ dev }) {
  return (
    <li key={dev._id} className="dev-item">
      <DeleteIcon className="delete-user-icon"/>
      <header>
        <img src={dev.avatar_url} alt={dev.name} />
        <div className="user-info">
          <strong>{dev.name}</strong>
          <span>{dev.techs.join(", ")}</span>
        </div>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`} target="_blank">
        Acessar perfil GitHub
      </a>
    </li>
  );
}

export default DevItem;
