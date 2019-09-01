import HomePage from 'components/home-page'
import BubbleSort from 'components/bubble-sort'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'bubblesort', path: '/bubblesort', component: BubbleSort },
  { path: '*', component: HomePage }
]
