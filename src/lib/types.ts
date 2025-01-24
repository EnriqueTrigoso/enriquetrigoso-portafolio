
//Projects

export interface Path {
    src: string;
    alt: string;
}
export interface ImagesPath {
    primary: Path;
    secondary: Path;
}
export interface Buttons {
    live_demo: Button
    repository: Button
    see_details: Button
}
export interface Button {
    title: string
    url: string
}
export interface TechnologiesUsed {
    name: string
    type: string
}
export interface Project {
    project_name: string;
    id: string;
    images_path: ImagesPath;
    path: string;
    description: string;
    buttons: Buttons;
    key_features: string[];
    technologies_used: TechnologiesUsed[];
}