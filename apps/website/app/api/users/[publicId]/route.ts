// /api/users/1234

import { NextResponse } from 'next/server';

type Params = {
  params: {
    publicId: string;
  };
};

export async function GET(_request: Request, { params }: Params) {
  return NextResponse.json(
    {
      userId: params.publicId,
    },
    {
      status: 200,
    }
  );
}
