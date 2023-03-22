import Header from './Header'; //import custom created header component
import Footer from './Footer'; //import custom created footer component
import Filter from './Filter'; //import custom created filter component
import WishlistCatalogBox from './WishlistCatalogBox'; //import custom created wishlish catalogbox component
import PaginationControl from './WishlistPagination'; //import custom created pagination control component

import './wishlistStyles.css';

const wishlistScreen = `
  <div class="wishlist-screen">
    ${Header}
    ${Filter}
    <h1 class="wishlist-header">Wishlist</h1>
    ${WishlistCatalogBox}
    ${PaginationControl}
    ${Footer}
  </div>
`;

const filterComponent = document.querySelector('#wishlist-filter');

filterComponent.addEventListener('change', () => {
  // Get the selected filter options
  const selectedOptions = getSelectedOptions(filterComponent);

  // Update the products displayed in the catalog box
  WishlistCatalogBox.updateProducts(selectedOptions);
});

const paginationControl = document.querySelector('#wishlist-pagination');

paginationControl.addEventListener('swipe', (event) => {
  // Determine the direction of the swipe (left or right)
  const direction = event.detail.direction;

  // Get the current page number and total number of pages
  const currentPage = WishlistCatalogBox.getCurrentPage();
  const totalPages = WishlistCatalogBox.getTotalPages();

  // Update the displayed products in the catalog box based on the swipe direction
  if (direction === 'left' && currentPage < totalPages) {
    WishlistCatalogBox.showNextPage();
  } else if (direction === 'right' && currentPage > 1) {
    WishlistCatalogBox.showPreviousPage();
  }
});

export default wishlistScreen;
