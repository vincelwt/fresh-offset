import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, StackItem, Stack, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Contact | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Contact | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="url(),radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
						sm-height="180px"
						md-height="360px"
					/>
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 0px 0px"
						display="flex"
						align-items="center"
						color="--light"
						justify-content="center"
						quarkly-title="Title"
						sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
						sm-text-align="center"
						text-align="center"
						md-font="--headline2"
					>
						Contact Us.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			box-sizing="border-box"
			quarkly-title="Contacts"
			padding="50px 0px 50px 0px"
			lg-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Stack justify-content="flex-start" align-items="stretch" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem
					width="65%"
					display="flex"
					quarkly-title="Form"
					md-width="100%"
					sm-width="100%"
					md-margin="0px 0px 24px 0px"
					sm-margin="0px 0px 16px 0px"
				>
					<Override
						slot="StackItemContent"
						padding="48px 36px 54px 36px"
						flex-direction="column"
						sm-padding="24px 16px 24px 16px"
						background="--color-lightD1"
						md-padding="24px 36px 36px 36px"
						border-width="1px"
						border-style="solid"
						border-color="--color-lightD2"
					/>
					{"        "}
					<Text
						font="--headline3"
						margin="0px 0px 15px 0px"
						display="inline-block"
						quarkly-title="Title"
						md-font="--headline3"
					>
						Get in Touch.
					</Text>
					<Text
						font="--base"
						margin="0px 0px 28px 0px"
						display="inline-block"
						quarkly-title="Description"
						color="--dark"
						md-font="--base"
					>
						Feel free to contact us anytime. We'll get back to you as soon as possible!
					</Text>
					<Text
						font="--base"
						letter-spacing="1px"
						margin="0px 0px 10px 0px"
						quarkly-title="Name label"
						color="--dark"
					>
						NAME
					</Text>
					<Input
						margin="0px 0px 25px 0px"
						name="Name"
						border-color="--color-lightD2"
						border-width="1px"
						font="--base"
						padding="8px 16px 8px 16px"
						transition="border-color 400ms ease"
						type="text"
						quarkly-title="Name input"
						max-width="480px"
						focus-border-color="--color-primary"
						focus-border-width="1px"
					/>
					<Text
						font="--base"
						letter-spacing="1px"
						margin="0px 0px 10px 0px"
						quarkly-title="Email label"
						color="--dark"
					>
						EMAIL
					</Text>
					<Input
						margin="0px 0px 25px 0px"
						name="Name"
						border-width="1px"
						border-color="--color-lightD2"
						font="--base"
						padding="8px 16px 8px 16px"
						transition="border-color 400ms ease"
						type="email"
						quarkly-title="Email input"
						max-width="480px"
						focus-border-color="--color-primary"
						focus-border-width="1px"
					/>
					<Text
						font="--base"
						letter-spacing="1px"
						margin="0px 0px 10px 0px"
						quarkly-title="Message label"
						color="--dark"
					>
						MESSAGE
					</Text>
					<Input
						margin="0px 0px 25px 0px"
						name="Name"
						border-width="1px"
						border-color="--color-lightD2"
						font="--base"
						padding="8px 16px 8px 16px"
						transition="border-color 400ms ease"
						type="text"
						height="200px"
						as="textarea"
						required={false}
						quarkly-title="Message input"
						sm-margin="0px 0px 18px 0px"
						focus-border-color="--color-primary"
					/>
					<Button
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						transition="opacity .15s ease 0s"
						position="relative"
						z-index="5"
						background="--color-primary"
						opacity="1"
						hover-opacity=".85"
						focus-box-shadow="none"
						hover-box-shadow="none"
						active-box-shadow="none"
						quarkly-title="Submit buton"
						border-radius="0px"
						md-font="--base"
					>
						Submit
					</Button>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="35%" display="flex" quarkly-title="Side" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						sm-margin="0px 0px 0px 0px"
						margin="0px 0px 0px 50px"
						align-items="flex-start"
						justify-content="flex-start"
						lg-margin="0px 0px 0px 0px"
						md-align-items="stretch"
					/>
					{"        "}
					<Box margin="0px 0px 36px 0px" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Our location
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
						>
							4998 Hanover Street, New York, 10011
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px" />
					<Box margin="0px 0px 36px 0px" quarkly-title="Contact" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Contact us
						</Text>
						<Link
							href="mailto:hello@company.com"
							color="--dark"
							opacity="0.6"
							target="_blank"
							quarkly-title="Email"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							transition="opacity .15s ease 0s"
							hover-opacity="0.6"
							font="--base"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
						>
							hello@freshoffset.com
						</Link>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Call us
						</Text>
						<Link
							href="tel:+1(234)567-89-00"
							target="_blank"
							quarkly-title="Phone"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							display="block"
							color="--dark"
							text-decoration-line="initial"
							hover-opacity=".5"
							opacity="0.6"
							transition="opacity .15s ease 0s"
							font="--base"
						>
							+33 6 37 60 90 44
						</Link>
					</Box>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section quarkly-title="USP" padding="75px 0 50px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/cover no-repeat"
						flex-direction="column"
						md-height="360px"
						padding="36px 24px 36px 24px"
						sm-height="280px"
					/>
					{"        "}
					<Text
						margin="10px 0px 15px 0px"
						font="--headline2"
						text-align="center"
						quarkly-title="Title"
						color="--light"
						md-font="--headline3"
					>
						Get started today.
					</Text>
					<Text
						margin="0px 0px 28px 0px"
						font="--lead"
						opacity="0.6"
						text-align="center"
						quarkly-title="Description"
						color="--light"
						max-width="720px"
					>
						Get started with Fresh Offset to become carbon-neutral by the end of the month.
					</Text>
					<Components.LinkBtn />
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.Footer />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});