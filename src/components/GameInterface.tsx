import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

const GameInterface = ({coins, money, rounds, currentRound}: {coins: any; money: any; rounds: any; currentRound: any;}) => {
    return (
        <Card className="absolute bottom-0 w-screen h-fit">
            <CardHeader className="w-full">
                <CardTitle className="mx-auto">Global stats</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-row justify-center items-center">
                <CardDescription className="mx-5">
                    Coins: {coins}
                </CardDescription>
                <CardDescription className="mx-5">
                    Money: {money}
                </CardDescription>
                <CardDescription className="mx-5">
                    Rounds: {currentRound}/{rounds}
                </CardDescription>
            </CardContent>   
        </Card>
    )
}

export default GameInterface