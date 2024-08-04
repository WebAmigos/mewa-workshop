import axios from 'axios';

import { CreateOfferDto } from './types';

export const createOffer = (data: CreateOfferDto) => {
  return axios.post('http://localhost:3002/api/offers');
};
