import { describe, it, beforeEach } from 'storybook-addon-specifications';
import { shallowMount, mount } from "@vue/test-utils";
import expect from 'expect';
import jest from 'jest-mock';

window.describe = describe;
window.beforeEach = beforeEach;
window.it = it;
window.expect = expect;
window.jest = jest;
window.shallowMount = shallowMount;
window.mount = mount;
