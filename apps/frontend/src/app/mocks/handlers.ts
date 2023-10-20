import { rest } from 'msw';

export const API_URL = 'https://randomuser.me/api/?results=5';

export const employeesMockData = {
  results: [
    {
      name: {
        first: 'Jan',
        last: 'Kowalski',
      },
      email: 'jan@kowalski.pl',
      id: {
        name: '123',
      },
    },
    {
      name: {
        first: 'Jola',
        last: 'Marciniak',
      },
      email: 'jola@marciniak.pl',
      id: {
        name: '456',
      },
    },
  ],
};

export const handlers = [
  rest.get(API_URL, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(employeesMockData)

      // ctx.status(200),
      // ctx.json({})

      // ctx.status(500),
      // ctx.json({})
    );
  }),

  rest.post('/login', (req, res, ctx) => {
    // const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        email: 'patryk@wp.pl',
        // username,
        // firstName: 'John',
        // lastName: 'Maverick',
      })
    );
  }),
];
