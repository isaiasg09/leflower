import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function createBokehTexture() {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    2,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, 'rgba(255, 248, 220, 1)');
  gradient.addColorStop(0.32, 'rgba(212, 175, 55, 0.72)');
  gradient.addColorStop(0.7, 'rgba(166, 156, 107, 0.18)');
  gradient.addColorStop(1, 'rgba(15, 17, 21, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function GoldMotes({ count = 90 }) {
  const pointsRef = useRef(null);

  const { positions, colors, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    const palette = [
      new THREE.Color('#D4AF37'),
      new THREE.Color('#E8C962'),
      new THREE.Color('#A69C6B'),
    ];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 12;
      pos[i3 + 1] = (Math.random() - 0.5) * 8;
      pos[i3 + 2] = (Math.random() - 0.5) * 5;

      const c = palette[i % palette.length];
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;

      spd[i] = 0.12 + Math.random() * 0.24;
    }

    return { positions: pos, colors: col, speeds: spd };
  }, [count]);

  const sprite = useMemo(() => createBokehTexture(), []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const attr = pointsRef.current.geometry.attributes.position;
    const arr = attr.array;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      arr[i3 + 1] += speeds[i] * delta;
      arr[i3] += Math.sin(t * 0.45 + i) * 0.0022;

      if (arr[i3 + 1] > 4.2) {
        arr[i3 + 1] = -4.2;
      }
    }
    attr.needsUpdate = true;

    pointsRef.current.rotation.y = THREE.MathUtils.lerp(
      pointsRef.current.rotation.y,
      state.pointer.x * 0.08,
      0.03
    );
    pointsRef.current.rotation.x = THREE.MathUtils.lerp(
      pointsRef.current.rotation.x,
      -state.pointer.y * 0.05,
      0.03
    );
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.19}
        map={sprite}
        vertexColors
        transparent
        opacity={0.78}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export default function GoldenDustCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.8], fov: 48 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: 'low-power',
        }}
      >
        <GoldMotes count={90} />
      </Canvas>
    </div>
  );
}
