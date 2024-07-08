import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const Header = () => {
    const { page1RequestMade, page2RequestMade, page3RequestMade } = useSelector((state) => state.request);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        if (path === '/page2' && !page1RequestMade) {
            alert('Сначала отправьте запрос на первой странице.');
        } else if (path === '/page3' && !page2RequestMade) {
            alert('Сначала отправьте запрос на второй странице.');
        } else {
            navigate(path);
        }
    };

    return (
        <nav>
            <button onClick={() => handleNavigation('/page1')}>Page 1</button>
            <button onClick={() => handleNavigation('/page2')}>Page 2</button>
            <button onClick={() => handleNavigation('/page3')}>Page 3</button>
        </nav>
    );
};

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Routes>
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
