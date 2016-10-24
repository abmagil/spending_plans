import expect from 'expect';

import { ADD_GOAL, UPDATE_GOAL } from 'src/constants/ActionTypes';
import goals from 'src/reducers/goals';

describe('reducers', () => {
  describe('goals', () => {
    const initialState = {};

    it('should include a default state', () => {
      expect(goals(undefined, {})).toEqual(initialState);
    })

    it(`should handle ${ADD_GOAL} action for a goal`, () => {
      expect(goals({}, {
        type: `${ADD_GOAL}`, goal: { id: 1, type: 'Emergency Goal', total: 100, deadline: 1999, outlay: 15 }
      })).toEqual({
        "1": { id: 1, type: 'Emergency Goal', total: 100, deadline: 1999, outlay: 15}
      })
    })

    it('should handle UPDATE_GOAL action for a goal', () => {
      expect(true)
    })
  })
});
