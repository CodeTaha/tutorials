import expect from 'expect';
import {formatAuthorsForDropdown} from "../selectors";

describe('Author Selectors', () => {
  describe('formatAuthorsForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'jk-r', firstName: 'J.K', lastName: 'Rowling'},
        {id: 'p-c', firstName: 'Paulo', lastName: 'Coelho'}
      ];

      const expected = [
        {value: 'jk-r', text: 'J.K Rowling'},
        {value: 'p-c', text: 'Paulo Coelho'}
      ];

      expect(formatAuthorsForDropdown(authors)).toEqual(expected);
    });
  });
});
