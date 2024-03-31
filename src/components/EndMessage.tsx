import React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

const EndMessage = () => {
    return (
        <Card className="h-fit w-96 border-4 border-stone-100 bg-stone-100 rounded-xl">
            <CardHeader>
                <CardTitle>This is the end of the game!</CardTitle>
                <CardDescription>Hope you enjoyed it...</CardDescription>
                <CardDescription>It was a gamification of the selfish mining strategy on the bitcoin network.</CardDescription>
                <CardDescription>Learn more by clicking here...</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default EndMessage