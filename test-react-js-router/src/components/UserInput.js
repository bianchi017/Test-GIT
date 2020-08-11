import React from 'react';

class UserInput extends React.PureComponent {
    constructor(props) {
        super(props);
        this.inputID = React.createRef();
    }

    onFetchResource = () => {
      this.props.onFetchResource(this.inputID.current.value);
      this.resetInputs();
    };
    resetInputs = () => {
        this.inputID.current.value = '';
    };

    render = () => (
        <div className="six columns">
            <div className="row">
                <div className="twelve columns">
                    <label>ID de {this.props.resourceName}</label>
                    <input className="u-full-width" placeholder="Ingresa ID..." ref={this.inputID} type="text" />
                </div>
            </div>
            <div className="row">
                <div className="twelve columns">
                    <button onClick={this.onFetchResource} className="button-primary u-full-width" id="buttonAddBook">Descargar {this.props.resourceName}</button>
                </div>
            </div>
        </div>
            );
}
export default UserInput;
