"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const ChoiceButtons = ({onChoice}: {onChoice: any}) => {
    return (
        <Card className="h-fit w-96 border-4 border-stone-100 bg-stone-100 rounded-xl">
            <CardHeader>
                <CardTitle>You won the coin!</CardTitle>
                <CardDescription>Now make your choice:</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-row justify-between items-center mx-5'>
                <Button className="mx-5" onClick={() => onChoice("keep")}>
                    Keep
                </Button>
                <Button className="mx-5" onClick={() => onChoice("push")}>
                    Push
                </Button>
            </CardContent>
        </Card>
    )
}

export default ChoiceButtons