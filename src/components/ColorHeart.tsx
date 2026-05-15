import { Heart } from "lucide-react";
import "@css/components/color-heart.css";

interface ColorHeartProps {
  fillColor: boolean;
}

export function ColorHeart({ fillColor }: ColorHeartProps) {
  return <Heart className="heart" fill={fillColor ? "currentColor" : "none"} />;
}
