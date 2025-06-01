import { useNavigate } from 'react-router-dom';
import './style.css'
import { MAIN_PATH, LOGIN_PATH } from '../../constant';

export default function Header() {
  const navigate = useNavigate();

  const onLogoClickHandler = () => {
    navigate(MAIN_PATH());
  }
  const onLoginClickHandler = () => {
    navigate(LOGIN_PATH());
  }

    return (
      <div id='header'>
        <div className='header-container'>
          <div className='header-left-box' onClick={onLogoClickHandler}>
            <div className='header-logo'>{'Food Diary'}</div>
          </div>
          <div className='header-right-box' onClick={onLoginClickHandler}>
            <div className='header-logo'>{'LOGIN'}</div>
          </div>
        </div>
      </div>
    )
  }