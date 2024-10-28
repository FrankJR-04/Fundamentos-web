const productos = [
    {
        nombre: "Laptop HP Pavilion 15 Modelo 1",
        imagen: "/imagenes/Laptop_HP_Pavilion_15_Modelo_1.png",
        precio: "4.800.000",
        descripcion: "Laptop de alto rendimiento para trabajo y entretenimiento con el modelo 1.",
        marca: "HP",
        modelo: "Pavilion 15 1",
        disponibilidad:"Bajo stock"
    },
    {
        nombre: "Laptop HP Pavilion 15 Modelo 2",
        imagen: "/imagenes/Laptop_HP_Pavilion_15_Modelo_2.png",
        precio: "6.400.000",
        descripcion: "Laptop de alto rendimiento para trabajo y entretenimiento con el modelo 2.",
        marca: "HP",
        modelo: "Pavilion 15 2",
        disponibilidad:"En stock"
    },
    {
        nombre: "Laptop HP Pavilion 15 Modelo 3",
        imagen: "/imagenes/Laptop_HP_Pavilion_15_Modelo_3.png",
        precio: "5.600.000",
        descripcion: "Laptop de alto rendimiento para trabajo y entretenimiento con el modelo 3.",
        marca: "HP",
        modelo: "Pavilion 15 3",
        disponibilidad:"En stock"
    },
    {
        nombre: "Laptop Dell Inspiron 15 Modelo 1",
        imagen: "/imagenes/Laptop_Dell_Inspiron_15_Modelo_1.png",
        precio: "3.600.000",
        descripcion: "Laptop versátil y ligera ideal para trabajo y estudios.",
        marca: "Dell",
        modelo: "Inspiron 15 1",
        disponibilidad:"Bajo stock"
        
    },
    {
        nombre: "Laptop Dell Inspiron 15 Modelo 2",
        imagen: "/imagenes/Laptop_Dell_Inspiron_15_Modelo_2.png",
        precio: "4.400.000",
        descripcion: "Laptop para alto rendimiento con almacenamiento rápido.",
        marca: "Dell",
        modelo: "Inspiron 15 2",
        disponibilidad:"Agotado"
    },
    {
        nombre: "MacBook Pro 13",
        imagen: "/imagenes/MacBook_Pro_13.png",
        precio: "8.000.000",
        descripcion: "Portátil de alto rendimiento con procesador Apple M1.",
        marca: "Apple",
        modelo: "MacBook Pro 13",
        disponibilidad:"En stock"
    },
    {
        nombre: "MacBook Air 13",
        imagen: "/imagenes/MacBook_Air_13.png",
        precio: "5.200.000",
        descripcion: "Portátil ultraligero de Apple con gran rendimiento y batería.",
        marca: "Apple",
        modelo: "MacBook Air 13",
        disponibilidad:"En stock"
    },
    {
        nombre: "Acer Aspire 5",
        imagen: "/imagenes/Acer_Aspire_5.png",
        precio: "2.800.000",
        descripcion: "Laptop económica y funcional para tareas diarias.",
        marca: "Acer",
        modelo: "Aspire 5",
        disponibilidad:"Bajo stock"
    },
    {
        nombre: "Acer Nitro 5",
        imagen: "/imagenes/Acer_Nitro_5.png",
        precio: "4.400.000",
        descripcion: "Laptop gamer con gráficos NVIDIA GeForce GTX 1650.",
        marca: "Acer",
        modelo: "Nitro 5",
        disponibilidad:"Agotado"
    },
    {
        nombre: "Lenovo ThinkPad X1 Carbon",
        imagen: "/imagenes/Lenovo_ThinkPad_X1_Carbon.png",
        precio: "7.200.000",
        descripcion: "Laptop ultraligera y resistente ideal para ejecutivos.",
        marca: "Lenovo",
        modelo: "ThinkPad X1 Carbon",
        disponibilidad:"Bajo stock"
    },
        {
            nombre: "Lenovo IdeaPad 3",
            imagen: "/imagenes/Lenovo_IdeaPad_3.png",
            precio: "2.600.000",
            descripcion: "Laptop económica y versátil, ideal para estudiantes.",
            marca: "Lenovo",
            modelo: "IdeaPad 3",
            disponibilidad:"Agotado"
        },
        {
            nombre: "Lenovo Legion 5",
            imagen: "/imagenes/Lenovo_Legion_5.png",
            precio: "4.800.000",
            descripcion: "Laptop gamer con rendimiento superior y gráficos dedicados.",
            marca: "Lenovo",
            modelo: "Legion 5",
            disponibilidad:"Disponible bajo pedido"
        },
        {
            nombre: "Asus VivoBook 15",
            imagen: "/imagenes/Asus_VivoBook_15.png",
            precio: "3.000.000",
            descripcion: "Laptop delgada y ligera con rendimiento suficiente para tareas diarias.",
            marca: "Asus",
            modelo: "VivoBook 15",
            disponibilidad:"En stock"
        },
        {
            nombre: "Asus ROG Zephyrus G14",
            imagen: "/imagenes/Asus_ROG_Zephyrus_G14.png",
            precio: "6.000.000",
            descripcion: "Laptop gamer ultraligera con gráficos potentes y batería duradera.",
            marca: "Asus",
            modelo: "ROG Zephyrus G14",
            disponibilidad:"En stock"
        },
        {
            nombre: "Samsung Galaxy Book Flex",
            imagen: "/imagenes/Samsung_Galaxy_Book_Flex.png",
            precio: "5.200.000",
            descripcion: "Laptop 2 en 1 con pantalla táctil QLED y gran duración de batería.",
            marca: "Samsung",
            modelo: "Galaxy Book Flex",
            disponibilidad:"Disponible bajo pedido"
        },
        {
            nombre: "Microsoft Surface Laptop 3",
            imagen: "/imagenes/Microsoft_Surface_Laptop_3.png",
            precio: "5.600.000",
            descripcion: "Laptop con pantalla táctil y diseño premium ideal para productividad.",
            marca: "Microsoft",
            modelo: "Surface Laptop 3",
            disponibilidad:"Bajo stock"
        },
        {
            nombre: "Huawei MateBook X Pro",
            imagen: "/imagenes/Huawei_MateBook_X_Pro.png",
            precio: "6.400.000",
            descripcion: "Laptop ultrafina con pantalla táctil 3K y gran rendimiento.",
            marca: "Huawei",
            modelo: "MateBook X Pro",
            disponibilidad:"Bajo stock"
        },
        {
            nombre: "Razer Blade 15",
            imagen: "/imagenes/Razer_Blade_15.png",
            precio: "8.400.000",
            descripcion: "Laptop gamer compacta con gráficos de alto rendimiento.",
            marca: "Razer",
            modelo: "Blade 15",
            disponibilidad:"En stock"
        },
        {
            nombre: "Dell XPS 13",
            imagen: "/imagenes/Dell_XPS_13.png",
            precio: "6.000.000",
            descripcion: "Laptop ultraligera con pantalla casi sin bordes y alto rendimiento.",
            marca: "Dell",
            modelo: "XPS 13",
            disponibilidad:"En stock"
        },
        {
            nombre: "Google Pixelbook Go",
            imagen: "/imagenes/Google_Pixelbook_Go.png",
            precio: "3.400.000",
            descripcion: "Chromebook premium con pantalla táctil y gran duración de batería.",
            marca: "Google",
            modelo: "Pixelbook Go",
            disponibilidad:"En stock"
        },
        {
            nombre: "Acer Aspire 3",
            imagen: "/imagenes/Acer_Aspire_3.png",
            precio: "1.400.000",
            descripcion: "Laptop económica con excelente rendimiento para tareas diarias.",
            marca: "Acer",
            modelo: "Aspire 3",
            disponibilidad:"Bajo stock"
        },
        {
            nombre: "Apple MacBook Air M1",
            imagen: "/imagenes/Apple_MacBook_Air_M1.png",
            precio: "4.000.000",
            descripcion: "Laptop ultraligera con el potente chip M1 de Apple.",
            marca: "Apple",
            modelo: "MacBook Air M1",
            disponibilidad:"Disponible bajo pedido"
        },
        {
            nombre: "HP Envy x360",
            imagen: "/imagenes/HP_Envy_x360.png",
            precio: "3.600.000",
            descripcion: "Laptop convertible ideal para productividad y entretenimiento.",
            marca: "HP",
            modelo: "Envy x360",
            disponibilidad:"Agotado"
        },
        {
            nombre: "Dell Inspiron 14",
            imagen: "/imagenes/Dell_Inspiron_14.png",
            precio: "2.720.000",
            descripcion: "Laptop compacta y potente, ideal para estudiantes y profesionales.",
            marca: "Dell",
            modelo: "Inspiron 14",
            disponibilidad:"En stock"
        },
        {
            nombre: "Microsoft Surface Pro 7",
            imagen: "/imagenes/Microsoft_Surface_Pro_7.png",
            precio: "3.000.000",
            descripcion: "Tablet y laptop en uno, con la versatilidad de una pantalla táctil.",
            marca: "Microsoft",
            modelo: "Surface Pro 7",
            disponibilidad:"En stock"
        },
        {
            nombre: "Huawei MateBook D 14",
            imagen: "/imagenes/Huawei_MateBook_D_14.png",
            precio: "3.000.000",
            descripcion: "Laptop delgada con buena duración de batería y pantalla Full HD.",
            marca: "Huawei",
            modelo: "MateBook D 14",
            disponibilidad:"En stock"
        },
        {
            nombre: "Asus ZenBook 14",
            imagen: "/imagenes/Asus_ZenBook_14.png",
            precio: "4.800.000",
            descripcion: "Laptop ultraligera con diseño premium y rendimiento sobresaliente.",
            marca: "Asus",
            modelo: "ZenBook 14",
            disponibilidad:"Bajo stock"
        },
        {
            nombre: "Samsung Galaxy Book Ion",
            imagen: "/imagenes/Samsung_Galaxy_Book_Ion.png",
            precio: "5.600.000",
            descripcion: "Laptop ligera con pantalla QLED y batería de larga duración.",
            marca: "Samsung",
            modelo: "Galaxy Book Ion",
            disponibilidad:"Bajo stock"
        },
        {
            nombre: "Google Pixelbook",
            imagen: "/imagenes/Google_Pixelbook.png",
            precio: "4.000.000",
            descripcion: "Chromebook de alta gama con pantalla táctil y diseño compacto.",
            marca: "Google",
            modelo: "Pixelbook",
            disponibilidad:"En stock"
        },
        {
            nombre: "HP Omen 15", 
            imagen: "/imagenes/HP_Omen_15.png",
            precio: "5.600.000",
            descripcion: "Laptop gamer con gráficos dedicados y pantalla de alta tasa de refresco.",
            marca: "HP",
            modelo: "Omen 15",
            disponibilidad:"En stock"
        },
        {
            nombre: "Mouse Inalámbrico Logitech MX Master 3",
            imagen: "/imagenes/logitech_mx_master_3.png",
            precio: "320,000",
            descripcion: "Mouse ergonómico de precisión con múltiples botones programables.",
            marca: "Logitech",
            modelo: "MX Master 3",
            disponibilidad: "En stock"
        },
        {
            nombre: "Teclado Mecánico Razer BlackWidow V3",
            imagen: "/imagenes/razer_blackwidow_v3.png",
            precio: "600,000",
            descripcion: "Teclado mecánico con retroiluminación RGB y switches duraderos.",
            marca: "Razer",
            modelo: "BlackWidow V3",
            disponibilidad: "En stock"
        },
        {
            nombre: "Monitor Dell UltraSharp 27 4K",
            imagen: "/imagenes/dell_ultrasharp_27.png",
            precio: "2,000,000",
            descripcion: "Monitor 4K de 27 pulgadas con excelente precisión de color.",
            marca: "Dell",
            modelo: "UltraSharp U2720Q",
            disponibilidad: "Disponible bajo pedido"
        },
        {
            nombre: "Webcam Logitech C920 HD Pro",
            imagen: "/imagenes/logitech_c920.png",
            precio: "350,000",
            descripcion: "Webcam Full HD para videollamadas y transmisión en alta calidad.",
            marca: "Logitech",
            modelo: "C920",
            disponibilidad: "En stock"
        },
        {
            nombre: "Auriculares Sony WH-1000XM4",
            imagen: "/imagenes/sony_wh1000xm4.png",
            precio: "1,200,000",
            descripcion: "Auriculares con cancelación de ruido y sonido de alta fidelidad.",
            marca: "Sony",
            modelo: "WH-1000XM4",
            disponibilidad: "Limitado"
        },
        {
            nombre: "Disco Duro Externo Seagate Expansion 2TB",
            imagen: "/imagenes/seagate_expansion_2tb.png",
            precio: "400,000",
            descripcion: "Disco duro externo de 2 TB para almacenamiento de datos adicional.",
            marca: "Seagate",
            modelo: "Expansion 2TB",
            disponibilidad: "En stock"
        },
        {
            nombre: "Base Refrigerante para Laptop Klim Wind",
            imagen: "/imagenes/klim_wind.png",
            precio: "150,000",
            descripcion: "Base refrigerante con cuatro ventiladores para laptops de hasta 17 pulgadas.",
            marca: "Klim",
            modelo: "Wind",
            disponibilidad: "En stock"
        },
        {
            nombre: "Cargador Universal para Laptop 90W",
            imagen: "/imagenes/cargador_universal_90w.png",
            precio: "100,000",
            descripcion: "Cargador universal compatible con múltiples marcas y modelos de laptop.",
            marca: "Generic",
            modelo: "Universal 90W",
            disponibilidad: "En stock"
        },
        {
            nombre: "Memoria USB Kingston DataTraveler 128GB",
            imagen: "/imagenes/kingston_datatraveler_128gb.png",
            precio: "80,000",
            descripcion: "Memoria USB de 128GB con velocidad de transferencia rápida.",
            marca: "Kingston",
            modelo: "DataTraveler 128GB",
            disponibilidad: "En stock"
        },
        {
            nombre: "Hub USB-C Anker 5 en 1",
            imagen: "/imagenes/anker_hub_5_en_1.png",
            precio: "200,000",
            descripcion: "Hub con 5 puertos, incluyendo HDMI y USB-C, ideal para laptops modernas.",
            marca: "Anker",
            modelo: "5 en 1",
            disponibilidad: "En stock"
        }
];
