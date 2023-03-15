const  { User, Cart, Productcart, Product }  = require("../db");

const updateTotalValue = async(cart) => {
    //busco los productos cargados en el carrito y calculo el total
    let loadedProducts = await Productcart.findAll({where: { cartId: cart.id}});
    let totalCart = await loadedProducts.map(e => e.totalValue).reduce((a,b)=> a+b,0);

    return await cart.update({ total: totalCart});
}

const addProductCart = async(req, res) => {
    try {
        const { productId, userId} = req.body;
        //busco el usuario dueño del carrito y el producto que quiero agregar
        let user = await User.findOne({
            where: { id: userId}
        })
        let product = await Product.findOne({
            where: { id: productId}
        })

        let cart = null;
        //si el usuario no tenia carrito lo creo y se lo asigno
        if(!user.cartId) {
            cart = await Cart.create({ total: product.price });
            await user.update({ cartId: cart.id});
        }else {
        //si ya tenia carrito lo traigo y busco los productos que tiene    
            cart = await Cart.findOne({
                where: { id: user.cartId },
                include: { model: Productcart}
            });
        }
        //vemos si el producto ya esta agregado o no al carrito

        let findProduct = await cart.productcarts?.find(e => e.productId == productId);
        if(findProduct){
            return res.status(401).send('El producto ya está añadido en el carrito');
        }else {
            let totalValue = product.price;
            await Productcart.create({
                quantity:1,
                totalValue,
                cartId: cart.id,
                productId: product.id,
                img:product.img,
                name:product.name,
                priceProduct:product.price
            });
        await updateTotalValue(cart);

            res.status(200).send({message: 'El producto se añadió correctamente'});
        }

    } catch (err) {
        console.log(err)
    }
} 

const deleteProductCart = async (req, res) => {
    try {
        const { productCardId } = req.query;
        let productCart = await Productcart.findOne({
        where: { id: productCardId }
    });
    if(!productCart){
        res.status(404).send("no se puede eliminar un producto que no agregaste tonto ")
    }
    await productCart.destroy();

    const cart = await Cart.findOne({ where: { id: productCart.cartId} });
    updateTotalValue(cart); 
    res.status(200).send('Product has been removed');
    } catch (error) {
        console.log(error)
    }
};


module.exports = {addProductCart,deleteProductCart}