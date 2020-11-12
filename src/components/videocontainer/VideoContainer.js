import './VideoContainer.css';
import {Button, TextField, IconButton, InputAdornment, Typography, Divider} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function VideoContainer() {
  let rows = []
    for(let i=0; i<8; i++){
      rows.push(
        <div className="video-card">
          <img src={thumbnail_main} className="video-thumbnail" alt="logo" />
          <Typography variant="button" display="block" gutterBottom>
            Titulo
          </Typography>
          <Typography style={{fontSize: 12}} variant="caption" display="block" gutterBottom>
            Descrição
          </Typography>
        </div>
      )
    }

    let covid = []
      for(let i=0; i<6; i++){
        covid.push(
          <div className="video-card">
            <img src={thumbnail_covid} className="video-thumbnail" alt="logo" />
            <Typography variant="button" display="block" gutterBottom>
              Titulo
            </Typography>
            <Typography style={{fontSize: 12}} variant="caption" display="block" gutterBottom>
              Descrição
            </Typography>
          </div>
        )
      }
  return (
    <div style={{padding: 25}}>
      <div className="ads-container">
        <img src={ads} className="ads-thumbnail" alt="ads" />
        <img src={adsSales} className="ads-sales-thumbnail" alt="ads" />
      </div>
      <div className="video-container">
        {rows}
      </div>
      <Divider style={{padding: 2, marginTop: 20}}/>
      <Typography style={{padding: 25}} variant="h6" gutterBottom>
        Notícias sobre COVID-19
      </Typography>
      <div className="video-container">
        {covid}
      </div>
    </div>
  );
}
const ads = 'https://revendedor.club/wp-content/uploads/2019/10/Cartao-de-credito-Caixa3.png';
const adsSales = 'https://i1.wp.com/www.dci.com.br/wp-content/uploads/2020/10/shutterstock_1704856861-2-min.jpg?fit=1280%2C720&ssl=1';
const thumbnail_main = 'https://i.ytimg.com/vi/658c0gylxQo/maxresdefault.jpg';
const thumbnail_covid = 'https://www.thelocalvoice.net/oxford/wp-content/uploads/2020/08/MississippiCoronavirus.jpg';

export default VideoContainer;
