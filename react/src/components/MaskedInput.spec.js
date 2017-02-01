import { mount, shallow } from 'enzyme';
import MaskedInput from './MaskedInput';
import React from 'react';
import expect, { createSpy } from 'expect';

function setup() {
  return {
    wrapper: shallow(<MaskedInput
      type="string"
      value={0}
    />)
  };
}
describe.only('components', () => {
  describe('<MaskedInput />', () => {
    it('should render', () => {
      const { wrapper } = setup();
      expect(wrapper).toExist()
    })

    it('should call its validatorFn with its initial value', () => {
      const { wrapper } = setup();
      const validatorFn = createSpy();
      wrapper.setProps({
        validatorFn,
        value: 100
      });

      expect(validatorFn).toHaveBeenCalledWith(100);
    });

    it('should set its final value from the output of its validatorFn', () => {
      const { wrapper } = setup();
      wrapper.setProps({
        validatorFn: () => { return "hi" },
        value: 100
      });

      expect(wrapper.prop('value')).toBe("hi");
    });

    it('should default to validating with the identity function', () => {
      const { wrapper } = setup();
      wrapper.setProps({
        value: 100
      });

      expect(wrapper.prop('value')).toBe(100);
    })
  });
})
