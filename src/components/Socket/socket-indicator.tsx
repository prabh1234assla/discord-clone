"use client";

import { useSocket } from "../providers/socket-provider";

export const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if(isConnected){
        return <div>Connected</div>
    }

    return <div>Not Connected</div>
}