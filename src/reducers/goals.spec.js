import expect from 'expect';
import goals from './goals';
import { ADD_GOAL, UPDATE_GOAL } from 'src/constants/ActionTypes';

describe('reducers', () => {
  describe('goals', () => {

    it('should include a default state', () => {
      const initialState = {};
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
      const initialState = {
        '3': {
          id: 3,
          type: 'Travel Goal',
          total: 200,
          deadline: 2022,
          outlay: 29.88,
          lockedAttr: 'deadline'
        }
      }

      expect(goals(initialState, {
          type: `${UPDATE_GOAL}`,
          attrName: 'total',
          newVal: 14004,
          goalID: 3
        })
      ).toEqual({
        '3': {
          id: 3,
          type: 'Travel Goal',
          total: 14004,
          deadline: 2022,
          outlay: 29.88,
          lockedAttr: 'deadline'
        }
      })
    })
  })
})
