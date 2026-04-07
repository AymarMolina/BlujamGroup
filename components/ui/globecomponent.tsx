"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// High-res land mask (2048x1024 grayscale PNG, base64) — no external fetch
const LAND_MASK_B64 = "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";

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

export default function Globe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    let cleanup: (() => void) | null = null;

    const img = new Image();
    img.onload = () => {
      const c = document.createElement("canvas");
      c.width = img.width;
      c.height = img.height;
      const ctx = c.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      cleanup = buildGlobe(mount, ctx.getImageData(0, 0, c.width, c.height));
    };
    img.onerror = () => { cleanup = buildGlobe(mount, null); };
    img.src = "data:image/png;base64," + LAND_MASK_B64;

    return () => cleanup?.();
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: "100%", height: "100%", cursor: "grab", background: "transparent" }}
    />
  );
}

function buildGlobe(mount: HTMLDivElement, imageData: ImageData | null): () => void {
  const W = mount.clientWidth;
  const H = mount.clientHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
  camera.position.z = 2.8;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);
  mount.appendChild(renderer.domElement);

  const RADIUS = 1;
  const DOT_COUNT = 32000;
  const positions: number[] = [];

  for (let i = 0; i < DOT_COUNT; i++) {
    const phi = Math.acos(-1 + (2 * i) / DOT_COUNT);
    const theta = Math.sqrt(DOT_COUNT * Math.PI) * phi;
    const lat = 90 - (phi * 180) / Math.PI;
    const lng = ((theta * 180) / Math.PI) % 360 - 180;

    if (imageData) {
      const px = Math.min(Math.floor((lng + 180) / 360 * imageData.width), imageData.width - 1);
      const py = Math.min(Math.floor((90 - lat) / 180 * imageData.height), imageData.height - 1);
      if (imageData.data[(py * imageData.width + px) * 4] < 128) continue;
    }

    positions.push(
      RADIUS * Math.sin(phi) * Math.cos(theta),
      RADIUS * Math.cos(phi),
      RADIUS * Math.sin(phi) * Math.sin(theta)
    );
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  const dots = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xf5f5f5, size: 0.011, sizeAttenuation: true,
    transparent: true, opacity: 0.72,
  }));
  
 
  const pivot = new THREE.Group();
  pivot.add(dots);
  pivot.rotation.x = 0.25;
  scene.add(pivot);

  let animId: number;
  const tick = () => { animId = requestAnimationFrame(tick); pivot.rotation.y += 0.0016; renderer.render(scene, camera); };
  tick();

  const onResize = () => {
    const w = mount.clientWidth, h = mount.clientHeight;
    camera.aspect = w / h; camera.updateProjectionMatrix(); renderer.setSize(w, h);
  };
  window.addEventListener("resize", onResize);

  let dragging = false, prev = { x: 0, y: 0 };
  const onDown = (e: MouseEvent) => { dragging = true; prev = { x: e.clientX, y: e.clientY }; };
  const onMove = (e: MouseEvent) => {
    if (!dragging) return;
    pivot.rotation.y += (e.clientX - prev.x) * 0.005;
    pivot.rotation.x += (e.clientY - prev.y) * 0.005;
    prev = { x: e.clientX, y: e.clientY };
  };
  const onUp = () => { dragging = false; };
  mount.addEventListener("mousedown", onDown);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseup", onUp);
    // En buildGlobe, después de crear los dots, añade esto:

    // Esfera base — da forma y textura al globo
    const sphereGeo = new THREE.SphereGeometry(RADIUS - 0.001, 64, 64);
    const sphereMat = new THREE.MeshPhongMaterial({
    color: 0x022042,        // azul oscuro base
    transparent: true,
    opacity: 0.2,           // muy sutil
    wireframe: false,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    pivot.add(sphere);

    // Añade también una esfera de wireframe muy sutil (opcional, da más textura)
    const wireGeo = new THREE.SphereGeometry(RADIUS - 0.002, 32, 32);
    const wireMat = new THREE.MeshBasicMaterial({
    color: 0x022042,
    transparent: true,
    opacity: 0.05,
    wireframe: true,
    });
    const wireSphere = new THREE.Mesh(wireGeo, wireMat);
    pivot.add(wireSphere);

    // Luz para que el MeshPhong muestre el volumen
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);
  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", onResize);
    mount.removeEventListener("mousedown", onDown);
    window.removeEventListener("mousemove", onMove);
    window.removeEventListener("mouseup", onUp);
    renderer.dispose();
    if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
  };
}