import {
    createBrowserRouter, 
    createRoutesFromElements, 
    Route,
    RouterProvider, 
} from 'react-router-dom'

import * as Pages from './pages';

export default function App() {
    
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Pages.Home />} />
                <Route path="/iconscout" element={<Pages.Iconscout />} />
                <Route path="/seeklogo" element={<Pages.Seeklogo />} />
            </Route>   
        )
    )

    return (
        <RouterProvider router={router} />
    );
}
