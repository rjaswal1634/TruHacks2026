"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="countdown-item">
          <span className="text-4xl font-bold">{timeLeft.days}</span>
          <span className="text-sm text-muted-foreground">Days</span>
        </div>
        <div className="countdown-item">
          <span className="text-4xl font-bold">{timeLeft.hours}</span>
          <span className="text-sm text-muted-foreground">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="text-4xl font-bold">{timeLeft.minutes}</span>
          <span className="text-sm text-muted-foreground">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="text-4xl font-bold">{timeLeft.seconds}</span>
          <span className="text-sm text-muted-foreground">Seconds</span>
        </div>
      </div>
    </div>
  )
}
