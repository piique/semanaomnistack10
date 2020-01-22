import React from "react";

import "./styles.css";
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip, IconButton } from "@material-ui/core";
import AlertDialog from "../../components/AlertDialog"


function DevItem({ dev }) {

  const functionToTrue = (e) => {
    console.log(e);
  }

  const buttonClick = (e) => {
    AlertDialog.handleClickOpen(e);
    console.log(dev);
  }

  return (
    <li key={dev._id} className="dev-item">
      <AlertDialog question="Deseja excluir dev?" message="Exclusão não poderá ser revertida" functionToTrue={functionToTrue} />
      <Tooltip title="Deletar" className="delete-user-icon">
        <IconButton onClick={ buttonClick }>
          <DeleteIcon/>
        </IconButton>
      </Tooltip>
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
