"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 11);

    // Realistic PBR Brass Material
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#e0b445"),
      roughness: 0.22,
      metalness: 0.94,
    });

    const brassDarkMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#ba8c26"),
      roughness: 0.35,
      metalness: 0.88,
    });

    // Helper: Create Hex Nipple Fitting
    function createHexNipple() {
      const group = new THREE.Group();

      // Central Hexagon Collar
      const hexGeo = new THREE.CylinderGeometry(1.05, 1.05, 0.6, 6);
      const hexMesh = new THREE.Mesh(hexGeo, brassMaterial);
      hexMesh.rotation.y = Math.PI / 6;
      group.add(hexMesh);

      // Threaded Body 1 (Top)
      const thread1Geo = new THREE.CylinderGeometry(0.72, 0.76, 1.2, 32);
      const thread1 = new THREE.Mesh(thread1Geo, brassMaterial);
      thread1.position.y = 0.85;
      group.add(thread1);

      // Thread ridge rings for visual threading detail
      for (let i = 0; i < 5; i++) {
        const ringGeo = new THREE.TorusGeometry(0.77, 0.035, 10, 32);
        const ring = new THREE.Mesh(ringGeo, brassDarkMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 0.45 + i * 0.2;
        group.add(ring);
      }

      // Threaded Body 2 (Bottom)
      const thread2Geo = new THREE.CylinderGeometry(0.76, 0.72, 1.2, 32);
      const thread2 = new THREE.Mesh(thread2Geo, brassMaterial);
      thread2.position.y = -0.85;
      group.add(thread2);

      for (let i = 0; i < 5; i++) {
        const ringGeo = new THREE.TorusGeometry(0.77, 0.035, 10, 32);
        const ring = new THREE.Mesh(ringGeo, brassDarkMaterial);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = -0.45 - i * 0.2;
        group.add(ring);
      }

      // Internal Hollow Bore
      const boreGeo = new THREE.CylinderGeometry(0.48, 0.48, 2.95, 24);
      const boreMat = new THREE.MeshBasicMaterial({ color: 0x050608 });
      const bore = new THREE.Mesh(boreGeo, boreMat);
      group.add(bore);

      return group;
    }

    // Helper: Create 90-degree Elbow Fitting
    function createElbow() {
      const group = new THREE.Group();

      // Torus bend
      const bendGeo = new THREE.TorusGeometry(0.9, 0.48, 20, 24, Math.PI / 2);
      const bend = new THREE.Mesh(bendGeo, brassMaterial);
      bend.rotation.z = -Math.PI / 2;
      group.add(bend);

      // Leg 1 (horizontal)
      const leg1Geo = new THREE.CylinderGeometry(0.52, 0.52, 0.8, 28);
      const leg1 = new THREE.Mesh(leg1Geo, brassMaterial);
      leg1.rotation.z = Math.PI / 2;
      leg1.position.set(0.9, 0, 0);
      group.add(leg1);

      // Thread 1
      const th1 = new THREE.CylinderGeometry(0.46, 0.48, 0.6, 28);
      const th1Mesh = new THREE.Mesh(th1, brassMaterial);
      th1Mesh.rotation.z = Math.PI / 2;
      th1Mesh.position.set(1.4, 0, 0);
      group.add(th1Mesh);

      // Leg 2 (vertical)
      const leg2Geo = new THREE.CylinderGeometry(0.52, 0.52, 0.8, 28);
      const leg2 = new THREE.Mesh(leg2Geo, brassMaterial);
      leg2.position.set(0, -0.9, 0);
      group.add(leg2);

      // Knurled Hex Collar
      const collarGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.45, 6);
      const collar = new THREE.Mesh(collarGeo, brassMaterial);
      collar.position.set(0, -1.25, 0);
      group.add(collar);

      return group;
    }

    // Helper: Create Hose Barb Adapter
    function createHoseBarb() {
      const group = new THREE.Group();

      // Hex base
      const hexGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.5, 6);
      const hex = new THREE.Mesh(hexGeo, brassMaterial);
      group.add(hex);

      // Male NPT Thread
      const nptGeo = new THREE.CylinderGeometry(0.62, 0.66, 0.9, 28);
      const npt = new THREE.Mesh(nptGeo, brassMaterial);
      npt.position.y = -0.65;
      group.add(npt);

      // Concentric Barb Stem
      const stemGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.6, 24);
      const stem = new THREE.Mesh(stemGeo, brassMaterial);
      stem.position.y = 1.0;
      group.add(stem);

      // 4 Barbed Cones
      for (let i = 0; i < 4; i++) {
        const coneGeo = new THREE.ConeGeometry(0.52, 0.35, 24);
        const cone = new THREE.Mesh(coneGeo, brassMaterial);
        cone.position.y = 0.5 + i * 0.35;
        group.add(cone);
      }

      return group;
    }

    // Helper: Create Flared Compression Nut
    function createCompressionNut() {
      const group = new THREE.Group();
      const nutGeo = new THREE.CylinderGeometry(0.88, 0.88, 0.8, 6);
      const nut = new THREE.Mesh(nutGeo, brassMaterial);
      group.add(nut);

      // Top chamfer collar
      const ringGeo = new THREE.CylinderGeometry(0.68, 0.82, 0.3, 32);
      const ring = new THREE.Mesh(ringGeo, brassMaterial);
      ring.position.y = 0.5;
      group.add(ring);

      // Internal hole
      const boreGeo = new THREE.CylinderGeometry(0.45, 0.45, 1.45, 24);
      const bore = new THREE.Mesh(boreGeo, new THREE.MeshBasicMaterial({ color: 0x050608 }));
      group.add(bore);

      return group;
    }

    // Helper: Create Precision Bushing / CNC Insert
    function createBushing() {
      const group = new THREE.Group();
      const bodyGeo = new THREE.CylinderGeometry(0.65, 0.65, 1.5, 32);
      const body = new THREE.Mesh(bodyGeo, brassMaterial);
      group.add(body);

      // Diamond knurl band simulation
      const knurlGeo = new THREE.CylinderGeometry(0.72, 0.72, 0.5, 24);
      const knurl = new THREE.Mesh(knurlGeo, brassDarkMaterial);
      group.add(knurl);

      const flangeGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.18, 32);
      const flange = new THREE.Mesh(flangeGeo, brassMaterial);
      flange.position.y = 0.75;
      group.add(flange);

      return group;
    }

    // Instantiate and position floating objects in 3D Space
    const objects: { mesh: THREE.Group; rx: number; ry: number; rz: number; vy: number; baseY: number; timeOffset: number }[] = [];

    // 1. Centerpiece Large Hex Nipple
    const obj1 = createHexNipple();
    obj1.scale.set(1.4, 1.4, 1.4);
    obj1.position.set(2.8, 0.2, 0);
    obj1.rotation.set(0.4, 0.6, -0.3);
    scene.add(obj1);
    objects.push({ mesh: obj1, rx: 0.003, ry: 0.005, rz: 0.002, vy: 0.001, baseY: 0.2, timeOffset: 0 });

    // 2. Upper Left 90° Elbow
    const obj2 = createElbow();
    obj2.scale.set(1.15, 1.15, 1.15);
    obj2.position.set(-3.2, 1.8, -1.2);
    obj2.rotation.set(-0.5, 0.8, 0.4);
    scene.add(obj2);
    objects.push({ mesh: obj2, rx: -0.004, ry: 0.004, rz: 0.003, vy: 0.0012, baseY: 1.8, timeOffset: 1.5 });

    // 3. Right Bottom Hose Barb
    const obj3 = createHoseBarb();
    obj3.scale.set(1.1, 1.1, 1.1);
    obj3.position.set(4.2, -2.1, -1.5);
    obj3.rotation.set(0.6, -0.4, 0.5);
    scene.add(obj3);
    objects.push({ mesh: obj3, rx: 0.004, ry: -0.006, rz: 0.002, vy: 0.0009, baseY: -2.1, timeOffset: 3.1 });

    // 4. Center-Left Compression Nut
    const obj4 = createCompressionNut();
    obj4.scale.set(1.0, 1.0, 1.0);
    obj4.position.set(-1.8, -2.4, -0.5);
    obj4.rotation.set(0.3, 0.4, -0.5);
    scene.add(obj4);
    objects.push({ mesh: obj4, rx: -0.003, ry: 0.006, rz: -0.004, vy: 0.0011, baseY: -2.4, timeOffset: 4.2 });

    // 5. Deep Background CNC Bushing
    const obj5 = createBushing();
    obj5.scale.set(0.85, 0.85, 0.85);
    obj5.position.set(0.6, 2.6, -2.8);
    obj5.rotation.set(0.7, -0.5, 0.2);
    scene.add(obj5);
    objects.push({ mesh: obj5, rx: 0.005, ry: 0.003, rz: 0.003, vy: 0.0008, baseY: 2.6, timeOffset: 2.0 });

    // Floating Dust / Brass Micro-Particles
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 20;
      particlePositions[i + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xecd078,
      size: 0.055,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Studio Industrial Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xfff8ee, 1.2);
    scene.add(ambientLight);

    // Golden Key Light (Top-Right)
    const keyLight = new THREE.DirectionalLight(0xffdf88, 3.5);
    keyLight.position.set(7, 8, 5);
    scene.add(keyLight);

    // Cool Steel Fill Light (Left-Bottom)
    const fillLight = new THREE.DirectionalLight(0x7590b5, 1.8);
    fillLight.position.set(-8, -5, 3);
    scene.add(fillLight);

    // Sharp Backlight / Rim
    const rimLight = new THREE.DirectionalLight(0xffe6a3, 3.2);
    rimLight.position.set(0, -6, -6);
    scene.add(rimLight);

    // Point light to create glinting reflections
    const glintLight = new THREE.PointLight(0xffeedd, 2.5, 15);
    glintLight.position.set(2, 2, 4);
    scene.add(glintLight);

    // Interactive Mouse Tracking for subtle camera tilt & parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation
      targetX += (mouseX * 1.2 - targetX) * 0.05;
      targetY += (-mouseY * 0.8 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      // Rotate and oscillate floating brass fittings
      objects.forEach((item) => {
        item.mesh.rotation.x += item.rx;
        item.mesh.rotation.y += item.ry;
        item.mesh.rotation.z += item.rz;
        item.mesh.position.y = item.baseY + Math.sin(elapsedTime * 1.2 + item.timeOffset) * 0.18;
      });

      // Slowly rotate particle dust
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-hidden"
      aria-hidden="true"
    />
  );
}
