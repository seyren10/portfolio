import { ProjectGallery } from "@/components/ProjectGallery"
import PuyoDashboardImage from "@/assets/puyo/puyo_dashboard.png"

const images = [
  {
    src: PuyoDashboardImage,
    alt: "Puyo dashboard showing active groups, collection progress, and upcoming cycles",
  },
]

export function PuyoGallery() {
  return (
    <ProjectGallery
      name="Puyo"
      images={images}
      className="aspect-video"
    />
  )
}
