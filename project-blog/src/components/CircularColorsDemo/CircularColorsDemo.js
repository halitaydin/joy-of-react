"use client";
import React from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";
import { LayoutGroup, motion } from "framer-motion";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

function CircularColorsDemo() {
  // TODO: This value should increase by 1 every second:

  const id = React.useId();

  const [isRunning, setIsRunning] = React.useState(false);
  const [timeElapsed, setTimeElapsed] = React.useState(0);

  React.useEffect(() => {
    if (isRunning) {
      const intervalId = window.setInterval(() => {
        setTimeElapsed((time) => time + 1);
      }, 1000);

      return () => {
        window.clearInterval(intervalId);
      };
    }
  }, [isRunning]);

  // TODO: This value should cycle through the colors in the
  // COLORS array:

  function getColor({ timeElapsed }) {
    const colorIndex = timeElapsed % COLORS.length;

    return COLORS[colorIndex];
  }

  const selectedColor = getColor({ timeElapsed });

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;
          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div
                  className={styles.selectedColorOutline}
                  layoutId={`${id}-selected-color-outline`}
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
                layout="position"
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button
            onClick={() => {
              setIsRunning(!isRunning);
              !isRunning && setTimeElapsed(timeElapsed + 1);
            }}
          >
            {isRunning ? <Pause /> : <Play />}
            <VisuallyHidden>Toggle playing</VisuallyHidden>
          </button>
          <button
            onClick={() => {
              setTimeElapsed(0);
              setIsRunning(false);
            }}
          >
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
