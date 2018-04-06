import Dashboard from 'views/Dashboard/Dashboard';
import Login from 'views/Login/Login'
import Signup from 'views/Signup/Signup'

const appRoutes = [
    { path: "/login", name: "Login", icon: "pe-7s-graph", component: Login },
    { path: "/signup", name: "Signup", icon: "pe-7s-graph", component: Signup },
    { path: "/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { redirect: true, path:"/", to:"/login", name: "Login" }
];

export default appRoutes;
