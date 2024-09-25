import React from 'react';
import { shallow } from 'enzyme';
import Slider from './Slider';


describe('<Slider />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Slider images={[]}/>);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
