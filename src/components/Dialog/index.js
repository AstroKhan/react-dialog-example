import React, { useReducer, useRef, useEffect } from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import { normalizeDialog } from "./helpers";
import data from "../../data";
import reducer from "./reducer";
import "./styles.css";

const Dialog = ({ newMessage }) => {

  const dialogRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    messages: data,  
  });

  useEffect(() => {
      if (newMessage) {
          dispatch({
              type: "add-message",
              payload: newMessage,
          });

          setTimeout(() => {
              dispatch({
                  type: "update-status",
                  payload: {
                      id: newMessage.id,
                      status: "readed",
                  },
              });
          }, 1000);
      }
  }, [newMessage]);

  useEffect(() => {
      dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
  }, [state.messages.length]);

  const onRemove = (id) => {
      dispatch({
          type: "remove-message",
          payload: id,
      });
  };

  const normalizedDialog = normalizeDialog(state.messages);

  return (
    <div className="dialog">
      <div className="overflow" ref={dialogRef}>
        {normalizedDialog.map((item) => (
          <Item {...item} key={item.id} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

Dialog.propTypes = {
    newMessage: PropTypes.shape({
        id: PropTypes.number,
    }),
};

export default Dialog;