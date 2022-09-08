import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import { useDebounce } from '~/Hooks';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { CloseButton, SearchIcon } from '~/assets/image';
import searchApi from '~/apiService/search';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [input, setInput] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(input, 500);

    const inpRef = useRef('');

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        
        const handleFetch = async () => {
            setLoading(true);
            const result = await searchApi(debounced);
            setSearchResult(result.data);
            setLoading(false);
        }
        handleFetch();

    }, [debounced]);

    const handleClose = () => {
        setInput('');
        setSearchResult([]);
        inpRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    return (
        <HeadlessTippy
            onClickOutside={handleHideResult}
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result, index) => {
                            return <AccountItem key={index} data={result} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={inpRef}
                    className={cx('input')}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {input && !loading && (
                    <button className={cx('clear-btn')}>
                        <CloseButton onClick={handleClose} />
                    </button>
                )}
                {
                    loading &&
                    <FontAwesomeIcon className={cx('loading')} icon={faCircleNotch} />
                }
                <span className={cx('separate')}></span>
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
