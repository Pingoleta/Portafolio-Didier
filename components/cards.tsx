// import { Card, CardHeader, CardBody } from "@heroui/card";
// import { Image } from "@heroui/image";

// export default function App() {
//   return (
//     <Card className="py-4">
//       <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        
//         <small className="text-default-500">Habilidades blandas</small>
//         <h4 className="font-bold text-large">Resilencia</h4>
//       </CardHeader>
//       <CardBody className="overflow-visible py-2">
//         <Image
//           alt="Card background"
//           className="object-cover rounded-xl"
//           src="https://heroui.com/images/hero-card-complete.jpeg"
//           width={270}
//         />
//       </CardBody>
//     </Card>
    
    
//   );
// }

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";

const items = [
  { id: "1", title: "Resilencia", img: "/media/resilencia.png" },
  { id: "2", title: "Honestidad", img: "/media/honetidad.png" },
  { id: "3", title: "Comunicacion", img: "media/comicacion.png" },
  // agrega más objetos...
];

export default function CardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        
        <Card key={item.id} className="py-4">
            <h2 className="ml-4">habilidad blanda</h2>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            
            
            
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image alt={item.title} className="object-cover rounded-xl" src={item.img} width={270} />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}