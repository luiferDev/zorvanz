import React from "react"
import "../styles/section.css"

export function Section({ children }: React.PropsWithChildren) {
    return (
        <div className="bg-[#1c2470] w-full h-[50vh] lg:w-full lg:h-[50vh]">
            {children}
        </div>
    )
}