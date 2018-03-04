import expect from 'expect';
import courseReducer from '../courseReducer';
import * as actions from '../../actions/courseActions';

// Test a sync action
describe('courseReducer', () => {
  it('should add course when passed CREATE_COURSE_SUCCESS', () => {
    // setup
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];

    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
    expect(newState[2].title).toEqual('C');
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', () => {
    // setup
    const initialState = [
      {id: 'A', title: 'A'},
      {id: 'B', title: 'B'}
    ];

    const course = {id: 'B', title: 'C'};
    const action = actions.updateCourseSuccess(course);

    // act
    const newState = courseReducer(initialState, action);
    const updateCourse = newState.find(a => a.id === course.id);
    const untouchedCourse = newState.find(a => a.id === 'A');

    // assert
    expect(newState.length).toEqual(2);
    expect(updateCourse.title).toEqual('C');
    expect(untouchedCourse.title).toEqual('A');
  });
});
