import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: "2",
  title: "Coffe Mug - Card",
  // img: "./coffee-mug.png",
}

const App = () => {
  return (
    <ProductCard
      key={product.id}
      product={product}
      initialValues={{ count: 10, maxCount: 15 }}
    >
      {({ count, isMaxCountReached, maxCount, increaseBy, reset }) => (
        <>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
