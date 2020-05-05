import Game from './Game';
import Home from './Home';
const routes = [
    {
        id: 1,
        path: '/',
        exact: true,
        component: Home
    },
    
    {
        id: 2,
        path: '/game',
        exact: true,
        component: Game
    }
];

export default routes;