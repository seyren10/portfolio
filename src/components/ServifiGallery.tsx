import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import ServifiDashboardImage from "@/assets/servifi/servifi_dashboard.png"
import ServifiOrdersImage from "@/assets/servifi/servifi_orders.png"
import ServifiProductsImage from "@/assets/servifi/servifi_products.png"
import ServifiServicesImage from "@/assets/servifi/servifi_services.png"
import ServifiTableManagementImage from "@/assets/servifi/servifi_table_management.png"
import ServifiMobileGrillsImage from "@/assets/servifi/servifi_mobile_grills.jpg"
import ServifiMobileOrdersImage from "@/assets/servifi/servifi_mobile_orders.jpg"
import ServifiMobileBillOutImage from "@/assets/servifi/servifi_mobile_bill_out.jpg"

const images = [
  {
    src: ServifiMobileGrillsImage,
    alt: "Servifi Mobile Grills",
  },
  {
    src: ServifiDashboardImage,
    alt: "Servifi Dashboard",
  },
  {
    src: ServifiOrdersImage,
    alt: "Servifi Orders Management",
  },
  {
    src: ServifiProductsImage,
    alt: "Servifi Products Management",
  },
  {
    src: ServifiMobileOrdersImage,
    alt: "Servifi Mobile Orders",
  },
  {
    src: ServifiMobileBillOutImage,
    alt: "Servifi Mobile Bill out",
  },
  {
    src: ServifiServicesImage,
    alt: "Servifi Services",
  },
  {
    src: ServifiTableManagementImage,
    alt: "Servifi Table Management",
  },
]

export function ServifiGallery() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className="aspect-square cursor-pointer transition-transform hover:scale-105"
      >
        <img
          src={images[0].src.src}
          alt={images[0].alt}
          className="w-full"
          loading="lazy"
        />
      </button>

      <DialogContent showCloseButton>
        <DialogTitle className="sr-only">Gallery</DialogTitle>
        <DialogDescription className="sr-only">
          Gallery for Servifi
        </DialogDescription>
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image.src.src} alt={image.alt} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2" />
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2" />
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
