import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function GET(req: Request) {
  try {
    const session = await getAuthSession();
    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const user = await db.user.findFirst({
      where: {
        id: session?.user.id,
      },
    });
    return new Response(user?.email);
  } catch (error) {
    return new Response("error", { status: 500 });
  }
}
