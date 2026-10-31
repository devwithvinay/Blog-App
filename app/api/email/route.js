import dbConnect from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await dbConnect();
};
LoadDB()

export async function POST(request) {
  const formData = await request.formData();

  const emailData = {
    email: `${formData.get("email")}`,
  };
  await EmailModel.create(emailData);
  return NextResponse.json({
    message: "Email Subscribed",
    success: true,
  });
}
