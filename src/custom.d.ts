declare module '*.png' {
    const value: string; // Предполагаем, что изображение - это строка (путь к изображению)
    export = value;
}

declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}