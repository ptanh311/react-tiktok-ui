import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fbc76ba07c81b5186bffb82315735b70~c5_300x300.webp?x-expires=1662285600&x-signature=ymiLQJJzRW5AUR%2BkORuogkyZRvA%3D"
                alt="Hoa"
                className={cx('avatar')}
            />
            <div className={cx('user-info')}>
                <p className={cx('name')}>
                    <span>Nguyen Van Hoa</span>
                    <FontAwesomeIcon icon={faCheckCircle} />
                </p>
                <span className={cx('user-name')}>NguyenVanHoa</span>
            </div>
        </div>
    );
}

export default AccountItem;