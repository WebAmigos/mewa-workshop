// /api
// /api/hello

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(
    {
      status: 'ok',
    },
    {
      status: 200,
    }
  );
}
