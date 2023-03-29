import { PILayout } from "./Layouts/productItem";
import { CLabel } from "./common/Label";
import { CIconButton } from "./common/IconButton";

export const ProductItem = ({item}) =>
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