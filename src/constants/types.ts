export type Colors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'dark'
	| 'medium'
	| 'white'
	| 'light';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Image = {
	url: string;
	url_thumb?: string;
	alt?: string;
};

export type ButtonModes = 'outline' | 'fill' | 'text';
