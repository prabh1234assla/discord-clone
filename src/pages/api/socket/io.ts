import { Server as HttpServer } from "http";
import { NextApiRequest } from "next";
import { Server as ServerIO } from "socket.io";

import { NextApiResponseServerIO } from "@/types/Socket";

export const config = {
    api: {
        bodyParser: false
    }
}

const IOHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {

    if (!res.socket.server.io) {

        const path = "/api/socket/io";
        const httpServer = res.socket.server as any;

        const io = new ServerIO(httpServer, {
            path: path,
            addTrailingSlash: false
        })

        res.socket.server.io = io;
    }

    res.end();
}

export default IOHandler;