declare module '*.png' {
    const value: string; // Предполагаем, что изображение - это строка (путь к изображению)
    export = value;
}