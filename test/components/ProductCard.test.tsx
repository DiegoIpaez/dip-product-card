import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { productOne } from '../data/products';
import { ProductCard } from '../../src/components';

describe('ProductCard', () => {
  test('should display the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={productOne}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );
    const tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('you should increment the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={productOne}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>+1</button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    act(() => (tree as any).children[2].props.onClick());
    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
