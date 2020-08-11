import React from 'react';

const MainHeader = (props) => (
        <div className="row">
            <div className="twelve columns" style={ {textAlign: 'center'} }>
                <h1>Registra {props.resourceName} en <strong>Tu Colección</strong></h1>
            </div>
        </div>
    );

export default MainHeader;
