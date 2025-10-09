import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../TagBoxContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.find('#tag-box').exists()).toBe(true);
  });
});
