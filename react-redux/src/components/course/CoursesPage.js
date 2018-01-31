/**
 * Created by taha on 9/10/17.
 */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from "./CourseList";

class CoursesPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

/*const connectedStateAndProps = connect(mapStateToProps, mapsDispatchToProps);
export default connectedStateAndProps(CoursesPage);*/
// This can be written as

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
