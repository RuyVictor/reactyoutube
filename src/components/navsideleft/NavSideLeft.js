import './NavSideLeft.css';
import {Button, Tooltip, Typography} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';

function NavSideLeft() {
  return (
    <ul>{listItems}</ul>
  );
}

const navItems = [
  {icon: <HomeIcon/>, label: 'Início'},
  {icon: <WhatshotIcon/>, label: 'Em alta'},
  {icon: <SubscriptionsIcon style={{fontSize: 20}}/>, label: 'Inscrições'},
  {icon: <VideoLibraryIcon/>, label: 'Biblioteca'},
  {icon: <HistoryIcon/>, label: 'Histórico'}
];
const listItems = navItems.map((item) =>
  <li>
    <Button
    className="nav-button"
    color="primary"
    disableRipple
    style={{ borderRadius: 0, width: 72, height: 72, textTransform: 'none' }}
    >
      <div>
        {item.icon}
        <Typography style={{fontSize: '0.7em'}} variant="caption" display="block" gutterBottom>
          {item.label}
        </Typography>
      </div>
    </Button>
  </li>
);

export default NavSideLeft;
