import PropTypes from 'prop-types';

function Menu({ children }) {
    return (
        <nav>
            {children}
        </nav>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired
}

export { default as MenuItem } from './MenuItem';
export default Menu;