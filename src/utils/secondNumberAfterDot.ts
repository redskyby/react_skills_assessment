export default function secondNumberAfterDot(a: string ): string {
    const rounded = Math.round(Number(a) * 100) / 100;
    return (rounded === Math.floor(rounded)) ? rounded.toFixed(0) : rounded.toFixed(2);
}