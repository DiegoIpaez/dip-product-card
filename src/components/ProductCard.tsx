import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import React, { createContext, CSSProperties } from 'react';
import {
  ProductCardHandlers,
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
} from '../interfaces/interfaces';
export interface Props {
  children?: (args: ProductCardHandlers) => JSX.Element;
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    maxCount,
    isMaxCountReached,
    increaseBy,
    reset,
  } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        maxCount,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            isMaxCountReached,
            maxCount,
            product,
            increaseBy,
            reset,
          })}
      </div>
    </Provider>
  );
};
