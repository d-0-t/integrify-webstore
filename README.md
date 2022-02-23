# Web Shop FrontEnd Showcase Project
### with TypeScript, React.js, Redux, SASS. Click for [ ❤️ **LIVE DEMO** ](https://d-0-t-fake-webstore.netlify.app/)❤️

The point of this project was to make the FrontEnd part of a web store that uses some sort of dummy API to fetch data and uses the most modern and mainstream tools in web development as of now (TypeScript, React.js, Redux).

I chose https://fakestoreapi.com/ to display data in this particular case.

## Basic requirements
- **Use React, Redux, TypeScript**
- Divide the app into smaller components. For example create a separate component for the card and separate component for the button
- Implement a working **Cart System** as shown in the demo
- Disable button once item is added to cart (or custom)
- Show a **counter** on the cart icon
- Implement **Search** functionality
- No refresh upon navigation - **useNavigate hook** (previously useHistory)
- Implement state persistance by using **localStorage**
- Create a **Light and Dark theme**
- Implement **sorting** (optional)
- **Details page** for the product

## Extra functions I added
- **Custom 404 error page for non-existing paths**
- Five (5) **random products** on the home page
- **Categories** for product types (/shop)
- Some **optimization** with memo() export (product cards were affected)
- Extra **accessibility with aria-labels** if needed (remove item button in cart only had the contents "X")
- Fixing **middle-click functionality** - restoring the ability to open a new tab while using useNavigate hook
- Fixed the issue of stuck scroll position (by **scrolling to the top** after navigation)
- **Checkout** button with checkout form (no payment) and updating values, the form can also be hidden
- **Cost** calculation
- Ability to **add more than one of an item**
- Ability to **empty cart**
- Indication of **active page** in the nav bar
- Indication of **active / selected category** (/shop)
- Three (3) **sorting options** (prices descending/ascending, rating descending)
- **Back to /shop button** on details page
- **Rating visualization with stars (5)** written from scratch
  