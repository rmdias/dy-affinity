import AffinityManager from './AffinityManager'
import EVENT_VALUES from '../constants/EVENT_VALUES'

const affinityManager = new AffinityManager()

it('should check if the class constructor has been called', () => {
  expect(affinityManager.storage).toEqual({})
})

it('should count a `PAGE_VIEW` event to `latest-mens-fashion` category', () => {
  const eventType = 'PAGE_VIEW'

  affinityManager.countAffinity('latest-mens-fashion', eventType)

  expect(affinityManager.storage['LATEST-MENS-FASHION'].affinity).toEqual(EVENT_VALUES[eventType])
})

it('should count `ADD_CART` and `PAGE_VIEW` event to `womens-new-arrivals` category', () => {
  const totalAffinity = EVENT_VALUES['ADD_CART'] + EVENT_VALUES['PAGE_VIEW']

  affinityManager.countAffinity('womens-new-arrivals', 'ADD_CART')
  affinityManager.countAffinity('womens-new-arrivals', 'PAGE_VIEW')

  expect(affinityManager.storage['WOMENS-NEW-ARRIVALS'].affinity).toEqual(totalAffinity)
})
