import * as React from "react"
import {
  Dialog,
  DialogClose,
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
  type CarouselApi,
} from "@/components/ui/carousel"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"

type ImageSource = { src: string } | string

export type ProjectGalleryImage = {
  src: ImageSource
  alt: string
}

type ProjectGalleryProps = {
  name: string
  images: ProjectGalleryImage[]
  className?: string
  imageClassName?: string
}

function resolveSrc(src: ImageSource) {
  return typeof src === "string" ? src : src.src
}

function GalleryCloseButton() {
  return (
    <DialogClose asChild>
      <button
        className="absolute top-3 right-3 z-20 grid size-9 place-items-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70 sm:top-5 sm:right-5"
        aria-label="Close gallery"
      >
        <HugeiconsIcon
          icon={Cancel01Icon}
          className="size-4"
          strokeWidth={2}
        />
      </button>
    </DialogClose>
  )
}

export function ProjectGallery({
  name,
  images,
  className,
  imageClassName,
}: ProjectGalleryProps) {
  const [open, setOpen] = React.useState(false)
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const hasMultiple = images.length > 1

  React.useEffect(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (next) api?.scrollTo(0)
      }}
    >
      <button
        onClick={() => setOpen(true)}
        aria-label={`Open ${name} screenshot gallery`}
        className={cn(
          "group relative block h-full w-full cursor-zoom-in overflow-hidden",
          className
        )}
      >
        <img
          src={resolveSrc(images[0].src)}
          alt={images[0].alt}
          className={cn(
            "h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]",
            imageClassName
          )}
          loading="lazy"
        />
      </button>

      <DialogContent
        showCloseButton={false}
        className="h-[85vh] w-[94vw] max-w-[1600px] gap-0 overflow-hidden rounded-2xl border-0 bg-background p-0 ring-1 ring-foreground/10 sm:h-[90vh] sm:w-[90vw]"
      >
        <DialogTitle className="sr-only">{name} screenshots</DialogTitle>
        <DialogDescription className="sr-only">
          Screenshot gallery for {name}
        </DialogDescription>

        <Carousel setApi={setApi} className="relative h-full">
          <CarouselContent className="ml-0 h-full">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex h-[85vh] items-center justify-center bg-background pl-0 sm:h-[90vh]"
              >
                <img
                  src={resolveSrc(image.src)}
                  alt={image.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <GalleryCloseButton />

          {hasMultiple && (
            <>
              <CarouselPrevious
                size="icon"
                className="left-3 size-9 border-border bg-card/90 text-foreground shadow-lg backdrop-blur hover:bg-card sm:size-11 sm:left-5"
              />
              <CarouselNext
                size="icon"
                className="right-3 size-9 border-border bg-card/90 text-foreground shadow-lg backdrop-blur hover:bg-card sm:size-11 sm:right-5"
              />
            </>
          )}

          {hasMultiple && (
            <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 sm:bottom-5">
              <span className="rounded-full border border-border bg-card px-4 py-1.5 font-mono text-[11px] tracking-widest text-muted-foreground uppercase shadow-sm">
                Screenshot {current + 1} of {images.length}
              </span>
            </div>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  )
}
