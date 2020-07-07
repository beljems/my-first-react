import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Sidebar.scss';
import { ReactComponent as Logo } from './../logo.svg';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(async () => {
        async function getCategories() {
            let res = await axios({
                method: 'GET',
                url: 'https://api.chucknorris.io/jokes/categories'
            })

            setCategories(res.data);
        }

        getCategories();
    }, []);

    return (
        <aside className="sidebar">
            <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
                <Logo />
            </a>
            <ul>
                <li>
                    <Link to="/">Top</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/news">News</Link>
                    <ul>
                        {categories.map((cat) => (
                            <li>
                                <Link to="">
                                    {cat}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ul>
                        <li>
                            <Link to="/news/news-1">News 1</Link>
                        </li>
                        <li>
                            <Link to="/news/news-2">News 2</Link>
                        </li>
                        <li>
                            <Link to="/news/news-3">News 3</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;
