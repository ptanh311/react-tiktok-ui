import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
            <Router>
                {/* <div className="App">
                    <Link to="/">Home</Link>
                    <br />
                    <Link to="/following">Following</Link>
                    <br />
                    <Link to="/profile">Profile</Link>
                    <br />
                    <Link to="/upload">Upload</Link>
                </div> */}
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if(route.layout === null) {
                                Layout = Fragment;
                            } else {
                                Layout = route.layout === undefined ? DefaultLayout : route.layout;
                            }
                            return (
                                <Route key={index} path={route.path} 
                                    element={<Layout><route.component /></Layout>} 
                                />
                            )
                        })}
                    </Routes>
            </Router>
    );
}

export default App;
