"use client";

import { JSX, useEffect, useState } from "react";
import { Activity, Heart, Shield, Award, Star, Zap } from "lucide-react";

interface FloatingElement {
  icon: JSX.Element;
  top: string;
  left: string;
  size: string;
  opacity: string;
  delay: string;
  duration: string;
}

export function FloatingElements({ color = "text-orange-primary", count = 6 }) {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const icons = [
      <Activity key="activity" className={`${color}`} />,
      <Heart key="heart" className={`${color}`} />,
      <Shield key="shield" className={`${color}`} />,
      <Award key="award" className={`${color}`} />,
      <Star key="star" className={`${color}`} />,
      <Zap key="zap" className={`${color}`} />,
    ];

    const newElements: FloatingElement[] = [];

    for (let i = 0; i < count; i++) {
      newElements.push({
        icon: icons[i % icons.length],
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
        size: `${Math.random() * 1.5 + 1}rem`,
        opacity: `${Math.random() * 0.15 + 0.05}`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 10 + 15}s`,
      });
    }

    setElements(newElements);
  }, [color, count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className="absolute animate-float"
          style={{
            top: element.top,
            left: element.left,
            fontSize: element.size,
            opacity: element.opacity,
            animationDelay: element.delay,
            animationDuration: element.duration,
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  );
}
