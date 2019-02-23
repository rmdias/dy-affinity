import PageViewTracker from './trackers/PageViewTracker'
import AddCartTracker from './trackers/AddCartTracker'

(function initTrackers() {
  new PageViewTracker()
  new AddCartTracker()
})()
