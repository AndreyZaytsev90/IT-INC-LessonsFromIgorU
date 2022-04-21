import React from "react";

type FooterPropType = {
    titleForFooter: string
}
export const Footer = (props: FooterPropType) => {
    return (
        <div>{props.titleForFooter}</div>
    )
}