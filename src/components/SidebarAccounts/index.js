import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from './SidebarAccounts.module.scss';
import AccountItem from "./AccountItem";

const cx = classNames.bind(styles);

function SidebarAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <div className={cx('show-more')}>See more</div>
        </div>
    );
}

SidebarAccounts.propTypes = {
    label: PropTypes.string.isRequired
}

export default SidebarAccounts;