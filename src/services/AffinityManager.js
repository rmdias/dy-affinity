
// models
import Category from '../models/category'

//constatns
import STORAGE_KEY from '../constants/STORAGE_KEY'
import EVENT_VALUES from '../constants/EVENT_VALUES'

export default class AffinityManager {
  constructor() {
    this.storage = this._getStorage()
  }

  countAffinity(category, eventType) {
    const categoryId = category.toUpperCase()
    const categoryData = this.storage[categoryId] || new Category({ name: categoryId })

    categoryData.affinity = categoryData.affinity + EVENT_VALUES[eventType]

    this.storage[categoryId] = categoryData
    this._setStorage(this.storage)
  }

  getAffinity(category) {
    const categoryId = category.toUpperCase()

    if (this.storage[categoryId]) {
      return this.storage[categoryId].affinity
    }

    return 0
  }

  _getStorage() {
    const storage = JSON.parse(localStorage.getItem(STORAGE_KEY))

    return storage || {}
  }

  _setStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    this._updateStorageReference()
  }

  _updateStorageReference() {
    this.storage = this._getStorage()
  }
}