/** @format */

import styled from "styled-components";
import { colors, fontWeight, fontSize, zIndex } from "../../utils";

const CellStyled = styled.td`
    text-align: center;
    color: ${colors.darkGreyHEX};
    background: ${colors.defaultWhiteHEX};
    font-size: ${fontSize.smallFont};
    border: 2px solid ${colors.darkGreyHEX};
`;

const SpecTable = ({ items }) => {
    return items.table.map(({ title, value, id }) => {
        return (
            <tr key={id}>
                <CellStyled>{title}</CellStyled>
                <CellStyled>{value}</CellStyled>
            </tr>
        );
    });
};

export default SpecTable;
