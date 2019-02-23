import LocalStorageManager from '../services/LocalStorageManager'
import PRODUCT_CATEGORIES from '../constants/PRODUCT_CATEGORIES'

export default class AddCartTracker {
  constructor(localStorageManager =  new LocalStorageManager()) {
    this.localStorageManager = localStorageManager
    this.productCategory = utag_data.category_id
    this.eventType = 'ADD_CART'

    const shouldTrack = PRODUCT_CATEGORIES.indexOf(this.productCategory) >= 0

    if (shouldTrack) {
      const addToCartButton = document.querySelector('.c-product-add-to-cart__button')

      addToCartButton.addEventListener('click', () => {
        this.track()
      })
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