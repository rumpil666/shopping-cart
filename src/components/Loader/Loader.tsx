import { LoadingOutlined } from '@ant-design/icons';
import styles from './Loader.module.scss'

interface ILoader {
	fontSize: string;
}

export const Loader: React.FC<ILoader> = ({fontSize}) => {
	return <LoadingOutlined className={styles.loader} style={{fontSize: fontSize}}/>
}
