import { type Offer } from '@prisma/client';

export type OfferListDto = Omit<Offer, 'id'>;
