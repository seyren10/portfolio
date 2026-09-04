import { ProjectGallery } from "@/components/ProjectGallery"
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
  return (
    <ProjectGallery
      name="Asset Management System"
      images={images}
      className="aspect-square"
    />
  )
}
