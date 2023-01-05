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
                <Route path="/" element={<Pages.Landing />} />
                <Route path="/blog" element={<Pages.Blog />} />
                <Route path="/data_analyst" element={<Pages.DataAnalyst />} />
                <Route path="/documents" element={<Pages.Documents />} />
                <Route path="/repertoire" element={<Pages.Repertoire />} />
                <Route path="/web_developer" element={<Pages.WebDeveloper />} />
            </Routes>
        </HashRouter>
    );
}