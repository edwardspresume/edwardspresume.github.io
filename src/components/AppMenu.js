
import { FaTimes, FaMinus } from 'react-icons/fa';

const AppMenu = () => {

    return (

        <nav id="app-menu">

            <span id="logo">S-Bot</span>

            <div id="menu-tab-div">

                <button className="active menu-tab">Tasks</button>
                <button className="menu-tab">Monitor</button>
                <button className="menu-tab">Proxies</button>
                <button className="menu-tab">Billing</button>
                <button className="menu-tab">Profile</button>
                <button className="menu-tab">Setting</button>

            </div>

            <div id="minimize-close-div">

                <button id="minimize-app-btn">
                    <FaMinus />
                </button>

                <button id="close-app-btn">
                    <FaTimes />
                </button>

            </div>

        </nav>
    )
}

export default AppMenu
