import { Routes, Route, Navigate } from 'react-router-dom';
import { bem } from '../utils/ComponentUtils';
import PageHome from './pages/Home';
import PageNotFound from './pages/NotFound';
import './App.scss';
const cl = bem('app');

function App() {
    const NOT_FOUND_PATH = '/not-found';
    return (
        <div
            id="app"
            className={cl()}
            role="presentation"
        >
            <Routes>
                <Route
                    path="/"
                    element={<PageHome />}
                />
                <Route
                    path={NOT_FOUND_PATH}
                    element={<PageNotFound />}
                />
                <Route
                    path="*"
                    element={
                        <Navigate
                            to={NOT_FOUND_PATH}
                            replace
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
