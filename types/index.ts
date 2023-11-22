export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	btnType?: "button" | "submit";
	isDisabled?: boolean;
	textStyles?: string;
	onClick?(): void;
}
export interface CustomDoctorProps {
	name: string;
	styles?: string;
	specification: string;
	hospital: string;
	imageSrc: string;
}