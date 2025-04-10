import logo from './logo.png'
import search_icon from './search_icon.png'
import profile_icon from './profile_icon.png'
import cart_icon from './cart_icon.png'
import menu_icon from './menu_icon.png'
import dropdown_icon from './dropdown_icon.png'
import cross_icon from './cross_icon.png'
import star_icon from './star_icon.png'
import delete_icon from './delete_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import about_img from './about_img.png'
import three_cheers_shirt from './three_cheers_shirt.png'
import BlinkCropTop from './BlinkCropTop.png'
import BLINKShirt from './BLINKShirt.png'
import DGDShirt from './DGDShirt.png'
import DGDStrawberryShirt from './DGDStrawberryShirt.png'
import MisadventuresShirt from './MisadventuresShirt.png'
import PTVShirt from './PTVShirt.png'
import SelfishMachinesShirt from './SelfishMachinesShirt.png'
import Sum41Shirt from './Sum41Shirt.png'
import ThreeDaysGraceShirt from './ThreeDaysGraceShirt.png'
import YellowcardShirt from './YellowcardShirt.png'

export const assets = { //primarily for product images and place ',' at end for multiple image entries
    logo,
    search_icon,
    profile_icon,
    cart_icon,
    menu_icon,
    dropdown_icon,
    cross_icon,
    star_icon,
    delete_icon,
    stripe_logo,
    razorpay_logo,
    about_img,
    three_cheers_shirt,
    BlinkCropTop,
    BLINKShirt,
    DGDShirt,
    DGDStrawberryShirt,
    MisadventuresShirt,
    PTVShirt,
    SelfishMachinesShirt,
    Sum41Shirt,
    ThreeDaysGraceShirt,
    YellowcardShirt
}
export const products = [
    {
        id: 0,
        name: "Women's Blink-182 Crop Top",
        description: "A crop top for the self-titled album.",
        price: 12,
        image: [BlinkCropTop], //from assets, can use array with comma separated list for multiple images in product page
        category: "Womens",
        genre: "Punk Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: true,
        rating: 4.7
    },
    {
        id: 1,
        name: "Men's Blink-182 One More Time Part 2 T-Shirt",
        description: "A shirt for the One More Time Part 2 album.",
        price: 15,
        image: [BLINKShirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Mens",
        genre: "Punk Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: true,
        rating: 4.6
    },
    {
        id: 2,
        name: "Men's Sum-41 T-Shirt",
        description: "A shirt for Sum-41's tour.",
        price: 15,
        image: [Sum41Shirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Mens",
        genre: "Punk Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: false,
        rating: 3.6
    },
    {
        id: 3,
        name: "Women's Yellowcard T-Shirt",
        description: "A shirt for Yellowcard.",
        price: 15,
        image: [YellowcardShirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Womens",
        genre: "Punk Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: false,
        rating: 4.4
    },
    {
        id: 4,
        name: "Men's Three Days Grace T-Shirt",
        description: "A shirt for Three Days Grace's One-X album.",
        price: 20,
        image: [ThreeDaysGraceShirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Mens",
        genre: "Punk Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: false,
        rating: 4.2
    },
    {
        id: 5,
        name: "Men's My Chemical Romance Three Cheers for Sweet Revenge T-Shirt",
        description: "A shirt for MCR's Three Cheers for Sweet Revenge album.",
        price: 15,
        image: [three_cheers_shirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Mens",
        genre: "Emo Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111111, //might delete later idk
        bestseller: false,
        rating: 4.0
    },
    {
        id: 6,
        name: "Men's Pierce The Veil Collide With The Sky T-Shirt",
        description: "A shirt for PTV's Collide With The Sky album.",
        price: 20,
        image: [PTVShirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Mens",
        genre: "Emo Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: true,
        rating: 4.9
    },
    {
        id: 7,
        name: "Women's Dance Gavin Dance Strawberry T-Shirt",
        description: "A shirt for Dance Gavin Dance.",
        price: 25,
        image: [DGDStrawberryShirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Womens",
        genre: "Emo Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: true,
        rating: 4.8
    },
    {
        id: 8,
        name: "Women's Pierce The Veil Selfish Machines T-Shirt",
        description: "A shirt for PTV's Selfish Machines album.",
        price: 12,
        image: [SelfishMachinesShirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Womens",
        genre: "Emo Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: false,
        rating: 4.3
    },
    {
        id: 9,
        name: "Men's Pierce The Veil Misadventures T-Shirt",
        description: "A shirt for PTV's Misadventures album.",
        price: 14,
        image: [MisadventuresShirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Men's",
        genre: "Emo Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: true,
        rating: 4.5
    },
    {
        id: 10,
        name: "Men's Dance Gavin Dance T-Shirt",
        description: "A shirt for Dance Gavin Dance.",
        price: 18,
        image: [DGDShirt], //from assets, can use array with comma separated list for multiple images in product page
        category: "Mens",
        genre: "Emo Rock",
        sizes: ["S", "M", "L", "XL"],
        date: 1111111111112, //might delete later idk
        bestseller: false,
        rating: 3.9
    }

]