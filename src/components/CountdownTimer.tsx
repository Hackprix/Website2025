"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { config } from "@/config";
import { Card } from "./ui/Card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStarted, setEventStarted] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeLeft = (): void => {
      const startDate: Date = new Date(config.CONFERENCE_DAYS.day1);
      const now: Date = new Date();
      const difference: number = startDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setEventStarted(true);
      }
    };

    calculateTimeLeft();
    const timer: NodeJS.Timeout = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const validUnits: [string, number][] = Object.entries(timeLeft).reduce<
    [string, number][]
  >(
    (acc, [unit, value]) =>
      value > 0 || acc.length > 0
        ? [...acc, [value === 1 ? unit.slice(0, -1) : unit, value]]
        : acc,
    []
  );

  if (eventStarted) {
    return (
      <div className="bg-gradient-to-br from-purple-900/10 to-purple-900/5 p-4 border border-purple-500/10 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-200 mb-2">
          Sanketika 2025 is here!
        </h3>
        <p className="text-sm text-gray-300">
          Join us now! -{" "}
          <Link
            href="/venue"
            className="text-yellow-300 hover:text-yellow-400 underline"
          >
            View Venue Details
          </Link>
        </p>
      </div>
    );
  }

  if (validUnits.length === 0) return null;

  return (
    <div className="dark:bg-black/90 bg-white p-2 border rounded-lg">
      <h3 className="text-xl font-semibold dark:text-white text-black mb-2 font-poppins tracking-wider">
        Hacking Starts In
      </h3>
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-5 mb-3">
        {validUnits.map(([label, value], index) => (
          <Card
            key={index}
            variant="lifted"
            className="flex flex-col justify-center items-center p-2"
          >
            <div className="flex flex-col justify-center items-center">
              <div className="md:text-2xl text-base font-bold  text-sky-700 font-poppins">
                {String(value).padStart(2, "0")}
              </div>
              <div className="md:text-lg text-xs dark:text-gray-300 text-sky-700 capitalize font-poppins">
                {label}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
