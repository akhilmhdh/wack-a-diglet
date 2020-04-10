export const ConstrainedRandom = (max,min) => {
    const val=Math.floor(Math.random() * max);
    return (val<min?min:val);
}