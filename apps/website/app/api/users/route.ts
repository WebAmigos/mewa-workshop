// /api/users

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();

  return NextResponse.json(
    {
      userData: data,
    },
    {
      status: 201,
    }
  );
}
