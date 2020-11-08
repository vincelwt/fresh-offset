import React from "react";
import { useOverrides } from "@quarkly/components";
import { Link } from "@quarkly/widgets";
const defaultProps = {
	"href": "/signup",
	"text-decoration-line": "initial",
	"color": "--darkL2",
	"background": "--color-light",
	"padding": "12px 24px 12px 24px",
	"font": "--base",
	"letter-spacing": "0.5px",
	"hover-transform": "translateY(-4px)",
	"transition": "transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s",
	"children": "Try it now"
};
const overrides = {};

const LinkBtn = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Link {...rest}>
		{children}
	</Link>;
};

Object.assign(LinkBtn, { ...Link,
	defaultProps,
	overrides
});
export default LinkBtn;