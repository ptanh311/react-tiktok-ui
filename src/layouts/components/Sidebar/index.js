import classNames from "classnames/bind";
import config from "~/config";

import Menu, { MenuItem } from "./Menu";
import styles from "./Sidebar.module.scss";
import { Home, HomeActive, Following, FollowingActive, Live, LiveActive } from "~/assets/image";
import SidebarAccounts from "~/components/SidebarAccounts";
import SeparateLine from "~/components/SeparateLine";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu className={cx('sidebar-menu')}>
                <MenuItem title="For You" to={config.routes.home} icon={<Home />} iconActive={<HomeActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<Following />}
                    iconActive={<FollowingActive />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<Live />} iconActive={<LiveActive />} />
                <SeparateLine />
                <SidebarAccounts label="Suggested Accounts" />
                <SeparateLine />
                <SidebarAccounts label="Following Accounts" />
            </Menu>
        </aside>
    );
}

export default Sidebar;