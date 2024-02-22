const Productos = [
    {
      "id": "1",
      "title": "Assassin's Creed Valhalla",
      "price": 59.99,
      "description": "Embárcate en una aventura épica en la era vikinga con Assassin's Creed Valhalla.",
      "category": "Accion-Aventura",
      "image": "https://sm.ign.com/t/ign_es/gallery/a/assassins-/assassins-creed-valhalla-box-art-logos_ukn7.1080.jpg",
    },
    {
      "id": "2",
      "title": "Assassin's Creed Odyssey",
      "price": 39.99,
      "description": "Explora la Antigua Grecia y conviértete en un legendario guerrero espartano.",
      "category": "Accion-Aventura",
      "image": "https://www.vidrieraonline.com.ar/img-load/img/600/0/0/5de2f42aa1d0450146bcbf74a815dc75.jpg",
    },
    {
      "id": "3",
      "title": "Assassin's Creed Origins",
      "price": 29.99,
      "description": "Descubre los orígenes de la hermandad de los Assassins en el antiguo Egipto.",
      "category": "Accion-Aventura",
      "image": "https://media.vandal.net/m/35390/assassins-creed-origins-201761315021_1.jpg",
    },
    {
      "id": "4",
      "title": "Assassin's Creed Unity",
      "price": 19.99,
      "description": "Sumérgete en la Revolución Francesa y lucha por la libertad y la justicia.",
      "category": "Accion-Aventura",
      "image": "https://woogar.com/wp-content/uploads/2022/12/Assassins-Creed-Unity-PS5-RETRO.webp",
    },
    {
      "id": "5",
      "title": "FIFA 22",
      "price": 59.99,
      "description": "Vive el juego del mundo con EA SPORTS FIFA 22 y siente la pasión del fútbol en cada momento.",
      "category": "Deportes",
      "image": "https://juegosdigitalesargentina.com/files/images/productos/1626128314-fifa-22-ps4-pre-orden.jpg"
    },
    {
      "id": "6",
      "title": "FIFA 21",
      "price": 49.99,
      "description": "Experimenta una nueva era de juego con EA SPORTS FIFA 21 y lleva tu equipo a la cima del fútbol.",
      "category": "Deportes",
      "image": "https://woogar.com/wp-content/uploads/2020/07/FIFA-21-PS4.jpg"
    },
    {
      "id": "7",
      "title": "FIFA 20",
      "price": 39.99,
      "description": "Disfruta del emocionante fútbol virtual con EA SPORTS FIFA 20 y experimenta la autenticidad del deporte rey.",
      "category": "Deportes",
      "image": "https://elcomercio.pe/resizer/EBTCPpUtdOQGIM2RJnAReicFcEY=/620x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/SCWUJVG32RBWHMDO34D7P2LHBU.png"
    },
    {
      "id": "8",
      "title": "FIFA 19",
      "price": 29.99,
      "description": "Sumérgete en el mundo del fútbol con EA SPORTS FIFA 19 y haz historia en el campo de juego.",
      "category": "Deportes",
      "image": "https://juegosdigitalesargentina.com/files/images/productos/1634691554-fifa-19-ps4.jpg"
    },
    {
      "id": "9",
      "title": "Call of Duty: Modern Warfare",
      "price": 59.99,
      "description": "Sumérgete en la intensa experiencia de combate con Call of Duty: Modern Warfare, un juego de acción y disparos en primera persona.",
      "category": "Armas",
      "image": "https://ps4digitalargentina.com/files/images/productos/1698953356-call-of-duty-modern-warfare-iii-ps4-0.jpg"
    },
    {
      "id": "10",
      "title": "Call of Duty: Black Ops Cold War",
      "price": 49.99,
      "description": "Únete a la clandestinidad en la Guerra Fría con Call of Duty: Black Ops Cold War, donde las operaciones encubiertas y la intriga política dominan el campo de batalla.",
      "category": "Armas",
      "image": "https://kalimagames.com/wp-content/uploads/2022/09/COVER-PS4-BORDES-RECTOS.jpg"
    },
    {
      "id": "11",
      "title": "Call of Duty: Warzone",
      "price": 0.00,
      "description": "Descarga y juega gratis a Call of Duty: Warzone, un battle royale masivo que combina acción trepidante y estrategia en un campo de batalla épico.",
      "category": "Armas",
      "image": "https://kalimagames.com/wp-content/uploads/2022/10/COVER-PS4-BORDES-RECTOS-5.jpg"
    },
    {
      "id": "12",
      "title": "Call of Duty: WWII",
      "price": 39.99,
      "description": "Revive la brutalidad y el heroísmo de la Segunda Guerra Mundial con Call of Duty: WWII, donde la camaradería y el sacrificio se unen en la lucha por la libertad.",
      "category": "Armas",
      "image": "https://spacegamer.com.ar/img/Public/1058-producto-4558c342-92b8-49b7-b2ec-3ede39855cbf-7025.jpg"
    }

]


export const getProductos =()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(Productos)
      },500)
    })
}

export const getProductosById = (productoId)=>{
    return new Promise ((resolve)=>{
      resolve(Productos.find(prod=> prod.id === productoId))
    },500)
}

export const getProductosByCategory = (categoryId)=>{
    return new Promise ((resolve)=>{
      resolve(Productos.filter(prod=> prod.category === categoryId))
    },500)
}

