import HomePage from 'components/home-page'
import PseudoCode from 'components/pseudocode'
import BubbleSort from 'components/pseudocode/bubble-sort'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'pseudocode', path: '/pseudocode', component: PseudoCode },
  { name: 'bubblesort', path: '/bubblesort', component: BubbleSort },
  { path: '*', component: HomePage }
]
