import React, {Suspense, lazy } from 'react'


const LazyStartGame = lazy(() => import('../../pages/StartGamePage'));
const LazyGame = lazy(() => import('../../pages/GamePage'));
const LazyGameOver = lazy(() => import('../../pages/GameOverPage'));



export default [
  {
    path: '/',
    label: 'Start_game',
    exact: true,
    component: (
      <Suspense fallback={null}>

        <LazyStartGame/>
      </Suspense>
    ),
    private: false,
    restricted: false
  },

  {
    path: '/game',
    label: 'Game',
    exact: true,
    component: (
      <Suspense fallback={null}>
        <LazyGame/>
      </Suspense>
    ),
    private: false,
    restricted: false
  },
  {
    path: '/game_over',
    label: 'Game_over',
    exact: true,
    component: (
      <Suspense fallback={null}>
        <LazyGameOver/>
      </Suspense>
    ),
    private: false,
    restricted: false
  }
]