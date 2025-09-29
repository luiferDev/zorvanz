import React from 'react'
import { SkeletonCard } from '../../../UI/SkeletonCard'

export default function SkeletonProducts(): React.ReactElement {
    return (
        <>
            <div className="flex flex-row justify-center items-center gap-8 pt-20 pb-8 pl-8 lg:pb-20 lg:pl-20">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </>
    )
}
