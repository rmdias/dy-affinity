import AffinityManager from '../services/AffinityManager'
import PRODUCT_CATEGORIES from '../constants/PRODUCT_CATEGORIES'

export default class PageViewTracker {
  constructor(affinityManager =  new AffinityManager()) {
    this.eventType = 'PAGE_VIEW'
    this.affinityManager = affinityManager
    this.productCategory = utag_data.category_id
    
    const shouldTrack = PRODUCT_CATEGORIES.indexOf(this.productCategory) >= 0

    if (shouldTrack) {
      this.affinityManager.countAffinity(this.productCategory, this.eventType)
    }
  }
}