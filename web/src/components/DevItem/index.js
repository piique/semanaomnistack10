import React, { useState } from "react";

import "./styles.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { Tooltip, IconButton } from "@material-ui/core";
import AlertDialog from "../../components/AlertDialog";

function DevItem({ dev, onDelete }) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
    console.log(dev);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleConfirm = () => {
    setOpen(false);
    onDelete({ id: dev._id });
  };

  return (
    <li key={dev._id} className="dev-item">
      <AlertDialog
        open={open}
        handleClose={handleClose}
        handleConfirm={handleConfirm}
        question="Deseja excluir dev?"
        message="Exclusão não poderá ser revertida"
      />
      <Tooltip title="Deletar" className="delete-user-icon">
        <IconButton onClick={handleClickOpen} open={open}>
          <DeleteIcon />
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
