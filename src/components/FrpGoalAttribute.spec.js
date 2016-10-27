import { mount, shallow } from 'enzyme';
import FrpGoalAttribute from './FrpGoalAttribute';
import React from 'react';
import expect from 'expect';

function setup() {
  const props = {
    attrName: 'deadline',
    lockedAttr: 'deadline',
    value: 2000,
    onGoalAttrChange: () => {}
  };
  const wrapper = shallow(<FrpGoalAttribute {...props} />);

  return {
    wrapper
  }
}

describe('components', () => {
  describe('<FrpGoalAttribute />', () => {
    it('renders a <p> when attribute is locked', () => {
      const { wrapper } = setup();

      expect(wrapper.find('p').length).toBe(1);
      expect(wrapper.find('p').text()).toBe('2000');
    })

    it('renders an input when attribute is not locked', () => {
      const { wrapper } = setup();
      wrapper.setProps({
        lockedAttr: 'other'
      })

      expect(wrapper.find('input').length).toBe(1);
      expect(wrapper.find('input').prop('value')).toBe(2000);
    })
  })
})
