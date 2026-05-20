# cs5610-airbnb-listings

A web page that displays the first 50 San Francisco Airbnb listings, loaded asynchronously from a JSON file.

GitHub Page: https://julia-weppler-1.github.io/cs5610-airbnb-listings/

## Assignment Description

Per the assignment description on Canvas: "Implement a page that displays and loads all the first 50 listings from the JSON file using AJAX (JavaScript fetch and await) as done in class. The page should show the listing name, description, amenities, host (name and photo), price, thumbnail, and some creative addition that separates your code from others. Please submit your github repo, and include a meaningful README that links to the deployment location (e.g. github-pages)"

## Objective

- Practice AJAX with `fetch` and `await` to load and render JSON data dynamically
- Build a responsive listings page using Bootstrap

## Tech Requirements

- HTML5
- CSS
- JavaScript (ES6+)
- Bootstrap 5.3
- ESLint for code linting

## Creative Addition

My creative addition for this exercise is a view toggle lets users switch between two layouts:
- Normal view: full listing cards showing the thumbnail, name, host, price, description, and amenities
- Compact view: a more dense image-based grid where listing details (name, host, price) appear on hover via a dark overlay

## How to Install & Use

1. Clone the repository:
   ```bash
   git clone https://github.com/julia-weppler-1/cs5610-airbnb-listings.git
   cd cs5610-airbnb-listings
   ```

2. Run a local web server. Pick either:

   ```bash
   reload -b
   ```

   ```bash
   http-server
   ```

3. Open the URL printed in the terminal in your browser.

4. Click the Normal / Compact buttons to toggle between layouts.

## Course

Built for [CS5610 Web Development](https://johnguerra.co/classes/webDevelopment_online_summer_2026/) at Northeastern University.

## Author

Julia Weppler
