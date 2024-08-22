import React from "react"
import "../styles/section.css"

export function Section({ children }: React.PropsWithChildren) {
    return (
        <div className="section">
            {children}
        </div>
    )
}