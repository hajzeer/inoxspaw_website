import styled from 'styled-components';
import { colors, fontSize, fontWeight } from '../../utils';
import Link from 'next/link'
const Container = styled.section`

position: relative;
top: -50px;
left: 20px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;

h2 {
    margin: 0;
    color: ${colors.darkGreyHEX};
    font-size: ${fontSize.midFont};
    font-weight: ${fontWeight.fontWeightReagular};
    text-transform: uppercase;
}
`;

const CategoryListInIndex = ({items}) => (

    items.map(({Name, id, Slug}) => {
        return(
            <Link href={`/products/${Slug}`}>
            <Container key={id}>
                <h2>{Name}</h2>
            </Container>
            </Link>
        )
    })
)
export default CategoryListInIndex;