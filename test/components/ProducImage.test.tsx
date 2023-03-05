import React from 'react';
import renderer from 'react-test-renderer';
import { productTwo } from '../data/products';
import { ProductCard, ProductImage } from '../../src/components';

describe('ProductImage', () => {
  test('should display the component correctly with the custom title', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://cdn-icons-png.flaticon.com/512/1088/1088537.png" />
    );
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display the components correctly with the name of the productOne', () => {
    const wrapper = renderer.create(
      <ProductCard product={productTwo}>{() => <ProductImage />}</ProductCard>
    );
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
