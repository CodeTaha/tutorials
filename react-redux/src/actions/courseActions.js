/**
 * Created by taha on 9/10/17.
 */
import * as types from './actionTypes';
export function createCourse(course) {
  return {type: types.CREATE_COURSE, course};
}
