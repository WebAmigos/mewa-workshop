import { OfferListDto } from '@ems/contracts';

type Props = {
  data: OfferListDto[];
};

export const OffersList = ({ data }: Props) => {
  return (
    <ul>
      {data.map((elem) => (
        <li key={elem.public_id}>
          {elem.role} | {elem.description} | {elem.salary} zł
        </li>
      ))}
    </ul>
  );
};
