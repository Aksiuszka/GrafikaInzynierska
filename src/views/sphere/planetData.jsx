const random = (a, b) => a + (Math.random()*b);
const getRandom = (a, b)=> Math.floor(random(a,b));
const generateColor = () => `rgb(${getRandom(80,50)}, ${getRandom(80,50)}, ${getRandom(80,50)})`;

const planetData =[];
const planetNumber = 8;
for(let i =0; i<planetNumber; i++){
    planetData.push({
        id:i,
        color: generateColor(),
        xRadius: (i + 1.5) * 4,
        zRadius: (i + 1.5) * 2,
        size: random(0.5,1)

    });
}
export default planetData;