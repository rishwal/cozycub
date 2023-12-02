import React, { createContext, useState } from 'react';

import rishwal from '../images/rishwaltp.jpeg'
import babi from '../../Data/images/babifas.jpeg'
import shaan from '../../Data/images/shaan.jpeg'
import boy1 from '../images/cloth-set-boy-1.jpg'
import boy2 from '../images/cloth-set-boy-2.jpg'
import boy3 from '../images/cloth-set-boy-3.jpg'
import boy4 from '../images/cloth-set-boy-4.jpg'
import boy5 from '../images/cloth-set-boy-5.jpg'
import boy6 from '../images/cloth-set-boy-6.jpg'
import boy7 from '../images/cloth-set-boy-7.jpg'
import boy8 from '../images/cloth-set-boy-8.jpg'
import boy9 from '../images/cloth-boy-9.jpg'
import boy10 from '../images/cloth-boy-10.jpg'
import boy11 from '../images/cloth-boy-11.webp'
import boy12 from '../images/cloth-boy-12.webp'
import boy13 from '../images/cloth-boy-13.webp'
import boy14 from '../images/cloth-boy-14.jpg'
import boy15 from '../images/cloth-boy-15.jpg'
import boy16 from '../images/cloth-boy-16.jpg'
import boy17 from '../images/cloth-boy-17.jpg'
import boy18 from '../images/cloth-boy-18.jpg'
import boy19 from '../images/cloth-boy-19.jpg'
import boy20 from '../images/cloth-boy-20.jpg'
import girl1 from '../images/cloth-girl-1.jpg'
import girl2 from '../images/cloth-girl-2.jpg'
import girl3 from '../images/cloth-girl-3.jpg'
import girl4 from '../images/cloth-girl-4.jpg'
import girl5 from '../images/cloth-girl-5.jpg'
import girl6 from '../images/cloth-girl-6.jpg'
import girl7 from '../images/cloth-girl-7.jpg'
import girl8 from '../images/cloth-girl-8.jpg'
import girl9 from '../images/cloth-girl-9.jpg'
import girl10 from '../images/cloth-girl-10.jpg'
import girl11 from '../images/cloth-girl-11.jpg'
import girl12 from '../images/cloth-girl-12.jpg'
import girl13 from '../images/cloth-girl-13.jpg'
import girl14 from '../images/cloth-girl-14.jpg'
import girl15 from '../images/cloth-girl-15.jpg'
import girl16 from '../images/cloth-girl-16.jpg'
import girl17 from '../images/cloth-girl-17.jpg'
import girl18 from '../images/cloth-girl-18.jpg'
import girl19 from '../images/cloth-girl-19.jpg'
import girl20 from '../images/cloth-girl-20.jpg'

import care1 from '../images/care-1.jpg'
import care2 from '../images/care-2.jpg'
import care3 from '../images/care-3.jpg'
import care4 from '../images/care-4.jpg'
import care5 from '../images/care-5.jpg'
import care6 from '../images/care-6.jpg'
import care7 from '../images/care-7.jpg'
import care8 from '../images/care-8.jpg'
import care9 from '../images/care-9.jpg'
import care10 from '../images/care-10.jpg'

import toy1 from '../images/toy-1.jpg'
import toy2 from '../images/toy-2.jpg'
import toy3 from '../images/toy-3.jpg'
import toy4 from '../images/toy-4.jpg'
import toy5 from '../images/toy-5.jpg'
import toy6 from '../images/toy-6.jpg'
import toy7 from '../images/toy-7.jpg'
import toy8 from '../images/toy-8.jpg'
import toy9 from '../images/toy-9.jpg'
import toy10 from '../images/toy-10.jpg'
import toy11 from '../images/toy-11.jpg'
import toy12 from '../images/toy-12.jpg'
import toy13 from '../images/toy-13.jpg'
import toy14 from '../images/toy-14.jpg'
import toy15 from '../images/toy-15.jpg'
import toy16 from '../images/toy-16.jpg'
import toy17 from '../images/toy-17.jpg'
import toy18 from '../images/toy-18.jpg'
import toy19 from '../images/toy-19.jpg'
import toy20 from '../images/toy-20.jpg'

import food1 from '../images/food-1.jpg'
import food2 from '../images/food-2.jpg'
import food3 from '../images/food-3.jpg'
import food4 from '../images/food-4.jpg'
import food5 from '../images/food-5.jpg'
import food6 from '../images/food-6.jpg'
import food7 from '../images/food-7.jpg'
import food8 from '../images/food-8.jpg'
import food9 from '../images/food-9.jpg'
import food10 from '../images/food-10.jpg'




export const dataContext = createContext();

const Data = ({ children }) => {

    //state to store user searching text 
    const [search, setSearch] = useState(null);

    //state to store cart items
    const [cart, setCart] = useState([]);

    //state to store all user details
    const [users, setusers] = useState([
        {
            name: 'rishwal',
            email: 'rishwal10@gmail.com',
            password: 12345678,
            profile: rishwal,
            cart: [{
                id: 1,
                name: 'Animal Print T-shirt',
                category: 'clothes',
                sexCategory: 'boy',
                description: 'Hopscotch Boys Cotton and Polyester Animal Print T-shirt and Dungaree Set in Blue Color',
                offerprice: 1199,
                price: 767,
                image: boy1,
                qty: 1,
            },
            {
                id: 2,
                name: 'BABY GO',
                category: 'clothes',
                sexCategory: 'boy',
                description: 'BABY GO Full Sleeve Cotton Baby Dress Regular T-shirts Pant with Set',
                offerprice: 499,
                price: 1499,
                image: boy2,
                qty: 1,


            },
            {
                id: 3,
                name: 'Hopscotch Boys',
                category: 'clothes',
                sexCategory: 'boy',
                description: 'Hopscotch Boys Navy Cotton Blend Graphic Print Shirt And Pant Set',
                offerprice: 776,
                price: 1499,
                image: boy3,
                qty: 1,
            },
            {
                id: 4,
                name: 'First Kick',
                category: 'clothes',
                sexCategory: 'boy',
                description: 'First Kick Unisex Baby Flannel Jumpsuit Classical Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear ',
                offerprice: 569,
                price: 1499,
                image: boy4,
                qty: 1,

            }],

            productsPurchased: [{
                id: 3,
                name: 'Hopscotch Boys',
                category: 'clothes',
                sexCategory: 'boy',
                description: 'Hopscotch Boys Navy Cotton Blend Graphic Print Shirt And Pant Set',
                offerprice: 776,
                price: 1499,
                image: boy3,
                qty: 1,
            },
            {
                id: 4,
                name: 'First Kick',
                category: 'clothes',
                sexCategory: 'boy',
                description: 'First Kick Unisex Baby Flannel Jumpsuit Classical Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear ',
                offerprice: 569,
                price: 1499,
                image: boy4,
                qty: 1,

            }],

        },

        {
            name: 'babifas',
            email: "babaifas@gmail.com",
            password: 12345678,
            profile: babi,
            cart: [{
                id: 48,
                name: 'Babique Unicorn',
                category: 'toys',
                description: `Babique Unicorn Teddy Bear Plush Soft Toy Cute Kids Birthday Animal Baby Boys/Girls (25 Cm, Yellow)`,
                offerprice: 178,
                price: 699,
                image: toy8,
                qty: 1

            },
            {
                id: 49,
                name: 'Monkey toy',
                category: 'toys',
                description: `Babique Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls/Baby (28 Cm, Monkey)`,
                offerprice: 179,
                price: 999,
                image: toy9,
                qty: 1

            },
            {
                id: 50,
                name: 'Giggles - Pip Squeaks (Pack Of 2 Piece)',
                category: 'toys',
                description: `Giggles - Pip Squeaks (Pack Of 2 Piece), Multicolour Animal Squeakers, Stimulates Senses, Natural squeaking sound, 3 months and above, Infant Toys`,
                offerprice: 149,
                price: 356,
                image: toy10,
                qty: 1

            },
            ],
            productsPurchased: [{
                id: 48,
                name: 'Babique Unicorn',
                category: 'toys',
                description: `Babique Unicorn Teddy Bear Plush Soft Toy Cute Kids Birthday Animal Baby Boys/Girls (25 Cm, Yellow)`,
                offerprice: 178,
                price: 699,
                image: toy8,
                qty: 1

            },
            {
                id: 49,
                name: 'Monkey toy',
                category: 'toys',
                description: `Babique Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls/Baby (28 Cm, Monkey)`,
                offerprice: 179,
                price: 999,
                image: toy9,
                qty: 1

            }]


        },
        {
            name: 'shaan',
            email: 'shan@gmail.com',
            password: 12345678,
            profile: shaan,
            cart: [{
                id: 43,
                name: 'LuvLap Sea Horse',
                category: 'toys',
                description: `LuvLap Sea Horse Baby Teether,Teething Toy for Infants&Babies,100% Food Grade Silicone,Multicolor`,
                offerprice: 205,
                price: 249,
                image: toy3,
                qty: 1

            },
            {
                id: 44,
                name: 'Baybee 7 Pcs Baby Rattles Toys',
                category: 'toys',
                description: `Baybee 7 Pcs Baby Rattles Toys Set for Babies, Non-Toxic Rattle Teether Set with Smooth Edges | Newborn Baby Gift Products | Baby Rattles Set for Newborn Infant Babies 3-12 Months Boy Girl (7 Pcs)`,
                offerprice: 205,
                price: 249,
                image: toy4,
                qty: 1

            },
            {
                id: 45,
                name: 'Luv Lap',
                category: 'toys',
                description: `Luv Lap Baby Ring Shaped Teether, Baby Teething Toy with Chewable Extensions, Raised & Textured Surface for Soothing Sore Gums, Easy Grip, BPA Free, 3 Months + (Multicolour))`,
                offerprice: 346,
                price: 419,
                image: toy5,
                qty: 1

            },
            {
                id: 46,
                name: 'FunBlast Loops',
                category: 'toys',
                description: `FunBlast Loops Teething Ring – Teether Rings with Rattle Sound Toys for New Born Baby, Silicone Rings Loop Teether for Baby, Infant Teething Ring Toys (Multicolor)`,
                offerprice: 284,
                price: 799,
                image: toy6,
                qty: 1

            }, {
                id: 16,
                name: 'poppies',
                category: 'clothes',
                sexCategory: 'boy',
                description: `Medieval Full Sleeve Cotton T-Shirt And Pants For Baby Boys - Baltic Sea`,
                offerprice: 599,
                price: 921,
                image: boy16,
                qty: 1

            },
            {
                id: 17,
                name: 'Real Basics',
                category: 'clothes',
                sexCategory: 'boy',
                description: `Real Basics unisex child fleece Track Suit`,
                offerprice: 330,
                price: 599,
                image: boy17,
                qty: 1

            }],

            productsPurchased: [{
                id: 43,
                name: 'LuvLap Sea Horse',
                category: 'toys',
                description: `LuvLap Sea Horse Baby Teether,Teething Toy for Infants&Babies,100% Food Grade Silicone,Multicolor`,
                offerprice: 205,
                price: 249,
                image: toy3,
                qty: 1

            },
            {
                id: 44,
                name: 'Baybee 7 Pcs Baby Rattles Toys',
                category: 'toys',
                description: `Baybee 7 Pcs Baby Rattles Toys Set for Babies, Non-Toxic Rattle Teether Set with Smooth Edges | Newborn Baby Gift Products | Baby Rattles Set for Newborn Infant Babies 3-12 Months Boy Girl (7 Pcs)`,
                offerprice: 205,
                price: 249,
                image: toy4,
                qty: 1

            },
            {
                id: 45,
                name: 'Luv Lap',
                category: 'toys',
                description: `Luv Lap Baby Ring Shaped Teether, Baby Teething Toy with Chewable Extensions, Raised & Textured Surface for Soothing Sore Gums, Easy Grip, BPA Free, 3 Months + (Multicolour))`,
                offerprice: 346,
                price: 419,
                image: toy5,
                qty: 1

            }]
        },
        {
            name: 'admin',
            password: 'admin@123',
            privilage: 'admin'
        }

    ]);

    //Bollean value to store if user is logged in or not
    const [signedin, setsignedin] = useState(false);

    // Buy now price
    const [Buynow, setBuynow] = useState({})

    //Currently loggedin user 
    const [currentuser, setcurrentuser] = useState({})

    //admin log status
    const [adminsignedin, setadminsignedin] = useState(false);

    //productsPurchased
    const [productsPurchased, setproductsPurchased] = useState([]);







    const [data, setdata] = useState([
        {
            id: 1,
            name: 'Animal Print T-shirt',
            category: 'clothes',
            sexCategory: 'boy',
            description: 'Hopscotch Boys Cotton and Polyester Animal Print T-shirt and Dungaree Set in Blue Color',
            offerprice: 1199,
            price: 767,
            image: boy1,
            qty: 1,
        },
        {
            id: 2,
            name: 'BABY GO',
            category: 'clothes',
            sexCategory: 'boy',
            description: 'BABY GO Full Sleeve Cotton Baby Dress Regular T-shirts Pant with Set',
            offerprice: 499,
            price: 1499,
            image: boy2,
            qty: 1,


        },
        {
            id: 3,
            name: 'Hopscotch Boys',
            category: 'clothes',
            sexCategory: 'boy',
            description: 'Hopscotch Boys Navy Cotton Blend Graphic Print Shirt And Pant Set',
            offerprice: 776,
            price: 1499,
            image: boy3,
            qty: 1,
        },
        {
            id: 4,
            name: 'First Kick',
            category: 'clothes',
            sexCategory: 'boy',
            description: 'First Kick Unisex Baby Flannel Jumpsuit Classical Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear ',
            offerprice: 569,
            price: 1499,
            image: boy4,
            qty: 1,

        },
        {
            id: 5,
            name: 'Hopscotch',
            category: 'clothes',
            sexCategory: 'boy',
            description: 'Hopscotch Baby Boys Cotton and Spandex Half Sleeves Applique Bow Solid Romper in Blue Color ',
            offerprice: 1199,
            price: 1799,
            image: boy5,
            qty: 1

        },
        {
            id: 6,
            name: 'Track Suit',
            category: 'clothes',
            sexCategory: 'boy',
            description: 'Real Basics unisex child fleece Track Suit',
            offerprice: 560,
            price: 999,
            image: boy6,
            qty: 1

        },
        {
            id: 7,
            name: 'Tendercare Boys',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Tendercare Baby Boy's & Baby Girl's Jumbo The Elephant Dungaree For 0-6Months Baby || Dress Clothes For Baby Boy And Baby Girl (Blue, 0-6 Months) Cotton`,
            offerprice: 645,
            price: 1059,
            image: boy7,
            qty: 1

        },
        {
            id: 8,
            name: 'Lillypupp',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Lillypupp Personalised name organic cotton newborn romper dress for boy girl | Gift for new born baby clothes products Customized onesie clothing gift for naming ceremony (0-3-6-9-12 months)`,
            offerprice: 399,
            price: 699,
            image: boy8,
            qty: 1

        },
        {
            id: 9,
            name: 'The Mom Store',
            category: 'clothes',
            sexCategory: 'boy',
            description: `The Mom Store Infant/Baby Rompers | Jabla Style | Cotton | For Baby Girls and Baby Boys | Snap Buttons | Comfortable`,
            offerprice: 599,
            price: 999,
            image: boy9,
            qty: 1

        },
        {
            id: 10,
            name: 'Little Peaches Baby',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Little Peaches Baby Clothing Set, New born Baby Clothes, Baby Jumpsuit/Onesies/Sleepsuit/Romper for Newborn, Baby Gift Set, Pure Cotton, Feather Soft Fabric`,
            offerprice: 468,
            price: 895,
            image: boy10,
            qty: 1

        },
        {
            id: 11,
            name: 'BabyGo',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Baby Boys Casual T-shirt Shorts  (Multicolor)`,
            offerprice: 469,
            price: 1299,
            image: boy11,
            qty: 1

        },
        {
            id: 12,
            name: 'BabyGo',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Romper For Baby Boys Casual Printed Pure Cotton  (Light Blue, Pack of 1)`,
            offerprice: 419,
            price: 999,
            image: boy12,
            qty: 1

        },
        {
            id: 13,
            name: 'BabyGo',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Romper For Baby Boys Casual Printed Pure Cotton  (Light Blue, Pack of 1)`,
            offerprice: 419,
            price: 999,
            image: boy13,
            qty: 1

        },
        {
            id: 14,
            name: 'poppies',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Athol Cotton Top And Shorts For Baby Boy - Dark Blue`,
            offerprice: 499,
            price: 789,
            image: boy14,
            qty: 1

        },
        {
            id: 15,
            name: 'poppies',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Gasper Full Sleeve Top And Pants For Baby Boys-Medieval Blue`,
            offerprice: 519,
            price: 865,
            image: boy15,
            qty: 1

        },
        {
            id: 16,
            name: 'poppies',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Medieval Full Sleeve Cotton T-Shirt And Pants For Baby Boys - Baltic Sea`,
            offerprice: 599,
            price: 921,
            image: boy16,
            qty: 1

        },
        {
            id: 17,
            name: 'Real Basics',
            category: 'clothes',
            sexCategory: 'boy',
            description: `Real Basics unisex child fleece Track Suit`,
            offerprice: 330,
            price: 599,
            image: boy17,
            qty: 1

        },
        {
            id: 18,
            name: 'First Kick',
            category: 'clothes',
            sexCategory: 'boy',
            description: `First Kick Unisex Baby Flannel Jumpsuit Classical Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear`,
            offerprice: 569,
            price: 1499,
            image: boy18,
            qty: 1

        },
        {
            id: 19,
            name: 'TASLAR',
            category: 'clothes',
            sexCategory: 'boy',
            description: `TASLAR Soft Flannel Unisex Baby Infant Kids Costume Jumpsuit Panda Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear (Black & White Panda, 12-18 Months)`,
            offerprice: 1299,
            price: 1699,
            image: boy19,
            qty: 1

        },
        {
            id: 20,
            name: 'M J FASHION',
            category: 'clothes',
            sexCategory: 'boy',
            description: `M J FASHION SIDDHI CLOTHING Baby Boy Dress Clothes Toddler Outfits Infant Tuxedo Formal Suits for Kids Long Sleeve Shirt + Pants Set (BLUE SUIT)`,
            offerprice: 499,
            price: 999,
            image: boy20,
            qty: 1

        },
        {
            id: 21,
            name: 'Clothe Funn',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Clothe Funn New Born Knee Length Baby Girl Dress`,
            offerprice: 377,
            price: 499,
            image: girl1,
            qty: 1

        },
        {
            id: 22,
            name: 'RUKMINI',
            category: 'clothes',
            sexCategory: 'girl',
            description: `RUKMINI Baby Girls Pure Cotton Frock Dress`,
            offerprice: 215,
            price: 600,
            image: girl2,
            qty: 1

        },
        {
            id: 23,
            name: 'Niren ',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Niren Enterprise Panther King chittah Printed Baby Frock`,
            offerprice: 449,
            price: 1999,
            image: girl3,
            qty: 1

        },
        {
            id: 24,
            name: 'Luvlap',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Luvlap Baby-Girl's Cotton A-Line Standard Length Dress (902116_Multicolor_6 to 12 Months)`,
            offerprice: 251,
            price: 325,
            image: girl4,
            qty: 1

        },
        {
            id: 25,
            name: 'Bold N Elegant',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Bold N Elegant Floral Embroidered Cotton Sleeveless Ruffle Top and Shorts Clothing Set for Infant Toddler Baby Girl`,
            offerprice: 679,
            price: 1999,
            image: girl5,
            qty: 1

        },
        {
            id: 26,
            name: 'POSHIKHA',
            category: 'clothes',
            sexCategory: 'girl',
            description: `POSHIKHA Baby Girls Midi/Knee Length Party Dress`,
            offerprice: 449,
            price: 1599,
            image: girl6,
            qty: 1

        },
        {
            id: 27,
            name: 'OMLI',
            category: 'clothes',
            sexCategory: 'girl',
            description: `OMLI Girl's Knee Length Frock`,
            offerprice: 425,
            price: 600,
            image: girl7,
            qty: 1

        },
        {
            id: 28,
            name: 'OMLI',
            category: 'clothes',
            sexCategory: 'girl',
            description: `OMLI Baby Girl Dress Toddler Dress Long Sleeve Infant Casual Dress Ruffle Print Clothes Baby Girls Clothing`,
            offerprice: 471,
            price: 999,
            image: girl8,
            qty: 1

        },
        {
            id: 29,
            name: 'poppies',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Cute Dot Printed Cotton Rompers For Newborn Baby Girl | 002A JB-G-RO-20`,
            offerprice: 499,
            price: 862,
            image: girl9,
            qty: 1

        },
        {
            id: 30,
            name: 'poppies',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Cute Sleeveless Frock For Newborn Baby Girl |001A JB-G-DR-826`,
            offerprice: 399,
            price: 599,
            image: girl10,
            qty: 1

        },
        {
            id: 31,
            name: 'poppies',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Lalola Full Sleeve Frock And Bloomers-Crystal Rose`,
            offerprice: 549,
            price: 789,
            image: girl11,
            qty: 1

        },
        {
            id: 32,
            name: 'AWA KIDS',
            category: 'clothes',
            sexCategory: 'girl',
            description: `AWA KIDS FASHION Net Casual Knee Length Solid Frock Dress for Girls (165)`,
            offerprice: 320,
            price: 999,
            image: girl12,
            qty: 1

        },
        {
            id: 33,
            name: 'Lehnvel',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Lehnvel Baby Girls Cotton Silk Frock`,
            offerprice: 498,
            price: 1126,
            image: girl13,
            qty: 1

        },
        {
            id: 34,
            name: 'H.K HOLY',
            category: 'clothes',
            sexCategory: 'girl',
            description: `H.K HOLY Baby Girl Knee Length Frock Dress for Baby Girls (0-6 & 6-12 Months) Dress for Baby Girls || Clothes for Baby Girls`,
            offerprice: 349,
            price: 799,
            image: girl14,
            qty: 1

        },
        {
            id: 35,
            name: 'PINK WINGS',
            category: 'clothes',
            sexCategory: 'girl',
            description: `PINK WINGS Baby Girl's Balloon Frock`,
            offerprice: 899,
            price: 1499,
            image: girl15,
            qty: 1

        },
        {
            id: 36,
            name: 'SV Garments',
            category: 'clothes',
            sexCategory: 'girl',
            description: `SV Garments Baby Girls Frock Dress with Soft net for 6-12month Baby Girl`,
            offerprice: 330,
            price: 599,
            image: girl16,
            qty: 1

        },
        {
            id: 37,
            name: 'Buy & Try Girls',
            category: 'clothes',
            sexCategory: 'girl',
            description: `SBuy & Try Girl's Georgette Floral Printed Frock Dress for Kids.`,
            offerprice: 464,
            price: 1999,
            image: girl17,
            qty: 1

        },
        {
            id: 38,
            name: 'NammaBaby',
            category: 'clothes',
            sexCategory: 'girl',
            description: `NammaBaby Premium Baby Girls Short Sleeves Frock Dress - Set of 1`,
            offerprice: 399,
            price: 999,
            image: girl18,
            qty: 1

        },
        {
            id: 39,
            name: 'PINK WINGS',
            category: 'clothes',
            sexCategory: 'girl',
            description: `PINK WINGS Baby girl Knee Length Dress`,
            offerprice: 948,
            price: 1499,
            image: girl19,
            qty: 1

        },
        {
            id: 40,
            name: 'Mintlyjet',
            category: 'clothes',
            sexCategory: 'girl',
            description: `Mintlyjet Blue Cotton Fabric Baby Girl Frock Dress`,
            offerprice: 450,
            price: 899,
            image: girl20,
            qty: 1

        },
        {
            id: 41,
            name: 'Crochet Bunny Rattle',
            category: 'toys',
            description: `SYCAMORE EAST Baby Rattle for Newborn, Crochet Bunny Rattle Toy Natural Wool, Music Shaker Rattle for Hand Grips, Boy Girl First Rattle Gift Eliphant`,
            offerprice: 429,
            price: 999,
            image: toy1,
            qty: 1

        },
        {
            id: 42,
            name: 'Wembley Dancing Monkey',
            category: 'toys',
            description: `Wembley Dancing Monkey Musical Toy for Kids Baby Spinning Rolling Doll Tumble Toy with Voice Control Musical Light and Sound Effects with Sensor - ISI Mark - Made in India`,
            offerprice: 248,
            price: 599,
            image: toy2,
            qty: 1

        },
        {
            id: 43,
            name: 'LuvLap Sea Horse',
            category: 'toys',
            description: `LuvLap Sea Horse Baby Teether,Teething Toy for Infants&Babies,100% Food Grade Silicone,Multicolor`,
            offerprice: 205,
            price: 249,
            image: toy3,
            qty: 1

        },
        {
            id: 44,
            name: 'Baybee 7 Pcs Baby Rattles Toys',
            category: 'toys',
            description: `Baybee 7 Pcs Baby Rattles Toys Set for Babies, Non-Toxic Rattle Teether Set with Smooth Edges | Newborn Baby Gift Products | Baby Rattles Set for Newborn Infant Babies 3-12 Months Boy Girl (7 Pcs)`,
            offerprice: 205,
            price: 249,
            image: toy4,
            qty: 1

        },
        {
            id: 45,
            name: 'Luv Lap',
            category: 'toys',
            description: `Luv Lap Baby Ring Shaped Teether, Baby Teething Toy with Chewable Extensions, Raised & Textured Surface for Soothing Sore Gums, Easy Grip, BPA Free, 3 Months + (Multicolour))`,
            offerprice: 346,
            price: 419,
            image: toy5,
            qty: 1

        },
        {
            id: 46,
            name: 'FunBlast Loops',
            category: 'toys',
            description: `FunBlast Loops Teething Ring – Teether Rings with Rattle Sound Toys for New Born Baby, Silicone Rings Loop Teether for Baby, Infant Teething Ring Toys (Multicolor)`,
            offerprice: 284,
            price: 799,
            image: toy6,
            qty: 1

        },
        {
            id: 47,
            name: 'Elephant Toy',
            category: 'toys',
            description: `Webby Soft Animal Plush Elephant Toy 20cm, Blue & Grey`,
            offerprice: 218,
            price: 349,
            image: toy7,
            qty: 1

        },
        {
            id: 48,
            name: 'Babique Unicorn',
            category: 'toys',
            description: `Babique Unicorn Teddy Bear Plush Soft Toy Cute Kids Birthday Animal Baby Boys/Girls (25 Cm, Yellow)`,
            offerprice: 178,
            price: 699,
            image: toy8,
            qty: 1

        },
        {
            id: 49,
            name: 'Monkey toy',
            category: 'toys',
            description: `Babique Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls/Baby (28 Cm, Monkey)`,
            offerprice: 179,
            price: 999,
            image: toy9,
            qty: 1

        },
        {
            id: 50,
            name: 'Giggles - Pip Squeaks (Pack Of 2 Piece)',
            category: 'toys',
            description: `Giggles - Pip Squeaks (Pack Of 2 Piece), Multicolour Animal Squeakers, Stimulates Senses, Natural squeaking sound, 3 months and above, Infant Toys`,
            offerprice: 149,
            price: 356,
            image: toy10,
            qty: 1

        },
        {
            id: 51,
            name: 'Crawling Crab Toy',
            category: 'toys',
            description: `Wembley Dancing Crawling Baby Toys | Crawling Crab Toy for Kids Electronic Walking Moving Toys for Babies Infant Toddlers Tummy Time Interactive Early Learning Educational Toys`,
            offerprice: 799,
            price: 1699,
            image: toy11,
            qty: 1

        },
        {
            id: 52,
            name: 'Rings',
            category: 'toys',
            description: `Little's Plastic Junior Ring (Multicolour) (6 pieces)`,
            offerprice: 159,
            price: 249,
            image: toy12,
            qty: 1

        },
        {
            id: 53,
            name: 'Mee Mee Musical Animal Cot',
            category: 'toys',
            description: `Mee Mee Musical Animal Cot Mobile (4-Toy Safari Theme)`,
            offerprice: 1339,
            price: 1776,
            image: toy13,
            qty: 1

        },
        {
            id: 54,
            name: 'ZUDO TOYS',
            category: 'toys',
            description: `ZUDO TOYS Shape Sorting Cube With 18 Shape And Different Color - Kids Activity Toys - Learning And Educational Toys With Multicolour - (Bis Approved), 19 Pcs`,
            offerprice: 240,
            price: 499,
            image: toy14,
            qty: 1

        },
        {
            id: 55,
            name: 'Rattle - Bear',
            category: 'toys',
            description: `Abracadabra Organics Collectible Face Rattle - Bear`,
            offerprice: 296,
            price: 349,
            image: toy15,
            qty: 1

        },
        {
            id: 56,
            name: 'Crawling Baby Toy',
            category: 'toys',
            description: `Wembley Dancing Crawling Baby Toys for 6 Month Old Baby Girls Boys, Kids Musical Toys for Babies with Light with 360° Spinning & Rolling Moving Toys for 6-12 Months Penguin Sound Toy - BIS Approved`,
            offerprice: 399,
            price: 699,
            image: toy16,
            qty: 1

        },
        {
            id: 57,
            name: 'Cute Caterpillar',
            category: 'toys',
            description: `MOROVIK Cute Caterpillar Wigglitoy Press & Crawl Baby Toy with Rattle, Infant Musical Crawling Toy with Light Up, Baby Crawling Toys, Press and Go Infant Baby Toys for 6 7 8 9 10-15 Month Old Baby`,
            offerprice: 729,
            price: 1599,
            image: toy17,
            qty: 1

        },
        {
            id: 58,
            name: 'Pluto toy',
            category: 'toys',
            description: `Babique Pluto Sitting Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls (30 Cm)`,
            offerprice: 309,
            price: 899,
            image: toy18,
            qty: 1

        },
        {
            id: 59,
            name: 'Jam & Honey',
            category: 'toys',
            description: `Amazon Brand - Jam & Honey Husky Dog, Plush/Soft Toy for Boys, Girls and Kids, Super-Soft, Safe, Great Birthday Gift (Grey and White, 17 cm)`,
            offerprice: 199,
            price: 750,
            image: toy19,
            qty: 1

        },
        {
            id: 60,
            name: 'Jam & Honey',
            category: 'toys',
            description: `Amazon Brand - Jam & Honey Dolphin, Plush/Soft Toy for Boys, Girls and Kids, Super-Soft, Safe, Great Birthday Gift (Blue, 18 cm)`,
            offerprice: 160,
            price: 600,
            image: toy20,
            qty: 1

        },
        {
            id: 61,
            name: 'Baby Cream',
            category: 'care',
            description: `The Moms Co. Baby Cream (50 gm)`,
            offerprice: 154,
            price: 395,
            image: care1,
            qty: 1

        },
        {
            id: 62,
            name: 'Baby Gift Basket',
            category: 'care',
            description: `Himalaya Baby Gift Basket ( Pack of 9 )`,
            offerprice: 821,
            price: 1150,
            image: care2,
            qty: 1

        },
        {
            id: 63,
            name: 'Himalaya Total Care Baby Pants Diapers',
            category: 'care',
            description: `Himalaya Total Care Baby Pants Diapers, Medium (M), 78 Count, (7 - 12 kg), With Anti-Rash Shield, Indian Aloe Vera and Yashad Bhasma, Silky Soft Inner Layer`,
            offerprice: 778,
            price: 1125,
            image: care3,
            qty: 1

        },
        {
            id: 64,
            name: 'Himalaya Baby Gift Pack',
            category: 'care',
            description: `Himalaya Baby Gift Pack Series,Pack of 1 set,white`,
            offerprice: 228,
            price: 250,
            image: care4,
            qty: 1

        },
        {
            id: 65,
            name: 'Baby Wipes',
            category: 'care',
            description: `Little's Soft Cleansing Baby Wipes with Aloe Vera, Jojoba Oil and Vitamin E (80 wipes) pack of 3`,
            offerprice: 230,
            price: 213,
            image: care5,
            qty: 1

        },
        {
            id: 66,
            name: 'Baby Dove',
            category: 'care',
            description: `Baby Dove Shampoo 200 ml, Mild No Tears Rich Moisture Baby Shampoo for kids, Gentle Care for Baby's Soft Hair - No sulphate, no Paraben shampoo`,
            offerprice: 160,
            price: 229,
            image: care6,
            qty: 1

        },
        {
            id: 67,
            name: 'Baby Body Wash',
            category: 'care',
            description: `Mothercare All We Know Baby Body Wash (300ml), Baby Lotion (300ml), Baby Oil (300ml) and Baby Powder (150gm) Combo`,
            offerprice: 1059,
            price: 1226,
            image: care7,
            qty: 1

        },
        {
            id: 68,
            name: ' Baby Lotion',
            category: 'care',
            description: `Mamaearth Daily Moisturizing Natural Baby Lotion (400 ml)`,
            offerprice: 291,
            price: 339,
            image: care8,
            qty: 1

        },
        {
            id: 69,
            name: 'Baby Care Collection',
            category: 'care',
            description: `Johnson's Baby Care Collection with Organic Cotton Baby Romper (8 Gift Items, Purple)`,
            offerprice: 570,
            price: 610,
            image: care9,
            qty: 1

        },
        {
            id: 70,
            name: 'Baby Liquid Laundry Detergent',
            category: 'care',
            description: `Mee Mee Mild Baby Liquid Laundry Detergent (500ml - Refill Pack) And Mee Mee Anti-Bacterial Baby Liquid Cleanser Combo (500 ml - Refill Pack)`,
            offerprice: 509,
            price: 678,
            image: care10,
            qty: 1

        },
        {
            id: 71,
            name: 'Slurrp Farm Cereal',
            category: 'nutrition',
            description: `Slurrp Farm Cereal, Ragi, Rice and Strawberry with Milk, Instant Healthy Food, NO Added Sugar, Mildly Sweetened with Date Powder, 200 g`,
            offerprice: 349,
            price: 399,
            image: food1,
            qty: 1

        },
        {
            id: 72,
            name: 'Nestle Cerelac',
            category: 'nutrition',
            description: `Nestle Cerelac Baby Cereal with Milk , Wheat Apple ,Stage 1, From 6 to 24 Months , Source of Iron & Protein , 300g`,
            offerprice: 260,
            price: 329,
            image: food2,
            qty: 1

        },
        {
            id: 73,
            name: 'Teething Sticks',
            category: 'nutrition',
            description: `Early Foods - Ragi & Sesame Teething Sticks, 20 Pieces, 150 g`,
            offerprice: 175,
            price: 229,
            image: food3,
            qty: 1

        },
        {
            id: 74,
            name: 'Baby Food Feeder',
            category: 'nutrition',
            description: `LuvLap Silicone Easy Squeezy Baby Food Feeder, 4M+, 90ml, (Blue)`,
            offerprice: 246,
            price: 349,
            image: food4,
            qty: 1

        },
        {
            id: 75,
            name: ' Baby Food Grinding bowl',
            category: 'nutrition',
            description: `Luv Lap Baby Food Grinding Cum Feeding Bowl, Portable Baby Food Masher & Serving Bowl for Baby weaning Food Preparation (Pack of 1 Set,White & Blue)`,
            offerprice: 198,
            price: 269,
            image: food5,
            qty: 1

        },
        {
            id: 76,
            name: 'Manna Health Mix',
            category: 'nutrition',
            description: `Manna Health Mix Instant 200g, Beetroot & Carrot with Milk, Travel Friendly (Mix with Water/Milk and Serve)`,
            offerprice: 225,
            price: 250,
            image: food6,
            qty: 1

        },
        {
            id: 77,
            name: 'Slurrp Farm Rolled Oats',
            category: 'nutrition',
            description: `Slurrp Farm Rolled Oats, 100% Natural Wholegrain, High Protein & Fiber, Healthy Food with No Added Sugar, Breakfast Cereal, Healthy Snack, Dalia Porridge, 500g`,
            offerprice: 171,
            price: 245,
            image: food7,
            qty: 1

        },
        {
            id: 78,
            name: 'LuvLap Silicone Feeder',
            category: 'nutrition',
            description: `LuvLap Silicone Baby Bib for Feeding & Weaning Babies & Toddlers, Waterproof, Washable & Reusable, Non Messy Easy Cleaning, No Bad Odour, Adjustable Neckline with Buttons (Orange)`,
            offerprice: 278,
            price: 299,
            image: food8,
            qty: 1

        },

        {
            id: 79,
            name: 'Joie High Chair for Baby',
            category: 'nutrition',
            description: `Joie High Chair for Baby, Multiply 6 in 1 Portable Booster Seat with 6 Modes with 3-Position Seat Recline, Adjusts to 5 Heights and 5-Point Safety Harness, 6-72 Months`,
            offerprice: 22499,
            price: 24999,
            image: food9,
            qty: 1

        },

        {
            id: 80,
            name: 'Joie Mimzy 2in1 High Chair',
            category: 'nutrition',
            description: `Joie Mimzy 2in1 High Chair with 7 Height adjustments (6 Months to 15kg)`,
            offerprice: 14849,
            price: 16999,
            image: food10,
            qty: 1

        },


    ]);




    return <dataContext.Provider value={{
        data,
        setdata,
        cart,
        setCart,
        search,
        setSearch,
        users,
        setusers,
        currentuser,
        setcurrentuser,
        signedin,
        setsignedin,
        Buynow,
        setBuynow,
        productsPurchased,
        setproductsPurchased,
        adminsignedin,
        setadminsignedin,
    }}>
        {children}
    </dataContext.Provider>
}

export default Data;
