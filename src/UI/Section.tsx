import React from "react"

export function Section({ children }: React.PropsWithChildren) {
    return (
        <div className="bg-zorvanz-blue w-full h-[50vh] lg:w-full lg:h-[50vh]">
            {children}
        </div>
    )
}