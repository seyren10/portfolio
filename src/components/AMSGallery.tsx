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
import AMSDashboardImage from "@/assets/asset_management_system/dashboard.png"
import AMSDevicesImage from "@/assets/asset_management_system/devices.png"
import AMSEmployeesImage from "@/assets/asset_management_system/employees.png"
import AMSTypesImage from "@/assets/asset_management_system/types.png"

const images = [
  {
    src: AMSDashboardImage,
    alt: "Asset Management System Dashboard",
  },
  {
    src: AMSDevicesImage,
    alt: "Devices Management",
  },
  {
    src: AMSEmployeesImage,
    alt: "Employees Management",
  },
  {
    src: AMSTypesImage,
    alt: "Asset Types",
  },
]

export function AMSGallery() {
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

      <DialogContent
        className="h-[95vh]! max-h-[95vh]! w-[95vw]! max-w-[95vw]! gap-0 overflow-hidden p-0"
        showCloseButton
      >
        <DialogTitle className="sr-only">Gallery</DialogTitle>
        <DialogDescription className="sr-only">
          Gallery for Asset Management System
        </DialogDescription>
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex h-full w-full min-w-0 items-center justify-center p-4"
              >
                <img
                  src={image.src.src}
                  alt={image.alt}
                  className="max-h-full max-w-full object-contain"
                />
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
