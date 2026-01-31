const Dashboard = () => {
    // This is a layout wrapper for dashboards if needed, but we already have specific dashboard files.
    // Let's redirect to user dashboard by default if hit /dashboard
    window.location.href = '/dashboard/user';
    return null;
}

export default Dashboard;
