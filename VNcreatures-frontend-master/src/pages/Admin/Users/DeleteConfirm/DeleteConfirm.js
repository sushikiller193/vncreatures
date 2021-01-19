import React from "react";
import "./DeleteConfirm.css";
import Button from "../../../../components/UI/Button/Button";

const DeleteConfirm = (props) => {

  return (
    <div className="formDelete">
      <p style={{ color: "#3B568D", fontSize: "24px", fontWeight: "bold" }}>
        Delete User
      </p>
      <p>
        UserName: {props.deleteItem ? props.deleteItem.username : null}
      </p>
      <p>Email: {props.deleteItem ? props.deleteItem.email : null}</p>
      <div>
        <Button icon="far fa-edit" mode="delete" title="Xóa" onClickHandler={props.deleteConfirmHandler}/>
        <Button
          icon="far fa-trash-alt"
          mode="cancel"
          title="Hủy"
          onClickHandler={() => props.cancelDelete()}
        />
      </div>
    </div>
  );
};

export default DeleteConfirm;
