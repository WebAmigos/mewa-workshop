import { api } from '../../config/api';

import { CreateOfferDto } from './types';

export const createOffer = (data: CreateOfferDto) => {
  return api.post('/offers', data);
};
