import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './BasketOrder.module.scss';

export const BasketOrder: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const products = useAppSelector(state => state.basket.products);
  
  useEffect(() =>{
    const sum = products.reduce((sum: number, i) => sum + i.price*i.quantity, 0)
    setTotalPrice(sum)
  }, [products])
  
  return (
    <div className={styles.basketOrder}>Итого {totalPrice} руб.</div>
  )
};