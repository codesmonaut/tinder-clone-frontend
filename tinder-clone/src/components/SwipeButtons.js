import './SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

const SwipeButtons = () => {

    return (
        <div className="swipe-buttons">
            <IconButton className="swipe-button-repeat">
                <ReplayIcon fontSize="large"></ReplayIcon>
            </IconButton>
            <IconButton className="swipe-button-left">
                <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className="swipe-button-star">
                <StarRateIcon fontSize="large"></StarRateIcon>
            </IconButton>
            <IconButton className="swipe-button-right">
                <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className="swipe-button-lightning">
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons;