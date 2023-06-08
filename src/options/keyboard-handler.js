import Options from './options.js';

export default class KeyboardHandler extends Options {
  static EXIT = ['Escape', 'Esc'];
  static NEXT = ['ArrowRight', 'ArrowDown'];
  static PREVIOUS = ['ArrowLeft', 'ArrowUp'];
  static CONFIRM = ['Enter'];
}
