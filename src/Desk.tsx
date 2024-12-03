import { DESK_LEG_SIZE, DESK_SIZE } from "./lib/constants";

export const DESK_LEG_Y = -DESK_SIZE.y / 2 - DESK_LEG_SIZE.y / 2;
export const DESK_LEG_Z_NEAR =
  DESK_SIZE.z - DESK_SIZE.z / 2 - DESK_LEG_SIZE.z / 2;
export const DESK_LEG_Z_FAR =
  -DESK_SIZE.z + DESK_SIZE.z / 2 + DESK_LEG_SIZE.z / 2;

export const BOTTOM_LEG_Y =
  DESK_LEG_Y - DESK_LEG_SIZE.y / 2 + DESK_LEG_SIZE.z / 2;

type DeskProps = {
  color?: string;
} & JSX.IntrinsicElements["group"];

export default function Desk(props: DeskProps) {
  return (
    <group position-y={DESK_LEG_Y - DESK_SIZE.y} {...props}>
      <mesh>
        <boxGeometry args={[DESK_SIZE.x, DESK_SIZE.y, DESK_SIZE.z]} />
        <meshPhongMaterial color={props.color ?? "#83600f"} />
      </mesh>
      {/* First leg */}
      <mesh position={[-0.95, DESK_LEG_Y, DESK_LEG_Z_NEAR]}>
        <boxGeometry
          args={[DESK_LEG_SIZE.x, DESK_LEG_SIZE.y, DESK_LEG_SIZE.z]}
        />
        <meshPhongMaterial color="black" />
      </mesh>
      <mesh position={[-0.95, DESK_LEG_Y, DESK_LEG_Z_FAR]}>
        <boxGeometry
          args={[DESK_LEG_SIZE.x, DESK_LEG_SIZE.y, DESK_LEG_SIZE.z]}
        />
        <meshPhongMaterial color="black" />
      </mesh>

      {/* Left bottom leg */}

      <mesh position={[-0.95, BOTTOM_LEG_Y, 0]}>
        <boxGeometry
          args={[DESK_LEG_SIZE.x, DESK_LEG_SIZE.z, 1 - DESK_LEG_SIZE.z * 2]}
        />
        <meshPhongMaterial color="black" />
      </mesh>

      {/* Right near leg */}

      <mesh position={[0.95, DESK_LEG_Y, DESK_LEG_Z_NEAR]}>
        <boxGeometry
          args={[DESK_LEG_SIZE.x, DESK_LEG_SIZE.y, DESK_LEG_SIZE.z]}
        />
        <meshPhongMaterial color="black" />
      </mesh>

      {/* Right far leg */}
      <mesh position={[0.95, DESK_LEG_Y, DESK_LEG_Z_FAR]}>
        <boxGeometry
          args={[DESK_LEG_SIZE.x, DESK_LEG_SIZE.y, DESK_LEG_SIZE.z]}
        />
        <meshPhongMaterial color="black" />
      </mesh>

      {/* Right bottom leg */}
      <mesh position={[0.95, BOTTOM_LEG_Y, 0]}>
        <boxGeometry
          args={[DESK_LEG_SIZE.x, DESK_LEG_SIZE.z, 1 - DESK_LEG_SIZE.z * 2]}
        />
        <meshPhongMaterial color="black" />
      </mesh>
    </group>
  );
}
