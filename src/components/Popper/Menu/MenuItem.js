import classNames from 'classnames/bind';
import styles from "./Menu.module.scss";
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ item, onClick }) {
    return (
        <Button
            className={cx('menu-item', { separate: item.separate })}
            leftIcon={item.icon}
            to={item.to}
            onClick={onClick}
        >
            {item.title}
        </Button>
    );
}

export default MenuItem;
