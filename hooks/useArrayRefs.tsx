import { RefObject, useRef } from "react";

export function useArrayRef(): [
  RefObject<(HTMLDivElement | null)[]>,
  (ref: HTMLDivElement | null) => void
] {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  refs.current = [];
  const addRef = (ref: HTMLDivElement | null) => ref && refs.current.push(ref);
  return [refs, addRef];
}
