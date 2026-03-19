import { ChevronDown, GithubIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export function ServifiLinks() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <HugeiconsIcon icon={GithubIcon} className="size-4" />
          View Code
          <HugeiconsIcon icon={ChevronDown} className="size-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <a
            href="https://github.com/seyren10/servifi-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full"
          >
            Frontend
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a
            href="https://github.com/seyren10/servifi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full"
          >
            Backend
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
