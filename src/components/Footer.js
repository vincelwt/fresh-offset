import React from "react";
import { useOverrides, Section } from "@quarkly/components";
import { Icon, Text, Link, Box } from "@quarkly/widgets";
import { FaQuinscape } from "react-icons/fa";
const defaultProps = {
	"quarkly-title": "Footer"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "center"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaQuinscape,
			"size": "17px",
			"opacity": "0.6"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "center",
			"children": <Link
				href="https://quarkly.io/"
				font="normal 500 12px/20px --fontFamily-googleMontserrat"
				color="#1a1b1f"
				opacity="0.6"
				text-decoration-line="initial"
				text-align="left"
				margin="1px 0px 0px 10px"
				overflow-wrap="normal"
				word-break="normal"
				white-space="normal"
				text-indent="0"
				text-overflow="clip"
				hyphens="manual"
			>
				a startup by Lyser.io
			</Link>
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Icon {...override("icon")} />
			<Text {...override("text")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;