import expect from 'expect';
import * as courseActions from '../courseActions';
import * as types from '../actionTypes';

// Test a sync action
describe('CourseActions', () => {
  it('should create a CREATE_SUCCESS action', () => {
    // setup
    const course = {id: 'clean-code', title: 'Clean code'};
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course: course
    };

    // act
    const action = courseActions.createCourseSuccess(course);

    // assert
    expect(action).toEqual(expectedAction);
  });
});
