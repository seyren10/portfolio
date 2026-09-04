import { ProjectGallery } from "@/components/ProjectGallery"
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
  return (
    <ProjectGallery
      name="Servifi"
      images={images}
      className="aspect-square"
    />
  )
}
