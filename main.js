const productos = [
    {
        nombre: "Laptop HP Pavilion 15 Modelo 1",
        imagen: "/imagenes/Laptop_HP_Pavilion_15_Modelo_1.png",
        precio: "4.800.000",
        descripcion: "Laptop de alto rendimiento para trabajo y entretenimiento con el modelo 1.",
        especificacionesTecnicas: {
            marca: "HP",
            modelo: "Pavilion 15 1",
            procesador: "Intel Core i5-10510U",
            ram: "8 GB",
            almacenamiento: "SSD 256 GB",
            tarjetaGrafica: "NVIDIA GeForce GTX 1650",
            pantalla: "15\" Full HD"
        }
    },
    {
        nombre: "Laptop HP Pavilion 15 Modelo 2",
        imagen: "/imagenes/Laptop_HP_Pavilion_15_Modelo_2.png",
        precio: "6.400.000",
        descripcion: "Laptop de alto rendimiento para trabajo y entretenimiento con el modelo 2.",
        especificacionesTecnicas: {
            marca: "HP",
            modelo: "Pavilion 15 2",
            procesador: "Intel Core i7-10750H",
            ram: "16 GB",
            almacenamiento: "SSD 512 GB",
            tarjetaGrafica: "NVIDIA GeForce GTX 1660",
            pantalla: "15\" Full HD"
        }
    },
    {
        nombre: "Laptop HP Pavilion 15 Modelo 3",
        imagen: "/imagenes/Laptop_HP_Pavilion_15_Modelo_3.png",
        precio: "5.600.000",
        descripcion: "Laptop de alto rendimiento para trabajo y entretenimiento con el modelo 3.",
        especificacionesTecnicas: {
            marca: "HP",
            modelo: "Pavilion 15 3",
            procesador: "Intel Core i3-10110U",
            ram: "8 GB",
            almacenamiento: "HDD 1 TB",
            tarjetaGrafica: "Integrada",
            pantalla: "14\" Full HD"
        }
    },
    {
        nombre: "Laptop Dell Inspiron 15 Modelo 1",
        imagen: "/imagenes/Laptop_Dell_Inspiron_15_Modelo_1.png",
        precio: "3.600.000",
        descripcion: "Laptop versátil y ligera ideal para trabajo y estudios.",
        especificacionesTecnicas: {
            marca: "Dell",
            modelo: "Inspiron 15 1",
            procesador: "AMD Ryzen 5 3500U",
            ram: "8 GB",
            almacenamiento: "SSD 512 GB",
            tarjetaGrafica: "Integrada",
            pantalla: "15.6\" HD"
        }
    },
    {
        nombre: "Laptop Dell Inspiron 15 Modelo 2",
        imagen: "/imagenes/Laptop_Dell_Inspiron_15_Modelo_2.png",
        precio: "4.400.000",
        descripcion: "Laptop para alto rendimiento con almacenamiento rápido.",
        especificacionesTecnicas: {
            marca: "Dell",
            modelo: "Inspiron 15 2",
            procesador: "AMD Ryzen 7 4700U",
            ram: "16 GB",
            almacenamiento: "SSD 1 TB",
            tarjetaGrafica: "AMD Radeon Vega",
            pantalla: "15.6\" Full HD"
        }
    },
    {
        nombre: "MacBook Pro 13",
        imagen: "/imagenes/MacBook_Pro_13.png",
        precio: "8.000.000",
        descripcion: "Portátil de alto rendimiento con procesador Apple M1.",
        especificacionesTecnicas: {
            marca: "Apple",
            modelo: "MacBook Pro 13",
            procesador: "Apple M1",
            ram: "8 GB",
            almacenamiento: "SSD 256 GB",
            tarjetaGrafica: "Apple 8-core GPU",
            pantalla: "13.3\" Retina"
        }
    },
    {
        nombre: "MacBook Air 13",
        imagen: "/imagenes/MacBook_Air_13.png",
        precio: "5.200.000",
        descripcion: "Portátil ultraligero de Apple con gran rendimiento y batería.",
        especificacionesTecnicas: {
            marca: "Apple",
            modelo: "MacBook Air 13",
            procesador: "Apple M1",
            ram: "8 GB",
            almacenamiento: "SSD 256 GB",
            tarjetaGrafica: "Apple 7-core GPU",
            pantalla: "13.3\" Retina"
        }
    },
    {
        nombre: "Acer Aspire 5",
        imagen: "/imagenes/Acer_Aspire_5.png",
        precio: "2.800.000",
        descripcion: "Laptop económica y funcional para tareas diarias.",
        especificacionesTecnicas: {
            marca: "Acer",
            modelo: "Aspire 5",
            procesador: "Intel Core i5-1035G1",
            ram: "8 GB",
            almacenamiento: "SSD 512 GB",
            tarjetaGrafica: "Integrada",
            pantalla: "15.6\" Full HD"
        }
    },
    {
        nombre: "Acer Nitro 5",
        imagen: "/imagenes/Acer_Nitro_5.png",
        precio: "4.400.000",
        descripcion: "Laptop gamer con gráficos NVIDIA GeForce GTX 1650.",
        especificacionesTecnicas: {
            marca: "Acer",
            modelo: "Nitro 5",
            procesador: "Intel Core i5-9300H",
            ram: "16 GB",
            almacenamiento: "SSD 256 GB + HDD 1 TB",
            tarjetaGrafica: "NVIDIA GeForce GTX 1650",
            pantalla: "15.6\" Full HD"
        }
    },
    {
        nombre: "Lenovo ThinkPad X1 Carbon",
        imagen: "/imagenes/Lenovo_ThinkPad_X1_Carbon.png",
        precio: "7.200.000",
        descripcion: "Laptop ultraligera y resistente ideal para ejecutivos.",
        especificacionesTecnicas: {
            marca: "Lenovo",
            modelo: "ThinkPad X1 Carbon",
            procesador: "Intel Core i7-10510U",
            ram: "16 GB",
            almacenamiento: "SSD 1 TB",
            tarjetaGrafica: "Integrada",
            pantalla: "14\" Full HD"
        }
    },
        {
            nombre: "Lenovo IdeaPad 3",
            imagen: "/imagenes/Lenovo_IdeaPad_3.png",
            precio: "2.600.000",
            descripcion: "Laptop económica y versátil, ideal para estudiantes.",
            especificacionesTecnicas: {
                marca: "Lenovo",
                modelo: "IdeaPad 3",
                procesador: "Intel Core i3-1005G1",
                ram: "4 GB",
                almacenamiento: "SSD 128 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "15.6\" HD"
            }
        },
        {
            nombre: "Lenovo Legion 5",
            imagen: "/imagenes/Lenovo_Legion_5.png",
            precio: "4.800.000",
            descripcion: "Laptop gamer con rendimiento superior y gráficos dedicados.",
            especificacionesTecnicas: {
                marca: "Lenovo",
                modelo: "Legion 5",
                procesador: "AMD Ryzen 5 4600H",
                ram: "8 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "NVIDIA GeForce GTX 1660 Ti",
                pantalla: "15.6\" Full HD"
            }
        },
        {
            nombre: "Asus VivoBook 15",
            imagen: "/imagenes/Asus_VivoBook_15.png",
            precio: "3.000.000",
            descripcion: "Laptop delgada y ligera con rendimiento suficiente para tareas diarias.",
            especificacionesTecnicas: {
                marca: "Asus",
                modelo: "VivoBook 15",
                procesador: "Intel Core i5-1035G1",
                ram: "8 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "15.6\" Full HD"
            }
        },
        {
            nombre: "Asus ROG Zephyrus G14",
            imagen: "/imagenes/Asus_ROG_Zephyrus_G14.png",
            precio: "6.000.000",
            descripcion: "Laptop gamer ultraligera con gráficos potentes y batería duradera.",
            especificacionesTecnicas: {
                marca: "Asus",
                modelo: "ROG Zephyrus G14",
                procesador: "AMD Ryzen 9 4900HS",
                ram: "16 GB",
                almacenamiento: "SSD 1 TB",
                tarjetaGrafica: "NVIDIA GeForce RTX 2060",
                pantalla: "14\" Full HD"
            }
        },
        {
            nombre: "Samsung Galaxy Book Flex",
            imagen: "/imagenes/Samsung_Galaxy_Book_Flex.png",
            precio: "5.200.000",
            descripcion: "Laptop 2 en 1 con pantalla táctil QLED y gran duración de batería.",
            especificacionesTecnicas: {
                marca: "Samsung",
                modelo: "Galaxy Book Flex",
                procesador: "Intel Core i7-1065G7",
                ram: "8 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Intel Iris Plus",
                pantalla: "13.3\" QLED Full HD"
            }
        },
        {
            nombre: "Microsoft Surface Laptop 3",
            imagen: "/imagenes/Microsoft_Surface_Laptop_3.png",
            precio: "5.600.000",
            descripcion: "Laptop con pantalla táctil y diseño premium ideal para productividad.",
            especificacionesTecnicas: {
                marca: "Microsoft",
                modelo: "Surface Laptop 3",
                procesador: "Intel Core i5-1035G7",
                ram: "8 GB",
                almacenamiento: "SSD 256 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "13.5\" PixelSense"
            }
        },
        {
            nombre: "Huawei MateBook X Pro",
            imagen: "/imagenes/Huawei_MateBook_X_Pro.png",
            precio: "6.400.000",
            descripcion: "Laptop ultrafina con pantalla táctil 3K y gran rendimiento.",
            especificacionesTecnicas: {
                marca: "Huawei",
                modelo: "MateBook X Pro",
                procesador: "Intel Core i7-10510U",
                ram: "16 GB",
                almacenamiento: "SSD 1 TB",
                tarjetaGrafica: "NVIDIA GeForce MX250",
                pantalla: "13.9\" 3K"
            }
        },
        {
            nombre: "Razer Blade 15",
            imagen: "/imagenes/Razer_Blade_15.png",
            precio: "8.400.000",
            descripcion: "Laptop gamer compacta con gráficos de alto rendimiento.",
            especificacionesTecnicas: {
                marca: "Razer",
                modelo: "Blade 15",
                procesador: "Intel Core i7-10750H",
                ram: "16 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "NVIDIA GeForce RTX 2070",
                pantalla: "15.6\" Full HD 144Hz"
            }
        },
        {
            nombre: "Dell XPS 13",
            imagen: "/imagenes/Dell_XPS_13.png",
            precio: "6.000.000",
            descripcion: "Laptop ultraligera con pantalla casi sin bordes y alto rendimiento.",
            especificacionesTecnicas: {
                marca: "Dell",
                modelo: "XPS 13",
                procesador: "Intel Core i7-1065G7",
                ram: "16 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Intel Iris Plus",
                pantalla: "13.4\" Full HD"
            }
        },
        {
            nombre: "Google Pixelbook Go",
            imagen: "/imagenes/Google_Pixelbook_Go.png",
            precio: "3.400.000",
            descripcion: "Chromebook premium con pantalla táctil y gran duración de batería.",
            especificacionesTecnicas: {
                marca: "Google",
                modelo: "Pixelbook Go",
                procesador: "Intel Core i5-8200Y",
                ram: "8 GB",
                almacenamiento: "SSD 128 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "13.3\" Full HD"
            }
        },
        {
            nombre: "Acer Aspire 3",
            imagen: "/imagenes/Acer_Aspire_3.png",
            precio: "1.400.000",
            descripcion: "Laptop económica con excelente rendimiento para tareas diarias.",
            especificacionesTecnicas: {
                marca: "Acer",
                modelo: "Aspire 3",
                procesador: "AMD Ryzen 3 3200U",
                ram: "4 GB",
                almacenamiento: "HDD 1 TB",
                tarjetaGrafica: "Integrada",
                pantalla: "15.6\" HD"
            }
        },
        {
            nombre: "Apple MacBook Air M1",
            imagen: "/imagenes/Apple_MacBook_Air_M1.png",
            precio: "4.000.000",
            descripcion: "Laptop ultraligera con el potente chip M1 de Apple.",
            especificacionesTecnicas: {
                marca: "Apple",
                modelo: "MacBook Air M1",
                procesador: "Apple M1",
                ram: "8 GB",
                almacenamiento: "SSD 256 GB",
                tarjetaGrafica: "Integrada (Apple 7-core GPU)",
                pantalla: "13.3\" Retina"
            }
        },
        {
            nombre: "HP Envy x360",
            imagen: "/imagenes/HP_Envy_x360.png",
            precio: "3.600.000",
            descripcion: "Laptop convertible ideal para productividad y entretenimiento.",
            especificacionesTecnicas: {
                marca: "HP",
                modelo: "Envy x360",
                procesador: "AMD Ryzen 5 4500U",
                ram: "8 GB",
                almacenamiento: "SSD 256 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "13.3\" Full HD Touch"
            }
        },
        {
            nombre: "Dell Inspiron 14",
            imagen: "/imagenes/Dell_Inspiron_14.png",
            precio: "2.720.000",
            descripcion: "Laptop compacta y potente, ideal para estudiantes y profesionales.",
            especificacionesTecnicas: {
                marca: "Dell",
                modelo: "Inspiron 14",
                procesador: "Intel Core i5-1135G7",
                ram: "8 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Intel Iris Xe",
                pantalla: "14\" Full HD"
            }
        },
        {
            nombre: "Microsoft Surface Pro 7",
            imagen: "/imagenes/Microsoft_Surface_Pro_7.png",
            precio: "3.000.000",
            descripcion: "Tablet y laptop en uno, con la versatilidad de una pantalla táctil.",
            especificacionesTecnicas: {
                marca: "Microsoft",
                modelo: "Surface Pro 7",
                procesador: "Intel Core i3-1005G1",
                ram: "4 GB",
                almacenamiento: "SSD 128 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "12.3\" PixelSense"
            }
        },
        {
            nombre: "Huawei MateBook D 14",
            imagen: "/imagenes/Huawei_MateBook_D_14.png",
            precio: "3.000.000",
            descripcion: "Laptop delgada con buena duración de batería y pantalla Full HD.",
            especificacionesTecnicas: {
                marca: "Huawei",
                modelo: "MateBook D 14",
                procesador: "AMD Ryzen 5 3500U",
                ram: "8 GB",
                almacenamiento: "SSD 256 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "14\" Full HD"
            }
        },
        {
            nombre: "Asus ZenBook 14",
            imagen: "/imagenes/Asus_ZenBook_14.png",
            precio: "4.800.000",
            descripcion: "Laptop ultraligera con diseño premium y rendimiento sobresaliente.",
            especificacionesTecnicas: {
                marca: "Asus",
                modelo: "ZenBook 14",
                procesador: "Intel Core i7-1165G7",
                ram: "16 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Intel Iris Xe",
                pantalla: "14\" Full HD"
            }
        },
        {
            nombre: "Samsung Galaxy Book Ion",
            imagen: "/imagenes/Samsung_Galaxy_Book_Ion.png",
            precio: "5.600.000",
            descripcion: "Laptop ligera con pantalla QLED y batería de larga duración.",
            especificacionesTecnicas: {
                marca: "Samsung",
                modelo: "Galaxy Book Ion",
                procesador: "Intel Core i5-10210U",
                ram: "8 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "15.6\" QLED Full HD"
            }
        },
        {
            nombre: "Google Pixelbook",
            imagen: "/imagenes/Google_Pixelbook.png",
            precio: "4.000.000",
            descripcion: "Chromebook de alta gama con pantalla táctil y diseño compacto.",
            especificacionesTecnicas: {
                marca: "Google",
                modelo: "Pixelbook",
                procesador: "Intel Core i5-7Y57",
                ram: "8 GB",
                almacenamiento: "SSD 128 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "12.3\" Quad HD"
            }
        },
        {
            nombre: "HP Omen 15",
            imagen: "/imagenes/HP_Omen_15.png",
            precio: "5.600.000",
            descripcion: "Laptop gamer con gráficos dedicados y pantalla de alta tasa de refresco.",
            especificacionesTecnicas: {
                marca: "HP",
                modelo: "Omen 15",
                procesador: "AMD Ryzen 7 4800H",
                ram: "16 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "NVIDIA GeForce GTX 1660 Ti",
                pantalla: "15.6\" Full HD 144Hz"
            }
        },
        {
            nombre: "LG Gram 14",
            imagen: "/imagenes/LG_Gram_14.png",
            precio: "5.600.000",
            descripcion: "Laptop ultraligera con gran duración de batería y pantalla de alta resolución.",
            especificacionesTecnicas: {
                marca: "LG",
                modelo: "Gram 14",
                procesador: "Intel Core i7-1165G7",
                ram: "16 GB",
                almacenamiento: "SSD 1 TB",
                tarjetaGrafica: "Integrada",
                pantalla: "14\" WQXGA (2560x1600)"
            }
        },
        {
            nombre: "Asus ExpertBook B9",
            imagen: "/imagenes/Asus_ExpertBook_B9.png",
            precio: "8.000.000",
            descripcion: "Laptop empresarial premium con diseño elegante y gran rendimiento.",
            especificacionesTecnicas: {
                marca: "Asus",
                modelo: "ExpertBook B9",
                procesador: "Intel Core i7-1165G7",
                ram: "16 GB",
                almacenamiento: "SSD 1 TB",
                tarjetaGrafica: "Integrada",
                pantalla: "14\" Full HD"
            }
        },
        {
            nombre: "Dell G5 15",
            imagen: "/imagenes/DellG_5_15.png",
            precio: "5.200.000",
            descripcion: "Laptop gamer con un diseño atractivo y rendimiento sólido.",
            especificacionesTecnicas: {
                marca: "Dell",
                modelo: "G5 15",
                procesador: "Intel Core i7-10750H",
                ram: "16 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "NVIDIA GeForce GTX 1650 Ti",
                pantalla: "15.6\" Full HD 144Hz"
            }
        },
        {
            nombre: "Lenovo Yoga C740",
            imagen: "/imagenes/Lenovo_Yoga_C740.png",
            precio: "4.400.000",
            descripcion: "Laptop convertible 2 en 1 con pantalla táctil y gran rendimiento.",
            especificacionesTecnicas: {
                marca: "Lenovo",
                modelo: "Yoga C740",
                procesador: "Intel Core i5-10210U",
                ram: "8 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "14\" Full HD Touch"
            }
        },
        {
            nombre: "Asus ROG Strix G15",
            imagen: "/imagenes/Asus_ROG_Strix_G15.png",
            precio: "6.400.000",
            descripcion: "Laptop gamer con rendimiento excepcional y diseño agresivo.",
            especificacionesTecnicas: {
                marca: "Asus",
                modelo: "ROG Strix G15",
                procesador: "AMD Ryzen 7 4800H",
                ram: "16 GB",
                almacenamiento: "SSD 1 TB",
                tarjetaGrafica: "NVIDIA GeForce RTX 2060",
                pantalla: "15.6\" Full HD 144Hz"
            }
        },
        {
            nombre: "Dell Latitude 7420",
            imagen: "/imagenes/Dell_Latitude_7420.png",
            precio: "7.200.000",
            descripcion: "Laptop empresarial con diseño premium y gran autonomía.",
            especificacionesTecnicas: {
                marca: "Dell",
                modelo: "Latitude 7420",
                procesador: "Intel Core i7-1185G7",
                ram: "16 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "14\" Full HD"
            }
        },
        {
            nombre: "HP Spectre x360",
            imagen: "/imagenes/HP_Spectre_x360.png",
            precio: "5.600.000",
            descripcion: "Laptop convertible premium con diseño elegante y pantalla táctil.",
            especificacionesTecnicas: {
                marca: "HP",
                modelo: "Spectre x360",
                procesador: "Intel Core i7-1165G7",
                ram: "16 GB",
                almacenamiento: "SSD 1 TB",
                tarjetaGrafica: "Intel Iris Xe",
                pantalla: "13.3\" Full HD Touch"
            }
        },
        {
            nombre: "Microsoft Surface Book 3",
            imagen: ":/imagenes/Microsoft_Surface_Book_3.png",
            precio: "8.000.000",
            descripcion: "Laptop 2 en 1 con pantalla táctil y gran potencia para creativos.",
            especificacionesTecnicas: {
                marca: "Microsoft",
                modelo: "Surface Book 3",
                procesador: "Intel Core i7-1065G7",
                ram: "16 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "NVIDIA GeForce GTX 1650",
                pantalla: "13.5\" PixelSense"
            }
        },
        {
            nombre: "Acer Swift 3",
            imagen: "/imagenes/Acer_Swift_3.png",
            precio: "3.400.000",
            descripcion: "Laptop ultradelgada y ligera con buen rendimiento y duración de batería.",
            especificacionesTecnicas: {
                marca: "Acer",
                modelo: "Swift 3",
                procesador: "AMD Ryzen 5 4500U",
                ram: "8 GB",
                almacenamiento: "SSD 512 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "14\" Full HD"
            }
        },
        {
            nombre: "Lenovo Chromebook Duet",
            imagen: "/imagenes/Lenovo_Chromebook_Duet.png",
            precio: "1.400.000",
            descripcion: "Chromebook 2 en 1 con pantalla táctil y gran portabilidad.",
            especificacionesTecnicas: {
                marca: "Lenovo",
                modelo: "Chromebook Duet",
                procesador: "MediaTek Helio P60T",
                ram: "4 GB",
                almacenamiento: "SSD 64 GB",
                tarjetaGrafica: "Integrada",
                pantalla: "10.1\" Full HD"
            }
        },
];
