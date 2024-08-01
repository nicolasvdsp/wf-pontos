import { DotLottiePlayer } from 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';

import './styles/style.css'
import './scss/app.scss';

import feature from './features/animations';
import logo from './features/logo';

logo.animateLogo();
logo.testLottie();
feature();