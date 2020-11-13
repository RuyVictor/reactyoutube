import './NavigationBar.css';
import {AppBar, Button, TextField, IconButton, InputAdornment, Tooltip} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import KeyboardIcon from '@material-ui/icons/Keyboard';

function NavigationBar() {
  return (
    <AppBar position="fixed" elevation={0}>
        <header className="App-header">
          <div style={{display: 'flex', alignItems: 'center'}}>
            <IconButton style={{marginLeft: 4, marginRight: 15, width: 40, height: 40}} color="primary" aria-label="add to shopping cart">
              <MenuIcon/>
            </IconButton>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header-search">
            <TextField
            className="nav-textfield"
            placeholder="Pesquisar"
            variant="outlined"
            InputProps={{
              style: {
                borderRadius: '2px 0px 0px 2px', padding: 0, height: 30
              },
              endAdornment: (
              <InputAdornment position="end">
                <IconButton disableRipple style={{ backgroundColor: 'transparent' }}>
                  <KeyboardIcon/>
                </IconButton>
              </InputAdornment>
              )
            }}
            />
            <Button
            variant="outlined"
            color="primary"
            disableRipple
            style={{ borderRadius: '0px 2px 2px 0px', padding: 0, height: 30 }}
            className='nav-button-search'
            >
              <SearchIcon/>
            </Button>
          </div>
          <div className="header-icon-buttons">

            <div className="icon-button-search">
            <Tooltip title="Pesquisar">
              <IconButton style={{width: 40, height: 40}}  color="primary" aria-label="add to shopping cart">
                <SearchIcon/>
              </IconButton>
            </Tooltip>
            </div>

            <Tooltip title="Criar">
              <IconButton style={{width: 40, height: 40}} color="primary" aria-label="add to shopping cart">
                <VideoCallIcon/>
              </IconButton>
            </Tooltip>

            <Tooltip title="Aplicativos do YouTube">
              <IconButton style={{width: 40, height: 40}} color="primary" aria-label="add to shopping cart">
                <AppsIcon/>
              </IconButton>
            </Tooltip>

            <Tooltip title="Configurações">
              <IconButton style={{width: 40, height: 40}} color="primary" aria-label="add to shopping cart">
                <MoreVertIcon/>
              </IconButton>
            </Tooltip>

            <Button
            variant="outlined"
            color="secondary"
            className='nav-button-login'
            style={{ borderRadius: 3, whiteSpace: 'nowrap', padding: 12, height: 38}}
            startIcon={<AccountCircleIcon style={{fontSize: '30px'}}/>}
            >
              FAZER LOGIN
            </Button>
          </div>
        </header>
    </AppBar>
  );
}

const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png';

export default NavigationBar;
