import PropTypes from 'prop-types';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./AccountItem.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <Link 
            to={`/@${data.nickname}`}
            className={cx('wrapper')}
        >
            <Image
                src={data.avatar}
                alt={data.full_name}
                className={cx('avatar')}
            />
            <div className={cx('user-info')}>
                <p className={cx('name')}>
                    <span className={cx('user-name')}>{data.nickname}</span>
                    {
                        data.tick &&
                        <FontAwesomeIcon icon={faCheckCircle} />
                    }
                </p>
                <span className={cx('full-name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default AccountItem;