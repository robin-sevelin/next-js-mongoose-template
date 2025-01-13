import { NextRequest, NextResponse } from 'next/server';
import Kitten, { IKitten } from '../db/models/kitten';
import dbConnect from '../db/connection';

export const GET = async () => {
  await dbConnect();
  let data;
  try {
    const kittens: IKitten[] = await Kitten.find();
    data = Response.json({ success: true, kittens: kittens });
  } catch (error) {
    data = Response.json({ success: false, error });
  }
  return data;
};

export const POST = async () => {
  await dbConnect();
  let data;
  try {
    const kittens: IKitten = await Kitten.create({ name: 'Fia' });
    data = Response.json({ success: true, kittens: kittens });
  } catch (error) {
    data = Response.json({ success: false, error });
  }
  return data;
};

export const PUT = async (request: NextRequest) => {
  const data = await request.json();
  return NextResponse.json(data);
};
