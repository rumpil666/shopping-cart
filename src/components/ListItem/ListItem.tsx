import styles from './ListItem.module.scss';
import { Button } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { countPlus, countMinus, removeProduct } from '../../store/basketSlice';
import { useAppDispatch } from '../../store/hooks';

export interface IProduct {
  id: number
  title: string
  price: number
  quantity: number
  thumbnail: string
}

export const ListItem: React.FC<IProduct> = ({ id, thumbnail, title, quantity, price }) => {
  const dispatch = useAppDispatch();

  return (
    <li key={id} className={styles.listItem}>
      <img className={styles.listItem__image} src={thumbnail} alt={title} />
      <div className={styles.listItem__info}>
        <span className={styles.listItem__title}>{title}</span>
        <span className={styles.listItem__subtitle}>{title}</span>
      </div>
      <div className={styles.listItem__count}>
        <Button onClick={() => dispatch(countMinus(id))} disabled={quantity === 1 ? true : false} className={styles.listItem__button} type="default" shape="default" icon={<MinusOutlined />} />
        <span className={styles.listItem__quantity}>{quantity}</span>
        <Button onClick={() => dispatch(countPlus(id))} disabled={quantity === 10 ? true : false} className={styles.listItem__button} type="default" shape="default" icon={<PlusOutlined />} />
      </div>
      <div className={styles.listItem__priceContainer}>
        <span className={styles.listItem__price}>{price} руб.</span>
        <Button onClick={() => dispatch(removeProduct(id))} className={styles.listItem__button} type="default" shape="default" icon={<DeleteOutlined className={styles.listItem__icon} />} />
      </div>
    </li>
  )
};