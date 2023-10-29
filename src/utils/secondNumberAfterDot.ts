export default function secondNumberAfterDot(a: string): string {
    if(Number(a) % 1 === 0){
        return Number(a).toFixed(0);
    }
    return Number(a).toFixed(2);
}