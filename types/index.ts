export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	btnType?: "button" | "submit";
	isDisabled?: boolean;
	textStyles?: string;
	onClick?(): void;
}