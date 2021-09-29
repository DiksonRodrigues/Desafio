import React from 'react';
import { Link } from 'react-router-dom';

import
{
Container,
ContainerTitle,
ContainerItens,
TextLink
} from './styles';

export default function Header() {
    return(
        <Container>
            <ContainerTitle>
                    <h1>Loja Virtual</h1>
            </ContainerTitle>
            <ContainerItens>
                <Link to="/">
                    <TextLink>Home</TextLink>
                </Link>
                <Link to="/favoritos">
                    <TextLink>Produtos Favoritos</TextLink>
                </Link>
            </ContainerItens>
        </Container>
    )
}