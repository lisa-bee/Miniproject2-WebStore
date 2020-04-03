# Mini project-Web store

This is web store bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and designed with the [Grommet design system](https://v2.grommet.io/).
The store sells posters. On the start page you can see all the available posters and directly add them to your cart. You can also click on on a poster to get more information about it and add it to your cart from that page. When you add a product to your cart a confirmation pop up appears to clearify that the product was added.
If you go to the cart you'll see all your products with a title, quantity and price together with the total price. To place a order you need to fill in your shipping information, payment method and shipping option.
When the order is placed a mocked API runs and after 3 seconds you get redirected to the confrimation page.

# In order to build the project

Since there's a bug in Grommets typing, you need to ctr-click (Windows) or cmd-click (Mac) on the Video component in Hero.tsx so that the file "index.d.ts" opens. On line number 16 you need to change to: "declare const Video: React.ComponentClass<VideoProps>;

You need to run "npm install --save react-spinners" to install the loading spinner in the check out page.

At last you need to run "npm install grommet grommet-icons styled-components --save" to install Grommet.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

[Grommet Design System](https://v2.grommet.io/)
[Github Repo](https://github.com/lisa-bee/Miniproject2-WebStore)
[Github pages](https://lisa-bee.github.io/Miniproject2-WebStore)
