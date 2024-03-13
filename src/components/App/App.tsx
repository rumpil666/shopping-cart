import { BasketList } from '../BasketList/BasketList';
import { BasketOrder } from '../BasketOrder/BasketOrder';
import { fetchProducts } from '../../store/basketSlice';
import styles from './App.module.scss';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <main className={styles.main}>
      <BasketList />
      <BasketOrder />
    </main>
  );
};
