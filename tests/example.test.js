import { mount } from '@vue/test-utils'
import Example from './Example.vue'

test('메세지를 변경합니다', async () => {
  const wrapper = mount(Example)
  // wrapper.vm === this
  expect(wrapper.vm.msg).toBe('Hello Vue test utils!')
  // wrapper.vm.msg = 'Hello HARIL!!'
  await wrapper.setData({
    msg: 'Hello HARIL!',
  })
  expect(wrapper.vm.msg).toBe('Hello HARIL!')
  expect(wrapper.find('div').text()).toBe('Hello HARIL!')
})
