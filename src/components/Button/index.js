import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    outlinetext = false,
    size = 'medium',
    disabled = false,
    round = false,
    rightIcon,
    leftIcon,
    className,
    onClick,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const _props = { onClick, ...passProps };
    const classes = cx('wrapper', `${size}`, {
        [className]: className,
        primary,
        outline,
        outlinetext,
        round,
        disabled,
    });

    //Handle Component type to render
    if (to) {
        Comp = Link;
        _props.to = to;
    } else if (href) {
        Comp = 'a';
        _props.href = href;
    }

    // Remove events listener when button is disabled
    if (disabled) {
        Object.keys(_props).forEach((key) => {
            if (key.startsWith('on') && typeof _props[key] === 'function') {
                delete _props[key];
            }
        });
    }

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <div className={cx('icon')}>{leftIcon}</div>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <div className={cx('icon')}>{rightIcon}</div>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    outlinetext: PropTypes.bool,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    round: PropTypes.bool,
    rightIcon: PropTypes.node,
    leftIcon: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};

export default Button;