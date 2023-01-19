import React from 'react';
import "./FooterStyles.scss";

function FooterComponent(props) {
    const { categoryState, handleOnClickCategory } = props
    return (
        <div className='footer'>
            <div className='footer-over'>
                <div >
                    <p className='category-title'>Categorias</p>
                    <div className='category-name'>
                        {
                            categoryState.map((oneCategory) =>
                                <p onClick={handleOnClickCategory}>
                                    {oneCategory.name}
                                </p>
                            )
                        }
                    </div>
                </div>
                <div >
                    <p className='category-title'>Ayuda</p>
                    <div>
                        <p>Sobre Nosotros</p>
                        <p>Preguntas Frecuentes</p>
                        <p>Cambios y devoluciones</p>
                    </div>
                </div>
                <div>
                    <p className='category-title'>Contactos</p>
                    <div>
                        <p>Un telefono</p>
                        <p>Un email</p>
                        <p>Calle falsa 123</p>
                    </div>
                </div>
                <div>
                    <p className='category-title'> Medios de Pagos</p>
                    <div>
                        <p>No contamos con esto todavia</p>
                    </div>
                </div>
            </div>
            <div className='footer-down'>
                MercadoLicha Site - Todos los derechos reservados al licha y el iow. Ojito con hacerte el pistola
            </div>
        </div>
    )
}

export default FooterComponent
