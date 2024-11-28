import { db } from "@/server/db";

export const POST = async (req: Request) => {
  const { data } = await req.json();

  const {
    id,
    first_name: firstName,
    last_name: lastName,
    username,
    image_url: imageUrl,
  } = data;

  const emailAddress = data.email_addresses[0].email_address;

  await db.user.create({
    data: {
      id,
      firstName,
      lastName,
      username,
      imageUrl,
      emailAddress,
    },
  });

  return new Response("Webhook received", { status: 200 });
};
