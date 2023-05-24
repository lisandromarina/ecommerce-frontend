export function priceFormatter(number){
    return number.toLocaleString("id-ID", { minimumFractionDigits: 2 });
}