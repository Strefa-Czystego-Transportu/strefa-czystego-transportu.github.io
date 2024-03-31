import { Card, Skeleton } from "@nextui-org/react";

export default function NewsSkeleton() {
    return (
        <Card className="p-4" shadow="sm">
            <div className="grid grid-cols-1 gap-4">
                <Skeleton className="rounded-lg w-24">
                    <div className="h-4 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-8 rounded-lg bg-default-300 w-48"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300 w-96"></div>
                </Skeleton>
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300 w-96"></div>
                </Skeleton>
            </div>
        </Card>

    )
}
