import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import More from '@/components/More.vue'

const localVue = createLocalVue();
localVue.use(Vuex)

describe('More.vue', () => {
  let actions;
  let store;
  beforeEach(() => {
    actions = {
      loadMore: jest.fn()
    };
    store = new Vuex.Store({
      actions
    });
  });
  it('Has button', () => {
    const wrapper = shallowMount(More);
    expect(wrapper.find('button').exists()).toBe(true);
  });
  it('Button text should be "Wczytaj więcej"', () => {
    const wrapper = shallowMount(More);
    expect(wrapper.find('button').text()).toBe('Wczytaj więcej');
  });
  it('calls store action "loadMore" when button is clicked', () => {
    const wrapper = shallowMount(More, { store, localVue });
    wrapper.find('button').trigger('click');
    expect(actions.loadMore).toHaveBeenCalled();
  })
});