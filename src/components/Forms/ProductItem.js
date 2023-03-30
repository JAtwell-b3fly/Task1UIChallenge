import { PILayout } from "../Layouts/productItem";
import { CLabel } from "../common/Label";
import { CIconButton } from "../common/IconButton";
import {Avatar} from 'native-base';
import StarRating from 'react-native-star-rating'
export const ProductItem = (/* {item} */) =>
{
    /* const image = item.Image;
    const title = item.Title;
    const rating = item.Rating;
    const desc = item.Description;
    const price= item.Price; */
   
    return(
        <PILayout
            /* Image = {<Avatar size = {"xl"} source={{uri:{image}}}></Avatar>}

            Title = {<CLabel Label = {title}/>}

            Description = {<CLabel Label = {desc}/>}
            Rating = {<StarRating disabled = {true} maxStars = {5} rating = {rating} starSize = {5} />}

            CartButton = {<CIconButton myIcon = "cart-variant"/>}

            WishListButton = {<CIconButton myIcon = "cards-heart"/>}

            Price = {price} */
        />
    );
}