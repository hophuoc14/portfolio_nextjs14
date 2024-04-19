import { PropsWithChildren } from "react";

export default function InteractionLayout({children}:PropsWithChildren){
    return <div className="min-h-[76dvh] overflow-hidden">{children}</div>
}