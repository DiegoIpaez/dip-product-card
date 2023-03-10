import styles from '../styles/styles.module.css';
import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img || product?.img || noImage;
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt=""
      style={style}
    />
  );
};
