import React from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

const LoseMessage = () => {
    return (
        <Card className="h-fit w-96 border-4 border-stone-100 bg-stone-100 rounded-xl">
            <CardHeader>
                <CardTitle>You lost this round!</CardTitle>
                <CardDescription>You lose a coin and some money if you don't have any...</CardDescription>
                <CardDescription>Click on the coin to start a new round!</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default LoseMessage