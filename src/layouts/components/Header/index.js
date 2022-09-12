import React from "react";
import classNames from "classnames/bind";
import { faArrowRightToBracket, faCircleQuestion, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

import styles from "./Header.module.scss";
import { Logo, Messages, Inbox } from '~/assets/image';
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import Image from "~/components/Image";
import Search from "../Search";
import config from "~/config";

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
                }
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
    const currentUser = "PhamAnh";

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <Logo />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx('action')}>
                    <Button to="/upload" outlinetext leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        <span>Upload</span>
                    </Button>
                    {currentUser ? (
                        <React.Fragment>
                            <Tippy delay={[0, 100]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <Messages />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn', 'notify')}>
                                    <Inbox />
                                    <span className={cx('inbox-notify')}>12</span>
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
                            <Image
                                className={cx('user-img')}
                                alt={currentUser}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7065656918387195931~c5_720x720.jpeg?x-expires=1662602400&x-signature=coYAdP4UMaSuInOgG9QnOT2lSmQ%3D"
                                fallback="https://article.innovadatabase.com/articleimgs/article_images/637112270486526354N-g1003e.jpeg"
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