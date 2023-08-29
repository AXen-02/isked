import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  DeleteAccountValidator,
  UpdateAccountValidator,
  UpdateProfileValidator,
} from "@/lib/validators/account";
import { Payload } from "@/lib/validators/payloads";
import { z } from "zod";

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
    const { payloadName } = body; // GETS THE PAYLOAD NAME

    if (payloadName === Payload.UPDATEPROFILE) {
      const { id, name, bio, urls } = UpdateProfileValidator.parse(body);

      const updatedProfile = await db.user.update({
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
        `Your profile details have been updated successfully.`
      );
    }

    if (payloadName === Payload.UPDATEACCOUNT) {
      const { id, username } = UpdateAccountValidator.parse(body);

      // Check if there's a username that matches the one in the database.
      const isUserExists = await db.user.findUnique({
        where: {
          username: username,
        },
      });

      if (isUserExists) {
        return new Response(
          `The chosen username is already in use. Please select a different one.`,
          { status: 409 }
        );
      }

      const updatedAccount = await db.user.update({
        where: {
          id,
        },
        data: {
          username: username,
        },
      });

      return new Response(
        `Your account details have been updated successfully.`
      );
    }
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

    // console.log(req);

    const body = await req.json();
    const { id } = DeleteAccountValidator.parse(body);

    const deletedAccount = await db.user.delete({
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
