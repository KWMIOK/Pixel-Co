import logoLight from "../assets/brand/pixel-co-logo.png";
import logoDark from "../assets/brand/pixel-co-logo-dark.png";

export default function BrandLogo({ variant = "light", className = "" }) {
  const src = variant === "dark" ? logoDark : logoLight;

  return (
    <img
      src={src}
      alt="Pixel & Co."
      className={`brand-logo ${className}`.trim()}
    />
  );
}
