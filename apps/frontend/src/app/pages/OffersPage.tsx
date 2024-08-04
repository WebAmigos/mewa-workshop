import { useState, useEffect } from 'react';
import { Header } from '@ems/common-ui';
import { OfferListDto } from '@ems/contracts';

import { OffersList } from '../features/offers/OffersList';
import { fetchOffers } from '../features/offers/offers.services';
import { Link } from 'react-router-dom';
import { ROUTE } from '../routes';

export const OffersPage = () => {
  const [data, setData] = useState<OfferListDto[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetchOffers();
      setData(response.data);
    };
    loadData();
  }, []);

  return (
    <div>
      <Header>Offers</Header>
      <Link to={ROUTE.OFFERS_CREATE}>Create offer</Link>
      <OffersList data={data} />
    </div>
  );
};
