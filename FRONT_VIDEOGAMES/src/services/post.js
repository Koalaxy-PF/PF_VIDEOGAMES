export function postInCartLocalStorage(obj){

    return new Promise((resolve, reject) => {
        if(window.localStorage.getItem('carrito-ls')){

            const objeto = JSON.parse(window.localStorage.getItem('carrito-ls'));
            const p = [];

            // MODIFICAMOS EL TOTAL DE PRODUCTOS EN EL CARRITO Y SU VALOR TOTAL

            objeto.total = objeto.total + 1;    // TOTAL DE ELEMENTOS
            objeto.price = objeto.price + obj.price;    // VALOR TOTAL DE TODOS LOS PRODUCTOS

            for(let i=0; i<objeto.products.length; i++){
                p.push(objeto.products[i]);
            }

            p.push(obj);
            objeto.products = p;
            window.localStorage.setItem('carrito-ls', JSON.stringify(objeto));

            resolve('El producto se agregó con éxito a su carrito');
        }
        
        else{

            const objeto = {
                total: 1,
                price: obj.price,
                products: [obj],
            }

            window.localStorage.setItem('carrito-ls', JSON.stringify(objeto));

            resolve('El producto se agregó con éxito a su carrito');
        }
    });
}