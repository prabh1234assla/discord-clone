import { FC } from "react";
import "@/styles/ServersPanel.css";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { PropsInit } from "@/types/ServersPanel";

import AvatarDecoration from "@/assets/Svgs/AvatarDecoration.svg";

import Image from "next/image";

const ServersPanel: FC<PropsInit> = ({ ...props }) => {
    return (<>
        <div className="ServersPanel flex w-[56px] h-fit bg-red-500 justify-between items-center">
            <AvatarDecoration />

            <HoverCard>
                <HoverCardTrigger>

                    <Avatar className=" w-12 h-12 mt-1 mb-1 mr-1" >
                        <AvatarImage src={props.src} alt={props.alt} />
                        <AvatarFallback>{props.fallback}</AvatarFallback>
                    </Avatar>

                </HoverCardTrigger>

                <HoverCardContent>{props.content}</HoverCardContent>
            </HoverCard>

            {props.activityStatusSrc &&
                <Image className="ServerActivityStatus rounded-full"
                    src={props.activityStatusSrc}
                    height={16} width={16}
                    alt="ServerActivityStatus" />
            }

            {props.pingsCount &&
                <div className="ServerPingsCount bg-red-600 w-[18px] h-[14px] text-center text-[9px] rounded-full">
                    {props.pingsCount}
                </div>
            }
        </div>
    </>)
}

export default ServersPanel;