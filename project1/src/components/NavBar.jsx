import { AppBar,Toolbar,styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
    Background-color:#111111
`;

const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:#fff;
    text-decoration:none;
`;
const NavBar = () => {
    return(
        <Header position="static">
            <Toolbar>
                <Tabs to="/">Dasboard</Tabs>
                <Tabs to="/add">Add User</Tabs>
                <Tabs to="/all">View Users</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;