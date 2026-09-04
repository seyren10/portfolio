import { ProjectGallery } from "@/components/ProjectGallery"
import PuyoShot1Image from "@/assets/puyo/puyo-shot-3-dashboard.png"
import PuyoShot2Image from "@/assets/puyo/puyo-shot-5-features.png"
import PuyoShot3Image from "@/assets/puyo/puyo-shot-2-completed.png"
import PuyoShot4Image from "@/assets/puyo/puyo-shot-1-ledger.png"

const images = [
  {
    src: PuyoShot1Image,
    alt: "Dashboard",
  },
  {
    src: PuyoShot2Image,
    alt: "features",
  },
  {
    src: PuyoShot3Image,
    alt: "completed",
  },
  {
    src: PuyoShot4Image,
    alt: "ledger",
  },
]

export function PuyoGallery() {
  return <ProjectGallery name="Puyo" images={images} className="aspect-video" />
}
