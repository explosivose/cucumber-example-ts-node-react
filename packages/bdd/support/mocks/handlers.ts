import { rest } from 'msw'
import { setupServer } from 'msw/node';
import { searchEmoji } from '../../../backend/src/searchEmoji';

const handlers = [
  rest.get('/', (req, res, ctx) => {
    const searchQuery = req.url.searchParams.get('search');
    const response = searchEmoji(searchQuery);
    return res(ctx.json(response));
  })
];

export const server = setupServer(...handlers);
