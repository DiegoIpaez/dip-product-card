# PRODUCT-CARD

Este es un parque de test de despliegue en NPM

### Diego Ivan Paez

## Ejemplo
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
