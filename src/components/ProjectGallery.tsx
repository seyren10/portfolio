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
  type CarouselApi,
} from "@/components/ui/carousel"
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
          "group relative block cursor-zoom-in overflow-hidden",
          className,
          "mx-auto aspect-square w-full max-w-xs"
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

      {/* Frameless lightbox: only the screenshot itself is rendered, no
         card/background/border around it. Clicking anywhere that isn't the
         image (or a control) dismisses the dialog, same as clicking the
         backdrop. */}
      <DialogContent
        showCloseButton={false}
        className="h-[85vh] w-[94vw] max-w-[1600px] gap-0 overflow-visible rounded-none border-0 bg-transparent p-0 shadow-none ring-0 outline-none sm:h-[90vh] sm:w-[90vw] sm:max-w-[1600px]"
      >
        <DialogTitle className="sr-only">{name} screenshots</DialogTitle>
        <DialogDescription className="sr-only">
          Screenshot gallery for {name}
        </DialogDescription>

        <Carousel setApi={setApi} className="relative h-full w-full">
          <CarouselContent className="ml-0 h-full">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="flex h-[85vh] items-center justify-center pl-0 sm:h-[90vh]"
                onClick={(event) => {
                  if (event.target === event.currentTarget) setOpen(false)
                }}
              >
                <img
                  src={resolveSrc(image.src)}
                  alt={image.alt}
                  className="max-h-full max-w-full object-contain"
                  draggable={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {hasMultiple && (
            <>
              <CarouselPrevious
                size="icon"
                className="-left-2 size-9 border-0 bg-background/80 text-foreground shadow-lg backdrop-blur hover:bg-background sm:-left-6 sm:size-11 md:-left-10 lg:-left-14"
              />
              <CarouselNext
                size="icon"
                className="-right-2 size-9 border-0 bg-background/80 text-foreground shadow-lg backdrop-blur hover:bg-background sm:-right-6 sm:size-11 md:-right-10 lg:-right-14"
              />
            </>
          )}

          {hasMultiple && (
            <div className="pointer-events-none absolute -bottom-10 left-1/2 z-20 -translate-x-1/2 sm:-bottom-14">
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
