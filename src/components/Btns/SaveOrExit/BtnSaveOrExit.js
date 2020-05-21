import React from 'react';

const BtnSaveOrExit = ({closeNameBtn, closeAction, SaveNameBtn, SaveAction, style}) => {

    return (
        <div style={style}>
            <button type="button" className="btn btn-secondary" data-dismiss="modal"
                    onClick={closeAction}>{closeNameBtn}
            </button>
            <button type="button" className="btn btn-primary" onClick={SaveAction} style={{marginLeft: '5px'}}>{SaveNameBtn}</button>
        </div>
    );
};

export default BtnSaveOrExit;