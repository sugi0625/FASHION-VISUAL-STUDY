import { FashionVisual } from "@/components/fashion-visual";
import { FashionVisualOpening } from "@/components/fashion-visual-opening";
import { FashionVisualMood } from "@/components/fashion-visual-mood";
import { FashionVisualProduct } from "@/components/fashion-visual-product";
import { FashionVisualStyleNotes } from "@/components/fashion-visual-style-notes";
import { FashionVisualStory } from "@/components/fashion-visual-story";
import { FashionVisualDetails } from "@/components/fashion-visual-details";

export default function Home() {
  return (
    <main id="main-content">
      <FashionVisual />
      <FashionVisualOpening />
      <FashionVisualMood />
      <FashionVisualProduct />
      <FashionVisualStyleNotes />
      <FashionVisualStory />
      <FashionVisualDetails />
    </main>
  );
}
