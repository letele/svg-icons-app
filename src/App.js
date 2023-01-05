import {
    HashRouter,
    Route,
    Routes
} from 'react-router-dom'

import * as Pages from './pages';

export default function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/iconscout" element={<Pages.Iconscout />} />
                <Route path="/seeklogo" element={<Pages.Seeklogo />} />
            </Routes>
        </HashRouter>
    );
}
