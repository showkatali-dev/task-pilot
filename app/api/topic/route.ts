import { connectMongoDB } from "@/app/libs/connectMongoDB";
import { Topics } from "@/models/topic.model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const topics = await Topics.find();
  return NextResponse.json(topics, { status: 200 });
}

export async function POST(request: any) {
  const { title, description } = await request.json();
  await connectMongoDB();
  const newTopic = await Topics.create({ title, description });
  return NextResponse.json({ newTopic }, { status: 201 });
}
