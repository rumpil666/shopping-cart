import styles from './BasketList.module.scss';
import { ListItem } from '../ListItem/ListItem';
import { useAppSelector } from '../../store/hooks';
import { Loader } from '../Loader/Loader';


export const BasketList: React.FC = () => {
  const products = useAppSelector(state => state.basket.products);
  const { error, loading } = useAppSelector(state => state.basket);

  return (
    <>

      <ul className={styles.basketList}>
        {loading === true
          ? <Loader 
            fontSize='100px'
          />
          : products.map((product) => (
            <ListItem
              key={product.id}
              {...product}
            />
          ))
        }
      </ul>
    </>
  )
};