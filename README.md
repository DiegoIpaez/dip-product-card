# PRODUCT-CARD

Is a package that provides the Product Card component. This project is nothing more than a practice load to NPM

## Example
```
import { ProductCard } from 'dip-product-cards

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
```
