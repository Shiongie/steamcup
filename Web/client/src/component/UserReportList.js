import React, { Component } from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getUserReports, deleteUserReports} from '../action/userReportActions';
import PropTypes from 'prop-types';

class UserReportList extends Component {
    componentDidMount() {
        this.props.getUserReports();
    }

    onDeleteClick = (id) => {
        this.props.deleteUserReports(id);
    }
    render() {
        const {userReports} = this.props.userReport;
        return (
            <Container>
                <h4>Report History</h4>
                <h6>Plate numbers</h6>
                 <ListGroup>
                     <TransitionGroup className="UserReportList">
                        {userReports.map(({id, plateno, location}) => (
                            <CSSTransition key = {id} timeout={500} classNames="fade">
                                <ListGroupItem className = "listItem">
                                    {plateno} -- {id}
                                    <Button
                                        className = "remove-btn"
                                        color = "danger"
                                        size = "sm"
                                        className = "del"
                                        onClick = {this.onDeleteClick.bind(this, id)}
                                    >&times;</Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                     </TransitionGroup>
                 </ListGroup>

            </Container>
        );
    }
}

UserReportList.propTypes = {
    getUserReports: PropTypes.func.isRequired, 
    deleteUserReports: PropTypes.func, 
    userReport: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    userReport: state.userReport
});
export default connect(mapStateToProps, {getUserReports, deleteUserReports})(UserReportList);