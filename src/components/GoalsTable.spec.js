import { mount, shallow } from 'enzyme';
import GoalsTable from './GoalsTable';
import React from 'react';
import expect from 'expect';

function setup() {
  const orderedGoals= [];
  const wrapper = shallow(<GoalsTable orderedGoals={orderedGoals} />);

  return {
    wrapper
  }
}

describe('components', () => {
  describe('<GoalsTable />', () => {
    it('should render a table', () => {
      const { wrapper } = setup();

      expect(wrapper.find('table').length).toBe(1);
    });
  });
})
