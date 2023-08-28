import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { AccountProfileValidator } from "@/lib/validators/account";
import { Prisma, PrismaClient } from "@prisma/client";
import { z } from "zod";
const prisma = new PrismaClient();

// export async function GET(req: Request) {
//   try {
//     const session = await getAuthSession();
//     if (!session?.user) {
//       return new Response("Unauthorized", { status: 401 });
//     }

//     const user = await db.user.findFirst({
//       where: {
//         id: session?.user.id,
//       },
//     });
//     return new Response(user?.email);
//   } catch (error) {
//     return new Response("error", { status: 500 });
//   }
// }

export async function PUT(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { id, name, bio, urls } = AccountProfileValidator.parse(body);

    const updatedAccount = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: name,
        bio: bio,
        urls: urls,
      },
    });

    return new Response(
      `Your account information has been successfully updated. Your changes have been saved and will reflect across your profile.`
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Could not update account", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const session = await getAuthSession();

    if (!session?.user) {
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { id } = AccountProfileValidator.parse(body);

    const deletedAccount = await prisma.user.delete({
      where: {
        id,
      },
    });

    return new Response(`Account with ID ${id} has been deleted.`);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 422 });
    }

    return new Response("Could not update account", { status: 500 });
  }
}
