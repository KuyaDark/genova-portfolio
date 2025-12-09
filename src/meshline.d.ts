// src/meshline.d.ts
import { ReactThreeFiber } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: ReactThreeFiber.Object3DNode<any, any>;
      meshLineMaterial: ReactThreeFiber.Object3DNode<any, any>;
    }
  }
}

export {};
