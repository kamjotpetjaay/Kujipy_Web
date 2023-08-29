import React from 'react';
import { shallow } from 'enzyme';
import ImageSlider, { Imagen } from './ImageSlider';

describe('<ImageSlider />', () => {
  let component;
  let testImagenes:Imagen[] = []

  beforeEach(() => {
    component = shallow(<ImageSlider galeriaImagenes={testImagenes}/>);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
