
// models
import Product from '../models/product'
import Category from '../models/category'

//constatns
import STORAGE_KEY from '../constants/STORAGE_KEY'
import EVENT_VALUES from '../constants/EVENT_VALUES'

export default class LocalStorageManager {
  constructor() {
    this.storage = this.getStorage()
  }

  countAffinity(product, category, eventType) {
    const categoryId = category.toUpperCase()
    const categoryData = this.storage[categoryId] || new Category({ name: categoryId })

    categoryData.affinity = categoryData.affinity + EVENT_VALUES[eventType]
    categoryData.items.push(new Product({ ...product }))

    this.storage[categoryId] = categoryData
    this.setStorage(this.storage)
  }

  getStorage(category) {
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY))

    if (category) {
      const categoryId = category.toUpperCase()

      return (storage) ? storage[categoryId] : new Category({ name: categoryId })
    }

    return storage || {}
  }

  setStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    this.updateStorageReference()
  }

  updateStorageReference() {
    this.storage = this.getStorage()
  }
}