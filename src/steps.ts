import AddOns from "./components/Addons";
import Info from "./components/Info";
import Success from "./components/Sucess";
import Summary from "./components/Summary";
import { Step } from "./components/MultiStepForm/types";
import Plan from "./components/Plan";
export const steps:Step[]=[
	{
		title: "YOUR INFO",
		Component: Info,
	},
	{
		title: "SELECT PLAN",
		Component: Plan,
	},
	{
		title: "ADD-ONS",
		Component: AddOns,
	},
	{
		title: "SUMMARY",
		Component: Summary,
	},
];

export const SuccessPage = Success







