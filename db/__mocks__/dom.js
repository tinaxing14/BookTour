import { JSDOM } from 'jsdom';

// mock dom element
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
