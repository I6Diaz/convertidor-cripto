import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'LATO', sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;

`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Imagen
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt='imagen cripto'
            />
            <div>
                <Precio>El Precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación ùltimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado