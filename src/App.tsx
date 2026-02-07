import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import UserDashboard from './pages/dashboards/UserDash';
import VendorDashboard from './pages/dashboards/VendorDash';
import OrganizerDashboard from './pages/dashboards/OrganizerDash';
import CorporateDashboard from './pages/dashboards/CorporateDash';
import Events from './pages/events/Events';
import EventCreation from './pages/events/EventCreation';
import VendorBrowse from './pages/vendors/VendorBrowse';
import Support from './pages/Support';
import Reports from './pages/reports/Reports';
import Notifications from './pages/notifications/Notifications';
import VendorDetail from './pages/vendors/VendorDetail';
import SpecificEventDash from './pages/events/SpecificEventDash';
import PNPLDashboard from './pages/fintech/PNPLDash';
import Payments from './pages/payments/Payments';
import Settings from './pages/settings/Settings';
import Messages from './pages/messages/Messages';
import ForgotPassword from './pages/auth/ForgotPassword';

function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/signup" element={<Signup />} />
                <Route path="/events" element={<Events />} />
                <Route path="/events/create" element={<EventCreation />} />
                <Route path="/events/:id" element={<SpecificEventDash />} />
                <Route path="/vendors" element={<VendorBrowse />} />
                <Route path="/vendors/:id" element={<VendorDetail />} />
                <Route path="/fintech/pnpl" element={<PNPLDashboard />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/support" element={<Support />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/messages" element={<Messages />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />

            {/* Role-based Dashboards */}
            <Route path="/dashboard/user" element={<UserDashboard />} />
            <Route path="/dashboard/vendor" element={<VendorDashboard />} />
            <Route path="/dashboard/organizer" element={<OrganizerDashboard />} />
            <Route path="/dashboard/corporate" element={<CorporateDashboard />} />
        </Routes>
    );
}

export default App;
