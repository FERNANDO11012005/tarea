const products = [
  // Electrónica
  {
    id: 1,
    name: "Laptop Lenovo ThinkPad",
    category: "Electrónica",
    price: 820,
    image: "https://laptopmedia.com/wp-content/uploads/2022/09/1-4.jpg",
    description: "Laptop potente con procesador Intel i7, 16GB RAM y SSD de 512GB, ideal para trabajo y estudios."
  },
  {
    id: 2,
    name: "Smartphone Samsung Galaxy S21",
    category: "Electrónica",
    price: 950,
    image: "https://img.us.news.samsung.com/us/wp-content/uploads/2021/01/14084256/Galaxy-S21-Series-Unpacked-2021-38.jpg",
    description: "Teléfono inteligente con cámara triple de 64MP, pantalla AMOLED de 6.2\" y batería de larga duración."
  },
  {
    id: 3,
    name: "Audífonos Sony WH-1000XM4",
    category: "Electrónica",
    price: 300,
    image: "https://www.bhphotovideo.com/images/images2500x2500/sony_wh1000xm4_b_wh_1000xm4_wireless_noise_canceling_over_ear_1582549.jpg",
    description: "Auriculares inalámbricos con cancelación de ruido líder en la industria y hasta 30 horas de batería."
  },
  {
    id: 4,
    name: "Tablet iPad Air",
    category: "Electrónica",
    price: 680,
    image: "https://www.slashgear.com/wp-content/uploads/2020/11/apple-ipad-air-2020-4th-generation-09.jpg",
    description: "Tablet ligera con pantalla Retina de 10.9\" y chip A14 Bionic, perfecta para productividad y entretenimiento."
  },
  {
    id: 5,
    name: "Smartwatch Apple Watch Series 7",
    category: "Electrónica",
    price: 500,
    image: "https://downtown-mag.com/wp-content/uploads/sites/7/2022/08/Apple_Watch_Series_7_DT_WEB_Res-0961.jpg",
    description: "Smartwatch con pantalla siempre activa, monitoreo de salud y conectividad completa con iPhone."
  },
  {
    id: 6,
    name: "Cámara Canon EOS R6",
    category: "Electrónica",
    price: 2500,
    image: "https://www.cameralabs.com/wp-content/uploads/2020/07/canon-eos-r6-hero1.jpg",
    description: "Cámara mirrorless profesional de 20MP con grabación 4K y estabilización de imagen avanzada."
  },
  {
    id: 7,
    name: "Auriculares JBL Tune 510BT",
    category: "Electrónica",
    price: 120,
    image: "https://s3.amazonaws.com/cms.ipressroom.com/214/files/20210/5ff4ea0e2cfac224fb7eb8cc_JBL+TUNE+660NC/JBL+TUNE+660NC_thmb.jpg",
    description: "Auriculares inalámbricos ligeros con sonido potente y hasta 40 horas de reproducción continua."
  },
  {
    id: 8,
    name: "Router Wi-Fi TP-Link",
    category: "Electrónica",
    price: 180,
    image: "https://tse1.mm.bing.net/th/id/OIP.mmw3k2s0ROpqHR2jNeyt7QHaHa?pid=Api&P=0&h=180",
    description: "Router Wi-Fi de doble banda con cobertura amplia y velocidades hasta 1200 Mbps."
  },
  {
    id: 9,
    name: "Monitor LG UltraGear 27\"",
    category: "Electrónica",
    price: 450,
    image: "https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2020/07/LG-UltraGear-27GN950-4K-IPS-Monitor-Featured-image.jpg",
    description: "Monitor gaming 4K de 27\" con tasa de refresco de 144Hz y tiempo de respuesta rápido."
  },
  {
    id: 10,
    name: "Teclado Mecánico Corsair",
    category: "Electrónica",
    price: 150,
    image: "https://m.media-amazon.com/images/I/7193Jl8PejL._AC_SL1500_.jpg",
    description: "Teclado mecánico con retroiluminación RGB, teclas Cherry MX y diseño resistente al desgaste."
  },

  // Ropa
  {
    id: 11,
    name: "Camiseta Nike Dry-Fit",
    category: "Ropa",
    price: 120,
    image: "https://imgnike-a.akamaihd.net/1920x1920/0251941E.jpg",
    description: "Camiseta deportiva ligera con tecnología Dry-Fit que mantiene la piel seca durante el ejercicio."
  },
  {
    id: 12,
    name: "Zapatillas Adidas Run",
    category: "Ropa",
    price: 350,
    image: "https://dpq25p1ucac70.cloudfront.net/seller-place-files/mrkl-files/1803/CALZADO/81003641_0_170131010060_7.jpeg",
    description: "Zapatillas para correr con amortiguación Boost y diseño cómodo para entrenamiento diario."
  },
  {
    id: 13,
    name: "Casaca Puma Sport",
    category: "Ropa",
    price: 450,
    image: "https://home.ripley.com.pe/Attachment/WOP_5/2020318805041/2020318805041_2.jpg",
    description: "Casaca deportiva ligera y resistente al viento, ideal para actividades al aire libre."
  },
  {
    id: 14,
    name: "Pantalón Levis 501",
    category: "Ropa",
    price: 300,
    image: "https://www.gabbavintage.com/wp-content/uploads/2023/06/LEVIS-501-Jeans-Vintage-00s-0101-Bouton-N%C2%B0TO1-7.jpg",
    description: "Clásico pantalón vaquero Levis 501 con ajuste recto y diseño atemporal."
  },
  {
    id: 15,
    name: "Chaqueta North Face",
    category: "Ropa",
    price: 600,
    image: "https://m.media-amazon.com/images/I/61MWVals6tL._AC_SL1500_.jpg",
    description: "Chaqueta resistente al agua con capucha, ideal para clima frío y actividades al aire libre."
  },
  {
    id: 16,
    name: "Bufanda de lana",
    category: "Ropa",
    price: 80,
    image: "https://i.etsystatic.com/8503025/r/il/ec75b9/657961972/il_794xN.657961972_f0cy.jpg",
    description: "Bufanda cálida de lana 100%, perfecta para protegerse del frío con estilo."
  },
  {
    id: 17,
    name: "Gorra Adidas",
    category: "Ropa",
    price: 70,
    image: "https://tse4.mm.bing.net/th/id/OIP.JS_aBH5GEYt4itESO1wuJgAAAA?pid=Api&P=0&h=180",
    description: "Gorra ligera y transpirable con el logo clásico de Adidas, ideal para uso diario."
  },
  {
    id: 18,
    name: "Medias Puma",
    category: "Ropa",
    price: 30,
    image: "https://sporting.vtexassets.com/arquivos/ids/224269/1006978-003-1.jpg?v=637453525468770000",
    description: "Medias deportivas de algodón con soporte en el arco, cómodas y resistentes."
  },
  {
    id: 19,
    name: "Campera Columbia",
    category: "Ropa",
    price: 500,
    image: "https://www.aquadelta.com.ar/img/articulos/campera_softshell_ascender_columbia_11.jpg",
    description: "Campera softshell resistente al viento y agua, ideal para trekking y aventura."
  },
  {
    id: 20,
    name: "Polo Ralph Lauren",
    category: "Ropa",
    price: 220,
    image: "https://dimg.dillards.com/is/image/DillardsZoom/zoom/polo-ralph-lauren--classic-fit-performance-stretch-short-sleeve-polo-shirt/00000000_zi_c30485b2-e89d-448c-a62f-03cff0023548.jpg",
    description: "Polo clásico de algodón con ajuste cómodo y logo bordado, elegante para cualquier ocasión."
  },

  // Hogar
  {
    id: 21,
    name: "Cafetera Philips",
    category: "Hogar",
    price: 700,
    image: "https://images.philips.com/is/image/PhilipsConsumer/HD8827_01-IMS-en_US?$jpglarge$&wid=1250",
    description: "Cafetera de goteo con capacidad para 12 tazas, temporizador y función de aroma intenso."
  },
  {
    id: 22,
    name: "Licuadora Oster",
    category: "Hogar",
    price: 400,
    image: "https://images.fravega.com/f1000/c8f649f406e8b39ee4d97e2ae34b19c2.jpg",
    description: "Licuadora potente de 800W con cuchillas de acero inoxidable para preparar smoothies y salsas."
  },
  {
    id: 23,
    name: "Horno Microondas LG",
    category: "Hogar",
    price: 950,
    image: "http://monchitime.com/www/wp-content/uploads/2013/10/MJ1482BP_front.jpg",
    description: "Microondas con múltiples programas de cocción y capacidad de 28 litros, eficiente y moderno."
  },
  {
    id: 24,
    name: "Aspiradora Samsung",
    category: "Hogar",
    price: 1300,
    image: "https://aspiradoras.pro/wp-content/uploads/2017/03/Aspirador-Samsung-Cyclone-Force.jpg",
    description: "Aspiradora potente con tecnología ciclónica, ideal para todo tipo de superficies."
  },
  {
    id: 25,
    name: "Plancha Rowenta",
    category: "Hogar",
    price: 250,
    image: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202402/19/00107747373053____4__1200x1200.jpg",
    description: "Plancha a vapor con suela de acero inoxidable y control de temperatura ajustable."
  },
  {
    id: 26,
    name: "Juego de sábanas King Size",
    category: "Hogar",
    price: 180,
    image: "https://f.fcdn.app/imgs/c77dbe/barraca5esquinas.com.uy/besquy/4554/original/catalogo/IMPMT-36K_IMPMT-36K_1/2000-2000/juego-de-sabanas-2-plazas-king-size-600-hilos-varios-colores-juego-de-sabanas-2-plazas-king-size-600-hilos-varios-colores.jpg",
    description: "Sábanas de algodón de 600 hilos, suaves y duraderas, con ajuste perfecto para camas King Size."
  },
  {
    id: 27,
    name: "Microondas Panasonic",
    category: "Hogar",
    price: 850,
    image: "https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00750148763204l.jpg",
    description: "Microondas compacto con función descongelar, grill y programas automáticos de cocción."
  },
  {
    id: 28,
    name: "Tostadora Oster",
    category: "Hogar",
    price: 150,
    image: "https://images.fravega.com/f1000/20e14d84e1ec63bb6cc76deb36e928d1.jpg",
    description: "Tostadora de 2 ranuras con control de dorado ajustable y bandeja recogemigas fácil de limpiar."
  },
  {
    id: 29,
    name: "Lámpara de mesa LED",
    category: "Hogar",
    price: 90,
    image: "https://lw-cdn.com/images/5DB15E5F3B41/k_ec53d80de99751c8a20c664f5e81477c;w_1600;h_1600;q_100/10008511.jpg",
    description: "Lámpara LED de escritorio con intensidad regulable y diseño moderno para oficina o estudio."
  },
  {
    id: 30,
    name: "Juego de ollas T-Fal",
    category: "Hogar",
    price: 320,
    image: "https://m.media-amazon.com/images/I/81k4MHC06tL._AC_.jpg",
    description: "Juego de ollas antiadherentes de 10 piezas, resistente al calor y fácil de limpiar."
  }
];

export default products;
