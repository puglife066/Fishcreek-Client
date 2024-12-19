import React from "react";
function Shop() {
    return (
        <main>
            <h2>Shop at Fish Creek Animal Clinic</h2>

            <div id="flow">

                <section class="shop">
                    <h3>Fish Creek Tote Bag</h3>
                    <img src="fishtote.gif" alt="Fish Creek Tote Bag" width="150" height="150" />
                        <p>
                            Carry your pet supplies and accessories in a special tote from Fish Creek.
                            100% cotton. $14.95.
                        </p>
                        <form method="post" action="#">
                            <input type="submit" value="Add to Cart" />
                        </form>
                </section>

                <section class="shop">
                    <h3>Fish Creek Sweatshirt</h3>
                    <img src="fishsweat.gif" alt="Fish Creek Sweatshirt" width="150" height="150" />
                        <p>
                            A Fish Creek sweatshirt will warm you up on cool morning
                            walks with your pet. 100% cotton. Size XL. $29.95.

                        </p>
                        <form method="post" action="#">
                            <input type="submit" value="Add to Cart" />
                        </form>
                </section>

            </div>

        </main>

    );
}
export default Shop;