import * as React from 'react'
import {mount} from 'enzyme'
import CheckoutComp from '../src/molecules/Checkout/checkoutcomp'

describe('Pages', () => {
  describe('CheckoutComp', () => {
    it('should render without throwing an error', function () {
      const wrap = mount(<CheckoutComp/>)
      expect(wrap.find('P').text()).toBe('Page with disale SSR')
    })
  })  
})