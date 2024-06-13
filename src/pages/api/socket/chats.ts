import { NextApiRequest } from "next";

import { NextApiResponseServerIO } from "@/types/Socket";

export default async function handler(req: NextApiRequest, res: NextApiResponseServerIO) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed!" })
    }

    try {

    } catch (error) {
        console.error("[MESSAGES_POST]", error);

        return res.status(500).json({ message: "Internal Error" });
    }
}