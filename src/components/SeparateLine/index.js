import classNames from 'classnames/bind';
import styles from './SeparateLine.module.scss';

const cx = classNames.bind(styles);

function SeparateLine({ height = '1px', verticalPadding = '8px', color = '#1618231f', twoSideSpace = '8px' }) {
    return (
        <div
            className={cx('separate-line')}
            style={{
                left: twoSideSpace,
                right: twoSideSpace,
                height: height,
                backgroundColor: color,
                margin: `${verticalPadding} 0`,
            }}
        ></div>
    );
}

export default SeparateLine;