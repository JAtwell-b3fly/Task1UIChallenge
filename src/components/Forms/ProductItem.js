import { PILayout } from "./Layouts/productItem";
import { CLabel } from "./common/Label";
import { CIconButton } from "./common/IconButton";

export const ProductItem = ({Image,Title,Description,Rating,CartButton,WishListButton,Price}) =>
{
    return(
        <PILayout
            Image = {
                        Image
                }

            Title = {
                        Title
                }

            Description = {
                        Description
            }
            Rating = {
                        Rating
            }

            CartButton = {
                        CartButton
            }

            WishListButton = {
                        WishListButton
            }

            Price = {
                        Price
            }
        />
    );
}