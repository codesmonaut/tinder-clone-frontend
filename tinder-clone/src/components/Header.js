import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import HeaderLogo from '../img/header-logo.png';
import ForumIcon from '@material-ui/icons/Forum';
import './Header.css';

const Header = () => {

    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header-icon"></PersonIcon>
            </IconButton>

            <img className="header-logo" src={HeaderLogo} alt="" />

            <IconButton>
                <ForumIcon fontSize="large" className="header-icon"></ForumIcon>
            </IconButton>
        </div>
    )
}

export default Header;