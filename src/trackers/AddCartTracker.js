import AffinityManager from '../services/AffinityManager'
import PRODUCT_CATEGORIES from '../constants/PRODUCT_CATEGORIES'

export default class AddCartTracker {
  constructor(affinityManager =  new AffinityManager()) {
    this.eventType = 'ADD_CART'
    this.affinityManager = affinityManager
    this.productCategory = utag_data.category_id

    const shouldTrack = PRODUCT_CATEGORIES.indexOf(this.productCategory) >= 0

    if (shouldTrack) {
      const addToCartButton = document.querySelector('.c-product-add-to-cart__button')

      addToCartButton.addEventListener('click', () => {
        this.affinityManager.countAffinity(this.productCategory, this.eventType)
      })
    }
  }
}