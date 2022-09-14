import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '../Popper';
import styles from './SidebarAccounts.module.scss';
import Image from '../Image';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    }

    return (
        <div>
            <HeadlessTippy
                interactive
                offset={[-20,0]}
                placement='bottom'
                delay={[700, 0]}
                render={renderPreview}
            >
                <div className={cx('account')}>
                    {/* This Image component custom a <img> element */}
                    <Image src="" width="32" height="32" />
                    <div className={cx('account-info')}>
                        <div className={cx('nickname')}>
                            <h4>namesandal</h4>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                        </div>
                        <p className={cx('name')}>Name Sang</p>
                    </div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default AccountItem;