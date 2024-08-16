import {useToggle} from "usehooks-ts";

export const DEFAULT_TRUNCATION_LENGTH = 100;

export const useTruncate = (
  s: string,
  maxLength = DEFAULT_TRUNCATION_LENGTH
) => {
  const [isTruncated, toggleTruncate] = useToggle();
  const isOverflowing = s.length > maxLength;
  return {
    isTruncated,
    toggleTruncate,
    isOverflowing,
    text: s.slice(0, maxLength),
  };
};
