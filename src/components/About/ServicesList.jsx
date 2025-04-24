import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

const servicesList = [
  {
    id: 0,
    imgUrl:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1711474687/icons8-web-design-48_gnapn7.png",
    displayText: "RESPONSIVE DESIGN",
    description: "Designs that adapt smoothly to all screen sizes and devices.",
    serviceVectorImg:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1745514802/RESPONSIVE_IMAGE_xn4alt.jpg",
  },
  {
    id: 1,
    imgUrl: "https://img.icons8.com/fluency/48/cloud-sync--v1.png",
    displayText: "LIGHT SPEED",
    description: "Optimized for fast loading and seamless performance.",
    serviceVectorImg:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1745514803/SPEED_UI_IMAGE_zeshvr.jpg",
  },
  {
    id: 2,
    imgUrl: "https://img.icons8.com/fluency/48/security-user-male.png",
    displayText: "GOOGLE AUTHENTICATION",
    description: "Secure login using Google account integration.",
    serviceVectorImg:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1745514805/AUTHENTICATION_IMAGE_tp4fow.jpg",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1711474591/icons8-chat-48_nhdaih.png",
    displayText: "LIVE CHAT",
    description: "Real-time messaging support for instant communication. Built using Socket.IO to enable bi-directional communication. Ensures low-latency and reliable message delivery across clients.",
    serviceVectorImg:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1745514802/LIVE_CHAT_IMAGE_ubnv0c.jpg",
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1711474585/icons8-api-48_h8s1b5.png",
    displayText: "API Integration",
    description: "Seamless integration with third-party APIs and services.",
    serviceVectorImg:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1745514803/API_INTEGRATIONS_IMAGE_vxai8v.jpg",
  },
  {
    id: 5,
    imgUrl:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1711474581/icons8-testing-48_pv9ahs.png",
    displayText: "Testing",
    description: "Ensuring reliability with unit, integration, and UI testing.",
    serviceVectorImg:
      "https://res.cloudinary.com/drdgj0pch/image/upload/v1745514802/TESTING_IMAGE_xvqped.jpg",
  },
];

export function ServicesList() {
  return (
    <BentoGrid className="max-w-4xl mx-auto ">
      {servicesList.map((item, i) => (
        <BentoGridItem
        key={item.id}
        title={item.displayText}
        description={item.description}
        header={
          <img
            src={item.imgUrl}
            alt={item.displayText}
            className="w-12 h-12 object-contain"
          />
        }
        bgVectorUrl={item.serviceVectorImg} 
        className={`${i === 3 || i === 6 ? "md:col-span-2" : ""}`}
      />
      
      ))}
    </BentoGrid>
  );
}
