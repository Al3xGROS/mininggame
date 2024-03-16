'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import Link from 'next/link'

import GameRules from './GameRules'


const ConfigurationPanel = () => {
    const [difficulty, setDifficulty] = useState<number>(1)
    const [rounds, setRounds] = useState<number>(1)
    const [money, setMoney] = useState<number>(1)

    return (
        <Card className='h-fit w-96 border-4 border-stone-100 bg-stone-100 rounded-xl'>
            <CardHeader className='text-center'>
                <Popover>
                    <PopoverTrigger>🚩</PopoverTrigger>
                    <PopoverContent className='w-[50vw]'>
                        <GameRules />
                    </PopoverContent>
                </Popover>
                <CardTitle>Game Settings</CardTitle>
                <CardDescription>You need to configure your game first</CardDescription>
            </CardHeader>
            <CardContent className='flex-col justify-center items-center'>
                <Label htmlFor="difficulty">Choose the difficulty:</Label>
                <Slider
                    id='difficulty'
                    defaultValue={[difficulty || 1]} 
                    max={2} 
                    step={1} 
                    className='my-2 w-4/5 mx-auto' 
                    onValueChange={(e) => setDifficulty(Number(e[0]))} 
                />
                <div className='flex justify-between mx-auto text-sm w-4/5'>
                    <p>easy</p>
                    <p>normal</p>
                    <p>hard</p>
                </div>
            </CardContent>
            <CardContent className='flex-col justify-center items-center'>
                <Label htmlFor="rounds">Choose the number of rounds:</Label>
                <Input 
                    id='rounds'
                    className='w-4/5 mx-auto' 
                    type="number" 
                    value={rounds || 1} 
                    min={1} 
                    max={30} 
                    onChange={(e) => setRounds(Number(e.target.value))} 
                />
            </CardContent>
            <CardContent className='flex-col justify-center items-center'>
                <Label htmlFor='money'>Choose your initial sum of money:</Label>
                <Input
                    id='money'
                    className='w-4/5 mx-auto' 
                    type="number" 
                    value={money || 1} 
                    min={1} 
                    max={30} 
                    onChange={(e) => setMoney(Number(e.target.value))} 
                />
            </CardContent>
            <CardFooter className='flex justify-center items-center text-center'>
                <Button 
                    className='text-white font-bold py-2 px-4 rounded-full'
                >
                    <Link href={`/play?difficulty=${difficulty}&rounds=${rounds}&money=${money}`}>Let's Play!</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}

export default ConfigurationPanel