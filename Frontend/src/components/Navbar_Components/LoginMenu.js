import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';

function LoginMenu() {
    return (
        <div className='User-dropdown'>
            <DropdownButton id="dropdown-basic-button" variant="secondary" title=<i class="bi-person-lines-fill"> </i>>
                <Dropdown.Item id='dropdown-item'><Link to="./Profile/YourProfile">Your Profile</Link></Dropdown.Item>
                <Dropdown.Item id='dropdown-item'>Recent Activity</Dropdown.Item>
                <Dropdown.Item id='dropdown-item'>Save Properties</Dropdown.Item>
                <Dropdown.Item id='dropdown-item'>You properties</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default LoginMenu;