import { AvatarInit, HoverCardInit } from "./ui"

export interface PropsInit extends AvatarInit, HoverCardInit {
    pingsCount: number | null
    activityStatusSrc: string | null
} 