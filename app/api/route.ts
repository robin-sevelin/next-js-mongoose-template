import { NextRequest, NextResponse } from 'next/server';
import Item, { ItemInterface } from '../db/models/item';
import dbConnect from '../db/connection';

export const GET = async (): Promise<NextResponse> => {
  await dbConnect();
  try {
    const items: ItemInterface[] = await Item.find();
    return NextResponse.json({ success: true, items }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Ett okänt fel uppstod';
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
};

export const POST = async (request: NextRequest) => {
  await dbConnect();

  try {
    const body = await request.json();

    const item: ItemInterface = await Item.create(body);

    return NextResponse.json({ success: true, item }, { status: 201 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Ett okänt fel uppstod';

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
};
