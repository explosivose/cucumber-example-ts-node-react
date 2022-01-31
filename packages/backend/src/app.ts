import fastify from 'fastify';
import cors from 'fastify-cors';
import { searchEmoji } from './searchEmoji';

const startApp = () => {
  const app = fastify({
    logger: true
  });
  app.register(cors, { origin: true });
  app.route({
    method: 'GET',
    url: '/',
    schema: {
      querystring: {
        search: { type: 'string' }
      },
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              title: { type: 'string' },
              symbol: { type: 'string' },
            }
          }
        }
      },
    },
    handler: function (request, reply) {
      const query = request.query as { search: string };
      const search = query?.search;
      if (search === undefined) {
        reply.send([]);
      }
      const response = searchEmoji(search); 
      reply.send(response);
    }
  })
  app.listen(5000);
}

startApp();
