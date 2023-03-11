import React from "react";

export default function WishListCard ({name, img, calification, price, genre}) {
    return(
        <div>
            <div>
                <div>
                    <img src={img} alt="" />
                    <div>
                        <h1>{name}</h1>
                    </div>
                    <div>
                        <p>{calification}</p>
                        <p>{genre}</p>
                    </div>
                    <div>
                        <h5>{price}</h5>
                    </div>

                </div>
            </div>
        </div>
    );
}