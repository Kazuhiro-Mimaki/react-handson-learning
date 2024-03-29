import { useCallback, useMemo, useState } from "react";

export const useIterator = <T>(
  items: T[] = [],
  initialValue: number = 0
): [T, () => void, () => void] => {
  const [i, setIndex] = useState(initialValue);

  const prev = useCallback(() => {
    if (i === 0) {
      return setIndex(items.length - 1);
    }
    setIndex(i - 1);
  }, [items.length, i]);

  const next = useCallback(() => {
    if (i === items.length - 1) {
      return setIndex(0);
    }
    setIndex(i + 1);
  }, [items.length, i]);

  const item = useMemo(() => items[i], [items, i]);

  return [item || items[0], prev, next];
};
