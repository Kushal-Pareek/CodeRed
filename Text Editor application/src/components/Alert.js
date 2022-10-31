import React from 'react';

function Alert(props) {
  return (
     props.alert && <div className="alert alert-primary alert-dismissible">
      <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
      <strong>{props.alert.type}</strong>: {props.alert.msg}
    </div>
    
  );
}

export default Alert;
