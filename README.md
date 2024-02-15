## demo mobile version

https://0sikarwar.github.io/aspire-test/

### Interactions are optimized for mobile devices or browser developer tool simulators.

## Notes:

- Initially, four cards are rendered, with three being debit cards.
- Actions like adding, freezing, and deleting cards sync with local storage.
- If only one card left that will not be deleted. Instead that will be visible in both tabs.

## implemented feature

- Clicking 'New Card' opens a modal with one input box and one select, each validated.
- Card number, CVV, and expiry are randomly generated.
- Tabs function to display data based on card type, updating the carousel.
- Carousel includes a 'Show Card Number' feature, revealing the number upon click.
- Freeze Card feature adjusts card opacity while maintaining 'Show Card Number' functionality.
- Cancel Card option prompts a default browser confirm before deleting the visible card.
- Accordion feature showcases card details for the current card.
- Accordion for Recent Transactions displays initial 4 transactions; 'View All' loads remaining.

## In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

deploys the page on github page hosted at:
https://0sikarwar.github.io/aspire-test/
