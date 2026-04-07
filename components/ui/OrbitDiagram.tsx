"use client";

import React from "react";

const CENTER = { x: 420, y: 280 };
const VIEWBOX_W = 840;
const VIEWBOX_H = 560;
const PULSE_DURATION = 2.2;

const NODES = [
  { id: "s1", x: 420, y: -30,  src: "/icons/servicio1.png" }, 
  { id: "s2", x: 750, y: 212, src: "/icons/servicio2.png" }, 
  { id: "s3", x: 549, y: 458, src: "/icons/servicio3.png" }, 
  { id: "s4", x: 291, y: 458, src: "/icons/servicio4.png" }, 
  { id: "s5", x: 100, y: 212, src: "/icons/servicio5.png" }, 
];

const PULSE_DELAYS = NODES.map((_, i) => (i * PULSE_DURATION) / NODES.length);

const ICON_SIZE = 150;   
const LOGO_SIZE = 120;  
const NODE_RADIUS = 100; 
const CENTER_RADIUS = 80; 

export default function OrbitDiagram() {
  return (
    <div className="flex items-center justify-center w-full">
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        width="100%"
        style={{ maxWidth: 840, overflow: "visible" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {NODES.map((node) => (
            <path
              key={`path-${node.id}`}
              id={`path-${node.id}`}
              d={`M${CENTER.x},${CENTER.y} L${node.x},${node.y}`}
            />
          ))}
        </defs>

        {NODES.map((node) => (
          <line
            key={`line-${node.id}`}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={node.x}
            y2={node.y}
            stroke="rgba(100,160,220,0.35)"
            strokeWidth={1.5}
          />
        ))}

        {NODES.map((node, i) => (
          <circle key={`pulse-${node.id}`} r={5} fill="rgba(150,200,255,0.9)" opacity={0}>
            <animateMotion
              dur={`${PULSE_DURATION}s`}
              repeatCount="indefinite"
              begin={`${PULSE_DELAYS[i]}s`}
            >
              <mpath href={`#path-${node.id}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values="0;0;1;1;0"
              keyTimes="0;0.05;0.12;0.88;1"
              dur={`${PULSE_DURATION}s`}
              repeatCount="indefinite"
              begin={`${PULSE_DELAYS[i]}s`}
            />
            <animate
              attributeName="r"
              values="3;6;6;5;3"
              keyTimes="0;0.1;0.5;0.9;1"
              dur={`${PULSE_DURATION}s`}
              repeatCount="indefinite"
              begin={`${PULSE_DELAYS[i]}s`}
            />
          </circle>
        ))}

        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={CENTER_RADIUS}
          fill="rgba(10,30,60,0.6)"
          stroke="rgba(100,160,220,0.6)"
          strokeWidth={1.5}
        />
        <image
          href="/icons/blujamlogoChico.png"
          x={CENTER.x - LOGO_SIZE / 2}
          y={CENTER.y - LOGO_SIZE / 2}
          width={LOGO_SIZE}
          height={LOGO_SIZE}
          preserveAspectRatio="xMidYMid meet"
        />

        {NODES.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={NODE_RADIUS}
              fill="rgba(10,30,60,0.6)"
              stroke="rgba(100,160,220,0.5)"
              strokeWidth={1.5}
            />
            <image
              href={node.src}
              x={node.x - ICON_SIZE / 2}
              y={node.y - ICON_SIZE / 2}
              width={ICON_SIZE}
              height={ICON_SIZE}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}