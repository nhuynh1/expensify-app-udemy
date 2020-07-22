import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

export default class RemoveModal extends React.Component {
    render() {
        return (
            <Modal
                isOpen={this.props.requestToRemove}
                contentLabel="Are you sure you want to remove the expense?"
                onRequestClose={this.props.onCancel}
                closeTimeoutMS={200}
                className="modal"
            >
                <h2 className="modal__title">Are you sure you want to remove the expense?</h2>
                <div className="modal__actions">
                    <button
                        type="button"
                        className="button"
                        onClick={this.props.onDelete} >
                        Delete
                    </button>
                    <button
                        className="button button--secondary"
                        type="button"
                        onClick={this.props.onCancel} >
                        Cancel
                    </button>
                </div>
            </Modal>
        );
    }
}
