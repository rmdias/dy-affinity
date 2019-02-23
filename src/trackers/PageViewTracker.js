import LocalStorageManager from '../services/LocalStorageManager'
import PRODUCT_CATEGORIES from '../constants/PRODUCT_CATEGORIES'

export default class PageViewTracker {
  constructor(localStorageManager =  new LocalStorageManager()) {
    this.localStorageManager = localStorageManager
    this.productCategory = utag_data.category_id
    this.eventType = 'PAGE_VIEW'

    const shouldTrack = PRODUCT_CATEGORIES.indexOf(this.productCategory) >= 0

    if (shouldTrack) {
      this.track()
    }
  }

  track() {
    const productData = {
      eventType: this.eventType,
      name: utag_data.product_name[0],
      url: location.href
    }

    this.localStorageManager.countAffinity(productData, this.productCategory, this.eventType)
  }
}