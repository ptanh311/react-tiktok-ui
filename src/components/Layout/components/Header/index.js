import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { faArrowRightToBracket, faCircleNotch, faCircleQuestion, faCloudUpload, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faLanguage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

import styles from "./Header.module.scss";
import { Logo, CloseButton, SearchIcon } from '~/assets/image';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faMessage, faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    children: {
                        title: 'English',
                        data: [
                            {
                                code: 'en',
                                title: 'English 1',
                            },
                            {
                                code: 'en',
                                title: 'English 2',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feeback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profiles',
        to: '/user',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
        title: 'Log out',
        to: '/logout',
        separate: true
    },
];

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = "PhamAnh";

    useEffect(()=> {
        setTimeout(()=> {
            setSearchResult([]);
        }, 1000);
    },[])

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Logo />
                </div>
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input className={cx('input')} placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear-btn')}>
                            <CloseButton />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />
                        <span className={cx('separate')}></span>
                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    <Button to="/upload" outlinetext leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        <span>Upload</span>
                    </Button>
                    {currentUser ? (
                        <React.Fragment>
                            <Tippy delay={[0, 100]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Button primary className={cx('custom-login')}>
                                Log in
                            </Button>
                        </React.Fragment>
                    )}
                    <Menu onChange={handleMenuChange} items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                className={cx('user-img')}
                                alt={currentUser}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7065656918387195931~c5_720x720.jpeg?x-expires=1662602400&x-signature=coYAdP4UMaSuInOgG9QnOT2lSmQ%3D"
                            />
                        ) : (
                            <div className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;