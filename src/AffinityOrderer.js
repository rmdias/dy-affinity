import AffinityManager from './services/AffinityManager'

export default class AffinityOrderer {
  constructor(affinityManager =  new AffinityManager()) {
    this.affinityManager = affinityManager

    const shouldTrack = utag_data.page_id === "new-arrivals"

    if (shouldTrack && JSON.stringify(this.affinityManager.storage) !== '{}') {
      const categoriesWrapper = document.querySelector('.c-category--main-view-container .dom-landing-page-modules')
      const categoriesBanner = document.querySelector('.s-new-arrivals-us-ca-hero')
      const categories = document.querySelectorAll('[data-qa-module-type="categoryProductTray"]')
      const categoriesCopy = [...categories]

      this.newCategoriesWrapper = document.createElement('div')
      this.newCategoriesWrapper.appendChild(categoriesBanner)

      const orderedCategories = this.sortCategories([...categoriesCopy])

      categoriesWrapper.innerHTML = ''
      categoriesWrapper.appendChild(this.newCategoriesWrapper)
    }
  }

  sortCategories(categories) {
    return categories.map((category) => {
      category.categoryId = this.getCategoryId(category)
      category.categoryAffinity = this.affinityManager.getAffinity(category.categoryId)
      return category
    }).sort((a, b) => {
      return a.categoryAffinity - b.categoryAffinity
    }).reverse().map((category) => {
      this.newCategoriesWrapper.appendChild(category)
      return category
    })
  }

  getCategoryId(category) {
    const categoryIdWrapper = category.querySelectorAll('[data-slug]')
    return categoryIdWrapper[0].attributes['data-slug'].nodeValue
  }
}