export function formatPrice(price) {
    return (price * 10).toLocaleString() + " $";
}