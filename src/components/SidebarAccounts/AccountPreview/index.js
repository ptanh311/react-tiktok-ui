import classNames from "classnames/bind";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Image from "~/components/Image";
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('preview')}>
            <div className={cx('avatar-follow')}>
                <div className={cx('avatar')}>
                    <Image src="" width="44px" height="44px" />
                </div>
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('account-info')}>
                <div className={cx('nickname')}>
                    <h4>namesandal</h4>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('check-icon')} />
                </div>
                <p className={cx('name')}>Name Sang</p>
            </div>
            <div className={cx('interactive-info')}>
                <p className={cx('followers')}>
                    <strong>5M</strong> Followers
                </p>
                <p className={cx('likes')}>
                    <strong>200M</strong> Likes
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;