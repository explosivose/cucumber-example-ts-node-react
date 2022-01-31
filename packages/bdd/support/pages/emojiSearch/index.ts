import * as queries from './queries';
import * as actions from './actions';
import * as assertions from './assertions';
import * as render from './render';

const EmojiSearch = {
  ...queries,
  ...actions,
  ...assertions,
  ...render,
}

export default EmojiSearch;
