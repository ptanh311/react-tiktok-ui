import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';
import { NoImage } from "~/assets/image";

const cx = classNames.bind(styles);

function Image({ src, className, fallback: customFallback = NoImage, ...props}, ref){
    const [fallBack, setFallBack] = useState('');

    const handleImgError = () => {
        setFallBack(customFallback);
    }
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img 
            className={cx('wrapper', className)}
            ref={ref}
            {...props}
            src={fallBack || src}
            onError={handleImgError}
        />
    );
}

export default forwardRef(Image);