import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from "./Menu.module.scss";
import Button from '~/components/Button';

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

MenuItem.propTypes = {
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
