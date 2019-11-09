import React, {Component} from 'react';
import { Button, Modal , ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addUserReports} from '../action/userReportActions';
import PropTypes from 'prop-types';

class UserReportModal extends Component {
    state = {
        modal: false,
        name: ''
    }    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const newUserReport = {
            plateno: this.state.plateno,
            location: this.state.location
        }
        this.props.addUserReports(newUserReport)

        this.toggle();
    }
    render() {
        return(
            <div>
                <Button onClick={this.toggle}><h1>Submit Report</h1></Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                 <ModalHeader toggle={this.toggle}>Report a Smoke Belcher</ModalHeader>
                 <ModalBody>
                     <Form onSubmit={this.onSubmit}>
                         <FormGroup>
                             <Label for="plateno">Plate Number</Label>
                             <Input type="text" 
                                name = "plateno" 
                                id = "plateno"
                                placeholder="Plate Number"
                                onChange = {this.onChange}/>
                         </FormGroup>
                         <FormGroup>
                             <Label for="location">Location</Label>
                             <Input type="text" 
                                name = "location" 
                                id = "location"
                                placeholder="Location"
                                onChange = {this.onChange}/>
                         </FormGroup>
                         <FormGroup>
                             <Button block
                                onSubmit = {this.onChange}>Submit Report</Button>
                         </FormGroup>
                     </Form>
                 </ModalBody>
            </Modal>
            </div>
        );
    }
}

UserReportModal.propTypes = {
    addUserReports: PropTypes.func.isRequired, 
}

const mapStateToProps = state => ({
    userReport: state.userReport
});

export default connect(mapStateToProps, {addUserReports}) (UserReportModal);