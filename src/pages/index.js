import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { FiUsers } from "react-icons/fi";
import { GiClockwiseRotation, GiPineTree } from "react-icons/gi";
import { DiBootstrap, DiBingSmall, DiCssTricks, DiEnvato, DiGithubBadge } from "react-icons/di";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Header />
		<Section
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,#191C23 url(https://images.unsplash.com/photo-1534996858221-380b92700493?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/cover repeat scroll padding-box"
				height="620px"
				align-items="center"
				justify-content="center"
				sm-width="100%"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				md-margin="0px 16px 0px 16px"
				margin="0px 32px 0px 32px"
				min-width="auto"
			/>
			<Text
				color="--light"
				font="--headline1"
				margin="16px 0px 0px 0px"
				sm-text-align="center"
				sm-width="80%"
				lg-text-align="center"
				lg-font="--headline2"
			>
				Become carbon neutral today.
			</Text>
			<Text
				font="--lead"
				color="--light"
				margin="10px 0px 35px 0px"
				sm-text-align="center"
				sm-width="80%"
				opacity="0.7"
				md-text-align="center"
			>
				We make it simple to offset all your business and employees emissions, for $5 / employee / month.
			</Text>
			<Components.LinkBtn />
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="About"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
				text-transform="uppercase"
			>
				Climate change is happening now
			</Text>
			<Text
				font="--headline3"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
			>
				{" "}We started Fresh because we found it difficult to reduce our daily impact. Now we help you and your team do it.
			</Text>
		</Section>
		<Section
			padding="70px 0 70px 0"
			quarkly-title="Info"
			lg-padding="50px 0px 50px 0px"
			md-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem
					width="40%"
					display="flex"
					lg-width="100%"
					lg-order="2"
					lg-margin="0px 0px 0px 0px"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						lg-align-items="flex-start"
						align-items="flex-start"
						padding="0px 30px 0px 0px"
						lg-padding="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						Team
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Who We Are
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						Our beautiful planet is under attack. And we are the culprits. A lot of companies pledged to become carbon neutral by 2030 or 2040, but this is not enough. We all need to act now.
					</Text>
					<Link
						href="/about"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Read More
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					padding="0px 0px 0px 0px"
					miniPk-width="59%"
					lg-width="100%"
					lg-order="1"
					lg-margin="0px 0px 10px 0px"
					quarkly-title="Illustration"
				>
					{"        "}
					<Box
						width="100%"
						background="--color-lightD2 url(https://images.unsplash.com/photo-1462331321792-cc44368b8894?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
						margin="0px 0px 0px 0px"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://artemzhigalin.ru/src/default-website-illustration-sea.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="64px 0" sm-padding="40px 0" color="--dark">
			<Text as="h1" font="--headline1" margin="0 0 50px 0">
				How it works:
			</Text>
			<Stack>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Icon category="fi" icon={FiUsers} size="60px" />
					<Text as="h3" font="--headline2" margin="12px 0" xl-font="--headline2">
						1.
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						Your employees are invited to connect their Gmail accounts and answer a questionnaire so we can estimate their average carbon emissions.
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Icon category="gi" icon={GiClockwiseRotation} size="60px" />
					<Text as="h3" font="--headline2" margin="12px 0" xl-font="--headline2">
						2.
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						We'll scan their emails for flights, trains and other impactful emissions.
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						<div>
							<br />
							<br />
						</div>
					</Text>
				</StackItem>
				<StackItem width="33.33%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Icon category="gi" icon={GiPineTree} size="60px" />
					<Text as="h3" font="--headline2" margin="12px 0" xl-font="--headline2">
						3.
					</Text>
					<Text as="p" font="--base" margin="12px 0" color="--greyD2">
						We automatically offset their emissions, supporting climate-positive projects.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section
			padding="100px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="Works"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
			>
				The projects
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 48px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				md-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				Support the reforestation
			</Text>
			<Stack width="100%">
				{"    "}
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="16px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://images.unsplash.com/photo-1602484894945-7d5b04b15a92?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://artemzhigalin.ru/src/default-website-illustration-sea.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						xl-background="--color-lightD2 url(https://images.unsplash.com/photo-1542380536-3eb944a532d8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/100% no-repeat"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://images.unsplash.com/photo-1542380536-3eb944a532d8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&h=2000) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://artemzhigalin.ru/src/default-website-illustration-sea.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						xl-background="--color-lightD2 url(https://images.unsplash.com/photo-1534861542011-27e852f7c9f5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/cover no-repeat"
					/>
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://images.unsplash.com/photo-1473605768212-7e1f2c756179?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://artemzhigalin.ru/src/default-website-illustration-sea.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						xl-background="--color-lightD2 url(https://images.unsplash.com/photo-1602484894924-75eddc89d32b?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://images.unsplash.com/photo-1473594659356-a404044aa2c2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://artemzhigalin.ru/src/default-website-illustration-sea.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						xl-background="--color-lightD2 url(https://images.unsplash.com/photo-1603538978238-b6279baca5d6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
					/>
					{"    "}
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 8px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://images.unsplash.com/photo-1516878969364-4a13c08b3dd4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://artemzhigalin.ru/src/default-website-illustration-sea.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						xl-background="--color-lightD2 url(https://images.unsplash.com/photo-1471771450139-6bfdb4b2609a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
					/>
				</StackItem>
				<StackItem
					width="33.33%"
					display="flex"
					lg-width="50%"
					xl-width="50%"
					md-width="100%"
					sm-padding="8px 0px 16px 0px"
				>
					<Box
						width="100%"
						background="--color-lightD2 url(https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
						padding="0px 0px 60% 0px"
						height="0px"
						hover-background="--color-lightD2 url(https://artemzhigalin.ru/src/default-website-illustration-sea.svg) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						xl-background="--color-lightD2 url(https://images.unsplash.com/photo-1535114224187-93c1f6e37664?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/100% no-repeat"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="FAQ"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				margin="0px 48px 0px 48px"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
			>
				Any questions
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				FAQ
			</Text>
			<Stack>
				{"    "}
				<StackItem
					width="25%"
					display="flex"
					padding="16px 16px 16px 16px"
					margin="0px 0px 0px 0px"
					lg-width="50%"
					lg-align-items="center"
					lg-justify-content="center"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" md-align-items="flex-start" />
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Does it work for remote companies?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						Yes! We designed our product with all companies in mind. By offsetting your employee's personal emissions, you'll{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="25%"
					display="flex"
					padding="16px 45px 16px 16px"
					lg-width="50%"
					md-width="100%"
				>
					<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" md-align-items="flex-start" />
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Does the mail scanning only work with Gmail / Gsuite ?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						At the moment, yes, only Gmail is supported. We are working on supporting other services for automatic reporting.{" "}
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						md-align-items="flex-start"
					/>
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Can I use this as a solo entrepreneurs?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						Yes definitely! Just skip the invite employees’ step. The pricing stays at 5$ / month.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%" md-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						md-align-items="flex-start"
					/>
					{"        "}
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Where does the money go to?{" "}
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						Mainly toward planting trees and fighting deforestation. Pachama (our carbon offsetting partner) uses machine learning to ensure the money goes toward the right projects. Find in detail what they do here.
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="80px 0 80px 0" quarkly-title="Customers" lg-padding="50px 0 50px 0" justify-content="center">
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
			>
				The time is now
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				sm-margin="0px 0px 48px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				They pledged to become carbon neutral.
			</Text>
			<Stack width="100%" lg-justify-content="center" sm-flex-direction="column">
				{"    "}
				<StackItem
					width="20%"
					display="flex"
					padding="16px 16px 16px 16px"
					margin="0px 0px 0px 0px"
					lg-width="33.33%"
					lg-align-items="center"
					lg-justify-content="center"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiBootstrap}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Apple
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="20%"
					display="flex"
					padding="16px 45px 16px 16px"
					lg-width="33.33%"
					sm-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiBingSmall}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Nespresso
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiCssTricks}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiEnvato}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="20%" display="flex" lg-width="33.33%" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						lg-width="100%"
						lg-align-items="center"
						sm-flex-direction="row"
						sm-align-items="center"
						sm-justify-content="flex-start"
					/>
					{"        "}
					<Icon
						category="di"
						icon={DiGithubBadge}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="25px 0 25px 0"
			lg-height="auto"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Stack>
				{"    "}
				<StackItem width="100%" display="flex">
					<Override
						slot="StackItemContent"
						align-items="center"
						justify-content="center"
						height="480px"
						background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://images.unsplash.com/photo-1475139195209-c6343f17842f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0MjIzN30&w=2000) center center/cover no-repeat"
						flex-direction="column"
						md-height="360px"
						padding="36px 24px 36px 24px"
						sm-height="280px"
						lg-height="420px"
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
						The time is now.
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
						Now you don't have any more excuses.
					</Text>
					<Button
						padding="8px 36px 8px 36px"
						font="--lead"
						letter-spacing="0.5px"
						transition="opacity .15s ease 0s"
						position="relative"
						z-index="5"
						background="--color-light"
						opacity="1"
						hover-opacity=".85"
						focus-box-shadow="none"
						hover-box-shadow="none"
						active-box-shadow="none"
						margin="10px auto 0px auto"
						width="fit-content"
						md-font="--base"
						color="--darkL2"
					>
						Start Now
					</Button>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.Footer>
			<Override slot="text" />
		</Components.Footer>
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