"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, ZoomIn, ZoomOut, Box, Layers, Crosshair, CheckCircle2, Shield, Wrench, Sparkles } from "lucide-react";

interface Hotspot {
  id: string;
  title: string;
  category: string;
  position3D: [number, number, number];
  description: string;
  spec: string;
  tolerance: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "threading",
    title: "PRECISION THREADING",
    category: "Machining Accuracy",
    position3D: [0, 1.2, 0.75],
    description: "Single-point CNC turned tapered dryseal threads engineered to eliminate microscopic spiral leak paths.",
    spec: "ASME B1.20.1 NPT / ISO 7-1 BSPT & BSPP",
    tolerance: "Pitch Diameter ±0.012 mm",
  },
  {
    id: "brass-alloy",
    title: "HIGH-QUALITY BRASS",
    category: "Metallurgy",
    position3D: [0.75, 0, 0.75],
    description: "Extruded premium CW614N / IS 319 Grade 1 brass alloy tested with optical emission spectrometry for zero void porosity.",
    spec: "Cu 57.0–59.0%, Pb 2.5–3.5%, Zn Remainder",
    tolerance: "Tensile Strength > 440 MPa",
  },
  {
    id: "corrosion",
    title: "CORROSION RESISTANCE",
    category: "Surface Science",
    position3D: [-0.65, 0.4, 0.65],
    description: "Dezincification-resistant grain boundary microstructure with optional ultrasonic passivation or electro-nickel plating.",
    spec: "ASTM B154 Mercurous Nitrate & ISO 6509 DZR",
    tolerance: "Salt Spray > 120 Hours",
  },
  {
    id: "tolerance",
    title: "ENGINEERED TOLERANCE",
    category: "Dimensional Quality",
    position3D: [0, -1.1, 0.75],
    description: "Sub-micron repeatability achieved across automated multi-spindle stations with Mitutoyo optical projector verification.",
    spec: "Hex Flats Wrench Size DIN 439",
    tolerance: "Concentricity within 0.015 mm",
  },
];

export default function ProductInspector3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedModel, setSelectedModel] = useState<"nipple" | "elbow" | "barb" | "bushing">("nipple");
  const [isWireframe, setIsWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HOTSPOTS[0]);
  const [screenHotspots, setScreenHotspots] = useState<{ id: string; x: number; y: number; visible: boolean }[]>([]);

  // Refs for 3D state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const currentModelGroupRef = useRef<THREE.Group | null>(null);
  const brassMatRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const isDraggingRef = useRef(false);
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const modelRotationRef = useRef({ x: 0.25, y: 0.4 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      return;
    }

    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.4;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    // Materials
    const brassMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#e5b842"),
      roughness: 0.2,
      metalness: 0.95,
      wireframe: isWireframe,
    });
    brassMatRef.current = brassMaterial;

    const brassAccentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#b88f28"),
      roughness: 0.32,
      metalness: 0.88,
      wireframe: isWireframe,
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xfff3e0, 1.3);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffdf88, 3.8);
    keyLight.position.set(6, 7, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x7090b8, 2.0);
    fillLight.position.set(-6, -4, 4);
    scene.add(fillLight);

    const topRim = new THREE.DirectionalLight(0xfff0b8, 2.5);
    topRim.position.set(0, 6, -5);
    scene.add(topRim);

    // Subtle technical floor grid
    const gridHelper = new THREE.GridHelper(8, 16, 0xd4af37, 0x242a38);
    gridHelper.position.y = -2.4;
    scene.add(gridHelper);

    // Model Generators
    function buildHexNipple() {
      const group = new THREE.Group();

      // Hex body
      const hexGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.8, 6);
      const hex = new THREE.Mesh(hexGeo, brassMaterial);
      group.add(hex);

      // Top thread
      const t1Geo = new THREE.CylinderGeometry(0.95, 1.0, 1.5, 36);
      const t1 = new THREE.Mesh(t1Geo, brassMaterial);
      t1.position.y = 1.15;
      group.add(t1);

      // Top thread ridges
      for (let i = 0; i < 7; i++) {
        const rGeo = new THREE.TorusGeometry(1.01, 0.04, 12, 36);
        const r = new THREE.Mesh(rGeo, brassAccentMat);
        r.rotation.x = Math.PI / 2;
        r.position.y = 0.55 + i * 0.18;
        group.add(r);
      }

      // Bottom thread
      const t2Geo = new THREE.CylinderGeometry(1.0, 0.95, 1.5, 36);
      const t2 = new THREE.Mesh(t2Geo, brassMaterial);
      t2.position.y = -1.15;
      group.add(t2);

      for (let i = 0; i < 7; i++) {
        const rGeo = new THREE.TorusGeometry(1.01, 0.04, 12, 36);
        const r = new THREE.Mesh(rGeo, brassAccentMat);
        r.rotation.x = Math.PI / 2;
        r.position.y = -0.55 - i * 0.18;
        group.add(r);
      }

      // Hollow fluid bore
      const bore = new THREE.Mesh(
        new THREE.CylinderGeometry(0.65, 0.65, 3.85, 24),
        new THREE.MeshBasicMaterial({ color: 0x07080a })
      );
      group.add(bore);

      return group;
    }

    function buildElbow() {
      const group = new THREE.Group();

      const bend = new THREE.Mesh(
        new THREE.TorusGeometry(1.2, 0.65, 24, 32, Math.PI / 2),
        brassMaterial
      );
      bend.rotation.z = -Math.PI / 2;
      group.add(bend);

      // Horizontal leg & thread
      const hLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.0, 32), brassMaterial);
      hLeg.rotation.z = Math.PI / 2;
      hLeg.position.set(1.2, 0, 0);
      group.add(hLeg);

      const hCollar = new THREE.Mesh(new THREE.CylinderGeometry(0.88, 0.88, 0.45, 6), brassMaterial);
      hCollar.rotation.z = Math.PI / 2;
      hCollar.position.set(1.6, 0, 0);
      group.add(hCollar);

      // Vertical leg & thread
      const vLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 1.0, 32), brassMaterial);
      vLeg.position.set(0, -1.2, 0);
      group.add(vLeg);

      for (let i = 0; i < 5; i++) {
        const r = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.035, 12, 32), brassAccentMat);
        r.rotation.x = Math.PI / 2;
        r.position.set(0, -1.1 - i * 0.16, 0);
        group.add(r);
      }

      return group;
    }

    function buildHoseBarb() {
      const group = new THREE.Group();

      const hex = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.7, 6), brassMaterial);
      group.add(hex);

      // Male NPT bottom
      const npt = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.92, 1.2, 32), brassMaterial);
      npt.position.y = -0.95;
      group.add(npt);

      for (let i = 0; i < 5; i++) {
        const r = new THREE.Mesh(new THREE.TorusGeometry(0.92, 0.035, 10, 32), brassAccentMat);
        r.rotation.x = Math.PI / 2;
        r.position.y = -0.5 - i * 0.18;
        group.add(r);
      }

      // Stem & barbs
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 2.0, 32), brassMaterial);
      stem.position.y = 1.35;
      group.add(stem);

      for (let i = 0; i < 5; i++) {
        const barb = new THREE.Mesh(new THREE.ConeGeometry(0.76, 0.42, 32), brassMaterial);
        barb.position.y = 0.65 + i * 0.42;
        group.add(barb);
      }

      return group;
    }

    function buildBushing() {
      const group = new THREE.Group();
      const body = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 2.4, 36), brassMaterial);
      group.add(body);

      // Knurled bands
      const knurl1 = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.65, 32), brassAccentMat);
      knurl1.position.y = 0.4;
      group.add(knurl1);

      const knurl2 = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 0.65, 32), brassAccentMat);
      knurl2.position.y = -0.4;
      group.add(knurl2);

      const topFlange = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.3, 36), brassMaterial);
      topFlange.position.y = 1.2;
      group.add(topFlange);

      return group;
    }

    // Load active model
    function loadModel(type: "nipple" | "elbow" | "barb" | "bushing") {
      if (currentModelGroupRef.current) {
        scene.remove(currentModelGroupRef.current);
      }
      let model: THREE.Group;
      if (type === "nipple") model = buildHexNipple();
      else if (type === "elbow") model = buildElbow();
      else if (type === "barb") model = buildHoseBarb();
      else model = buildBushing();

      model.rotation.x = modelRotationRef.current.x;
      model.rotation.y = modelRotationRef.current.y;
      scene.add(model);
      currentModelGroupRef.current = model;
    }

    loadModel(selectedModel);

    // Mouse Interaction for Drag Orbit
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !currentModelGroupRef.current) return;
      const deltaX = e.clientX - prevMouseRef.current.x;
      const deltaY = e.clientY - prevMouseRef.current.y;

      modelRotationRef.current.y += deltaX * 0.008;
      modelRotationRef.current.x += deltaY * 0.008;

      currentModelGroupRef.current.rotation.y = modelRotationRef.current.y;
      currentModelGroupRef.current.rotation.x = modelRotationRef.current.x;

      prevMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Wheel zoom
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.min(Math.max(camera.position.z + e.deltaY * 0.005, 4.5), 11);
    };
    dom.addEventListener("wheel", handleWheel, { passive: false });

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Render loop with 2D projection calculation for callout pins
    let animId: number;
    const tempVec = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      if (autoRotate && !isDraggingRef.current && currentModelGroupRef.current) {
        modelRotationRef.current.y += 0.004;
        currentModelGroupRef.current.rotation.y = modelRotationRef.current.y;
      }

      // Calculate 2D Screen coordinates for Hotspots
      if (container && camera && currentModelGroupRef.current) {
        const w = container.clientWidth;
        const h = container.clientHeight;
        const screenPoints = HOTSPOTS.map((spot) => {
          tempVec.set(...spot.position3D);
          tempVec.applyEuler(currentModelGroupRef.current!.rotation);
          tempVec.project(camera);

          const x = (tempVec.x * 0.5 + 0.5) * w;
          const y = (-(tempVec.y * 0.5) + 0.5) * h;
          const visible = tempVec.z < 1.0;

          return { id: spot.id, x, y, visible };
        });
        setScreenHotspots(screenPoints);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      dom.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      dom.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [selectedModel]);

  // Wireframe toggle update
  useEffect(() => {
    if (brassMatRef.current) {
      brassMatRef.current.wireframe = isWireframe;
      brassMatRef.current.needsUpdate = true;
    }
  }, [isWireframe]);

  const handleZoom = (direction: "in" | "out") => {
    if (!cameraRef.current) return;
    const step = direction === "in" ? -1.0 : 1.0;
    cameraRef.current.position.z = Math.min(Math.max(cameraRef.current.position.z + step, 4.5), 11);
  };

  const handleResetView = () => {
    if (!cameraRef.current || !currentModelGroupRef.current) return;
    cameraRef.current.position.set(0, 0, 7.5);
    modelRotationRef.current = { x: 0.25, y: 0.4 };
    currentModelGroupRef.current.rotation.set(0.25, 0.4, 0);
  };

  return (
    <div className="relative w-full rounded-2xl bg-industrial-black border border-industrial-border-brass overflow-hidden shadow-2xl">
      {/* Top Header / Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 border-b border-white/10 bg-industrial-charcoal/90 backdrop-blur-md z-20 relative">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-brass-500/10 border border-brass-500/30 text-xs font-mono text-brass-300">
            <span className="w-2 h-2 rounded-full bg-brass-400 animate-pulse" />
            LIVE 3D METROLOGY INSPECTOR
          </div>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            TOLERANCE: <strong className="text-white">±0.01 mm</strong> • METRIC/INCH CAD DATA
          </span>
        </div>

        {/* Model Switcher Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-neutral-900 border border-white/10">
          {[
            { id: "nipple", label: "Hex Nipple" },
            { id: "elbow", label: "90° Elbow" },
            { id: "barb", label: "Hose Barb" },
            { id: "bushing", label: "CNC Bushing" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedModel(item.id as any)}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                selectedModel === item.id
                  ? "bg-brass-500 text-black font-semibold shadow-md"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Canvas Viewport */}
      <div className="relative w-full h-[520px] md:h-[620px] cursor-grab active:cursor-grabbing">
        <div ref={containerRef} className="w-full h-full" />

        {/* Technical Corner Watermark & Crosshairs */}
        <div className="absolute top-4 left-4 pointer-events-none text-[11px] font-mono text-neutral-500 space-y-1">
          <p className="text-brass-400/90 font-semibold">ABC BRASS CAD-VIEW // REV 4.2</p>
          <p>JAMNAGAR FACILITY METROLOGY</p>
          <p>OPTICAL COMPARATOR: CW614N</p>
        </div>

        {/* Hotspot Interactive Pins projected on canvas */}
        {screenHotspots.map((spot) => {
          const detail = HOTSPOTS.find((h) => h.id === spot.id);
          if (!detail || !spot.visible) return null;
          const isActive = activeHotspot?.id === spot.id;

          return (
            <div
              key={spot.id}
              style={{ left: `${spot.x}px`, top: `${spot.y}px` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-all pointer-events-auto"
            >
              <button
                onClick={() => setActiveHotspot(detail)}
                className={`group flex items-center gap-2 p-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-brass-500 text-black ring-4 ring-brass-500/30 scale-110"
                    : "bg-industrial-charcoal/90 text-brass-300 border border-brass-500/50 hover:border-brass-400 hover:scale-105"
                }`}
                title={detail.title}
              >
                <Crosshair className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-brass-400"}`} />
                <span className={`text-[10px] font-mono pr-1.5 uppercase font-bold tracking-wider ${isActive ? "text-black" : "text-white hidden sm:inline"}`}>
                  {detail.title}
                </span>
              </button>
            </div>
          );
        })}

        {/* Floating View Controls */}
        <div className="absolute bottom-4 left-4 z-30 flex items-center gap-1.5 p-1.5 rounded-xl bg-industrial-charcoal/90 border border-white/10 backdrop-blur-md">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors ${
              autoRotate ? "bg-brass-500/20 text-brass-300 border border-brass-500/40" : "text-neutral-400 hover:text-white"
            }`}
            title="Toggle Auto-Rotation"
          >
            <RotateCw className="w-4 h-4" />
            <span className="hidden sm:inline">Orbit</span>
          </button>

          <button
            onClick={() => setIsWireframe(!isWireframe)}
            className={`p-2 rounded-lg text-xs flex items-center gap-1.5 transition-colors ${
              isWireframe ? "bg-brass-500 text-black font-semibold" : "text-neutral-400 hover:text-white"
            }`}
            title="Toggle Blueprint Wireframe"
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Wireframe</span>
          </button>

          <div className="w-[1px] h-5 bg-white/10 mx-1" />

          <button
            onClick={() => handleZoom("in")}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleZoom("out")}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetView}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5"
            title="Reset Perspective"
          >
            <Box className="w-4 h-4" />
          </button>
        </div>

        {/* User Drag Hint */}
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none text-right">
          <p className="text-[11px] font-mono text-neutral-400">
            DRAG TO ROTATE 360° • SCROLL TO ZOOM
          </p>
        </div>
      </div>

      {/* Hotspot Engineering Telemetry Drawer */}
      {activeHotspot && (
        <div className="p-6 bg-gradient-to-r from-industrial-charcoal via-industrial-surface to-industrial-charcoal border-t border-brass-500/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-brass-500/20 text-brass-300 border border-brass-500/30">
                  {activeHotspot.category}
                </span>
                <h4 className="text-base font-bold text-white tracking-wide">
                  {activeHotspot.title}
                </h4>
              </div>
              <p className="text-sm text-neutral-300 max-w-2xl">
                {activeHotspot.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 shrink-0 w-full md:w-auto">
              <div className="p-3 rounded-lg bg-black/40 border border-white/10">
                <p className="text-[10px] font-mono text-neutral-400 uppercase">STANDARD / SPEC</p>
                <p className="text-xs font-semibold text-brass-200 mt-0.5">{activeHotspot.spec}</p>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-white/10">
                <p className="text-[10px] font-mono text-neutral-400 uppercase">TOLERANCE / LIMIT</p>
                <p className="text-xs font-semibold text-emerald-400 mt-0.5">{activeHotspot.tolerance}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
