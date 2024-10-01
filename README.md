# E-Commerce Product Listing with Categories, Pagination, and Search

This project is a simple e-commerce product listing app that fetches product data from an API, displays categories, and allows users to filter products by category and search input. Products are fetched in paginated batches and displayed incrementally as they are loaded.

## Features

1. **Fetch Products and Categories**
   - Uses [DummyJSON API](https://dummyjson.com/docs) to fetch products and product categories.

2. **Category Selection**
   - Displays all categories.
   - Allows for single category selection.
   - Shows products for the selected category; if no category is selected, products from all categories are shown.

3. **Paginated Product Fetching**
   - Products are fetched in batches of 10.
   - Products are displayed as they are fetched (1–10, 11–20, and so on), without using UI pagination.

4. **Product Search**
   - Implements search functionality to filter products based on the user's input.

5. **Query Parameters**
   - The selected category and search input are stored as query parameters in the URL for easy sharing and direct access to specific filters.

## Limitations
The limitations of this app are listed in the comments in `App.js` as per the requirements. Some potential limitations may include:
- API request limits, if any, imposed by the DummyJSON service.
- No UI-based pagination, so users might experience longer wait times if the product data grows significantly.
  
## Technologies Used

- **Next.js**: Framework for building server-side rendered React applications.
- **Redux**: For state management of products, categories, selected category, and search input.
- **Tailwind CSS**: For styling and layout.
- **React**: For building the UI.
