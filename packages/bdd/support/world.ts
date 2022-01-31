import { setWorldConstructor, World } from '@cucumber/cucumber';
import { cleanup } from '@testing-library/react';
import { server } from './mocks/handlers';
import EmojiSearch from './pages/emojiSearch';

type State = Partial<Record<string, unknown>>;

export default class TestWorld<S extends State = State> extends World {

  private _emojiSearch = EmojiSearch;
  private _state: S = {} as S;

  /**
   * Design your scenarios to use state as little as possible
   */
  get state(): S {
    return this._state;
  }

  get emojiSearch(): typeof EmojiSearch {
    return this._emojiSearch;
  }

  before() {
    cleanup();
    server.listen();
  }

  after() {
    server.close();
  }
}

setWorldConstructor(TestWorld);
