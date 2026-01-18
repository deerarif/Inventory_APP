export function generateTailwind300Variants(count) {
  const palette = [
    { r: 196, g: 181, b: 253 }, // purple-300
    { r: 147, g: 197, b: 253 }, // blue-300
    { r: 134, g: 239, b: 172 }, // green-300
  ];

  return {
    backgroundColor: Array.from({ length: count }, (_, i) => {
      const color = palette[i % palette.length];
      const alpha = 0.18 + (i % 4) * 0.04;
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
    }),
    borderColor: Array.from({ length: count }, (_, i) => {
      const color = palette[i % palette.length];
      const alpha = 0.85 + (i % 4) * 0.04;
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
    }),
  };
}
