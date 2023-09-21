import { connectMongoDB } from "@/app/libs/connectMongoDB";
import { Topics } from "@/models/topic.model";
import { NextResponse } from "next/server";

export async function GET(request: any, { params }: { params: any }) {
  const id = params.id;
  await connectMongoDB();
  const topic = await Topics.findById(id);
  return NextResponse.json(topic);
}

export async function PUT(request: any, { params }: { params: any }) {
  const id = params.id;
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topics.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "Topic updated successfully" },
    { status: 200 }
  );
}

export async function DELETE(request: any, { params }: { params: any }) {
  const id = params.id;
  await connectMongoDB();
  await Topics.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Topic deleted successfully" },
    { status: 200 }
  );
}
