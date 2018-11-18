import { createLocalVue } from '@vue/test-utils'
import VueMSAL from '@/.'

describe('AzureAuthService', () => {
  it('mounts the $msal method on the Vue prototype', () => {
    const localVue = createLocalVue()
    localVue.use(VueMSAL)
    expect(localVue.prototype.$msal.test).toBe('TEST')
  })
})
