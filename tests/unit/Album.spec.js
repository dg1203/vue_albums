import Album from '@/components/Album.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

const data = {
  album: null,
  photos: []
}

describe('Album.vue', () => {
  let getters;
  let state;
  let store;

  beforeEach(() => {
    state = {
      albums: []
    }
    getters = {
      allAlbums: () => state.albums,
    }

    store = new Vuex.Store({
      state,
      getters
    })
  })
  
  it('Has div.container', () => {
    const wrapper = shallowMount(Album, { store, localVue });
    expect(wrapper.find('.container').exists()).toBe(true);
  });
  it('check correct title render', () => {
    const wrapper = shallowMount(Album, { store, localVue });
    wrapper.setData(data);
    expect(wrapper.find('h1').exists()).toBe(false);
    data.album = {title: "test"};
    wrapper.setData(data);
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe(data.album.title);
  });
  it('check correct photos render', () => {
    const wrapper = shallowMount(Album, { store, localVue });
    wrapper.setData(data);
    expect(wrapper.findAll('.photo').length).toBe(data.photos.length);
  });
});