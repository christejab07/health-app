export interface CustomButtonProps {
	title: string;
	containerStyles?: string;
	btnType?: "button" | "submit";
	isDisabled?: boolean;
	textStyles?: string;
	onClick?(): void;
	rightIcon?:string;
}
export interface CustomDoctorProps {
	name: string;
	styles?: string;
	specification: string;
	hospital: string;
	imageSrc: string;
}
export interface MedicineProps{
	imageSrc: string;
	name: string;
	manufacturer: string;
	location: string;
	prix: string;

}