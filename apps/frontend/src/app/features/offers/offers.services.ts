import axios from 'axios';

import { CreateOfferDto } from './types';

const API_KEY = '1234'; // TODO: save in env variables

export const createOffer = (data: CreateOfferDto) => {
  return axios.post('http://localhost:3002/api/offers', data, {
    headers: {
      Authorization: API_KEY,
    },
  });
};
