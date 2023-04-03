import React, { useState } from "react";
import { PILayout } from "../Layouts/productItem";
import { CLabel } from "../common/Label";
import { CIconButton } from "../common/IconButton";
import {Avatar,Circle} from 'native-base';
import StarRating from 'react-native-star-rating';
import { StyleSheet } from "react-native";
export const ProductItem = ( {item} ) =>
{
    const image = item.Image;
    const title = item.Title;
    const rating = item.Rating;
    const desc = item.Description;
    const price= item.Price; 
   
    return(
        <PILayout
        
             Image = {<Avatar size = {"lg"} source={{uri:image}}>I</Avatar>}

            Title = {<CLabel numberOfLines={1} Label = {title}/>}

            Description = {<CLabel  ellipsizeMode = "tail" Label = {desc}/>}
            Rating = {<StarRating fullStarColor="#D9E209" emptyStarColor="black"   disabled = {true} maxStars = {5} rating = {rating} starSize = {8} />}

            CartButton = {<CIconButton myIcon = "cart-variant"/>}

            WishListButton = {<CIconButton myIcon = "cards-heart"/>}

            Price = {price} 
        />
    );
}
