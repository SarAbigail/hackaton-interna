import React from 'react';

const Producto = (a) => {
    return (
        <React.Fragment>
        <div className="absoluta wrap row">
            <a href="#miModal">
                <div className="column just-center margin-1">
                    <div className="bg flex just-center" >
                        <img className="size" src="https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/concentr%C3%A9-total.png?raw=true" alt="" />
                    </div>
                    <p className="min-font just-center flex">Nombre</p>
                    <p className="price-font just-center-end row">$ 130</p>
                </div>
            </a>
        </div>
        <div id="miModal" class="modal">
            <div class="modal-contenido">
                <a href="#">X</a>
                <img className="size" src="https://github.com/SarAbigail/hackaton-interna/blob/master/imagenes-db/concentr%C3%A9-total.png?raw=true" alt=""/>
                <p>Crema</p>
                <p>$ 130</p>
                <input type="number" value="5"/>
                <p>Este es mi primera ventana modal sin utilizar JavaScript.</p>
            </div>
        </div>
        </React.Fragment>

    );
}
export default Producto;