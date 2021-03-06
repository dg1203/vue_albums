import Albums from '@/components/Albums.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Albums.vue', () => {
  let getters;
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      albums: []
    }
    getters = {
      allAlbums: () => state.albums,
    }
    actions = {
      fetchAlbums: jest.fn()
    }

    store = new Vuex.Store({
      state,
      getters,
      actions
    })
  })

  it('Should have title H1 - and title should be "Albums list"', () => {
    const wrapper = shallowMount(Albums, { store, localVue });
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Albums list');
  });
  it('Should have div.container', () => {
    const wrapper = shallowMount(Albums, { store, localVue });
    expect(wrapper.find('.container').exists()).toBe(true);
  });
  it('Should have router.card', () => {
    const wrapper = shallowMount(Albums, { store, localVue });
    expect(wrapper.findAll('.card').length).toBe(getters.allAlbums.length);
  });
});