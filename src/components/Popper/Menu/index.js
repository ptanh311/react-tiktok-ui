import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import PropTypes from 'prop-types';

import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = (items) => {
        return items.map((item, index) => {
            const isParent = !!item.children;
            const handleParent = () => {
                if(isParent) {
                    setHistory([...history, item.children]);
                } else {
                    onChange(item);
                }
            }
            return (
                <MenuItem
                    onClick={handleParent}
                    item={item}
                    key={index}
                />
            );
        });
    }

    return (
        <Tippy
            delay={[0, 700]}
            offset={[12, 8]}
            interactive
            hideOnClick={hideOnClick}
            placement="bottom-end"
            onHide={() => {
                setHistory(prev => prev.slice(0, 1));
                return true;
            }}
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => {
                                        return prev.slice(0, prev.length - 1);
                                    });
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItem(current.data)}</div>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
