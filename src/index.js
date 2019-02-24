import PageViewTracker from './trackers/PageViewTracker'
import AddCartTracker from './trackers/AddCartTracker'
import AffinityOrderer from './AffinityOrderer'

(function initTrackers() {
  new PageViewTracker()
  new AddCartTracker()
  new AffinityOrderer()
})()
