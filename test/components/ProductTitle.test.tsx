import React from 'react';
import renderer from 'react-test-renderer';
import { productOne } from '../data/products';
import { ProductCard, ProductTitle } from '../../src/components';

describe('ProductTitle', () => {
  test('should display the component correctly with the custom title', () => {
    const wrapper = renderer.create(<ProductTitle title="test" />);
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should display the components correctly with the name of the productOne', () => {
    const wrapper = renderer.create(
      <ProductCard product={productOne}>{() => <ProductTitle />}</ProductCard>
    );
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
