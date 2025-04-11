# README

* Hello and thank you for your interest in my fullstack project! This is the README file for the frontend of my ecommerce platform "Bandit Tees."

## Prerequisites

* First install Node.js here (https://nodejs.org/en) and test it in command prompt with the command "npm -v".
* Also ensure to install Tailwind CSS with Vite here (https://tailwindcss.com/docs/installation/using-vite).
* If interested in building a React app with Vite, use this command "npm create vite@latest my-react-app --template react"
where "my-react-app" is the title of your app.

## Implemented Features

This frontend UI has many features including pages like About, Cart, Collection, Contact, Home, Login, Orders, PlaceOrder, Product,
and the profile page. The about page displays information about the company, and the cart page displays products in the users cart along with the price associated
with their current items (including taxes and delivery fees). The collection page is a grid-layout of all the current products in the store, whereas the product page
is specifically for displaying a singular product, its price, rating, size selection, and add to cart button.
The contact page displays our company phone number and email address. The Home page provides a brief overview of the latest products, best-selling products,
and new additions to the company's inventory. The login page allows users to signup or login to their account (as this is a UI, the data does not go anywhere at this 
time). The Orders page displays a users order history. The PlaceOrder page allows users to view their items, associated cost, and payment method selection.
The PlaceOrder page contains a button to confirm a users order which will then display a notification in the top right corner. 
The product page displays an individual item, its cost and rating, as well as available shirt sizes. This product page also has a button to add it to the cart,
but the product will not be added to the cart if the user has not selected a size (a notification will pop up in the top right corner).
These features do not have any memory associated with them because this is just the UI for the platform, therefore there are no actual accounts or order histories
associated with these accounts. This also means that there are no real payment methods yet.

Other features include the components to make the UI responsive. These components include BestSeller, Footer, Hero, CartTotal, LatestCollection,
Navbar, ProductItem, RelatedProducts, SearchBar, and the Title component. Each of these components provide the user with a more enriching online shopping
experience. The bestseller component is to filter products based on their "BestSeller" attribute in the assets file. This component also displays these products on the 
home page. Similarly, the hero and footer also display on the home page. However, the hero is used to display the newest additions to the company's inventory.
The carttotal component gathers product information in the cart to add responsiveness to user input, such as increasing or decreasing the number of products in the cart,
as well as correspondingly increasing or decreasing the number displayed on the cart icon in the navbar. The latestcollection component is also used as a filter and 
display of products on the home page. The navbar is a component to provide navigation to other pages, it is available on every page. The productitem component provides 
a hover-over feature when navigating through the products page, making the UI look more responsive to user input. The relatedproducts component filters products similar
to others and displays it on the bottom of the products page. The searchbar is for navigating through the  company's inventory and is only available on the products 
page. This searchbar component also filters through the inventory and provides suggestions based on user input and displays only the products the user could be 
searching for. The title component creates a template for creating an aesthetically-pleasing title on any given page.

## Testing Instructions
There are no obvious holes or errors in the logic behind this UI, but it is safe to assume that you should try to use the features as intended. A special feature that
applies is the search bar; IT IS ONLY AVAILABLE IN THE PRODUCTS PAGE AND THE BUTTON DOES NOT NAVIGATE YOU TO THE PRODUCTS PAGE. This feature is best 
available only in the products page and forcing users to navigate to the products page when pressing the search icon could cause irritation if they were browsing the 
home page, for instance. It is also worth mentioning that delivery information is not currently required as part of the place order page. In the future, this will likely
be updated as deliveries require an address, name, among other information.

## Third-party libraries
To create this responsive UI, I utilized Tailwind CSS, React.js, as well as a few libraries within these frameworks. Examples include React from react toastify for toast notifications from react, routes and route react-router-dom for routing, the useState, useContext,useEffect, among other methods from react, along with link, navlink, and navigate from react-router-dom. 