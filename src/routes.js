export default [
  {
    path: '/',
    label: 'Start_game',
    exact: true,
    component: import('./pages/GamePage'),
    private: false,
    restricted: false
  },
  {
    path: '/game',
    label: 'Game',
    exact: true,
    component: import('./pages/GamePage'),
    private: false,
    restricted: false
  },
  {
    path: '/game_over',
    label: 'Game_over',
    exact: true,
    component: import('./pages/GameOverPage'),
    private: false,
    restricted: false
  }
]