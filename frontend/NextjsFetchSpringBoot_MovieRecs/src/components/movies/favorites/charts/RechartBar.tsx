import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import { generateMockData, RechartsDevtools } from '@recharts/devtools';
import { NewMovie } from '@/resources/definitions';

const data = generateMockData(6, 823);
console.log(data);
const SimpleBarChart = ({favorites}:{favorites: NewMovie[]}) => {
  return (
    <>
        {/* <BarChart
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        responsive
        data={data}
        margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
        }}
        >
        <CartesianGrid />
        <XAxis dataKey="label" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />
        <Bar dataKey="x" radius={[10, 10, 0, 0]} />
        <Bar dataKey="y" radius={[10, 10, 0, 0]} />
        <RechartsDevtools />
        </BarChart> */}
        
        <BarChart
        title="Favorite Movies IMDb Ratings"
        style={{ width: '100%', maxWidth: '1500px', maxHeight: '70vh', aspectRatio: 1, color: '#ef4444' }}
        responsive
        data={favorites}
        margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
        }}
        barCategoryGap={5}
        >
        <Label position="top">Favorite Movies IMDb Ratings</Label>
        <CartesianGrid />
        <XAxis dataKey="title" interval={0} label="Movie" niceTicks="snap125" angle={-45}  tickLine={true} type="category"/>

        <YAxis dataKey="imdbrating" label={{value:"IMDb Rating", angle: -90}} type="number" domain={[0, 10]} />

        <Tooltip contentStyle={{ backgroundColor: '#f5debf', color: '#ef4444', border: '1px solid #ccc' }} />

        <Legend />
        <Bar dataKey="imdbrating" radius={[10, 10, 0, 0]} animationEasing="ease-in-out" activeBar={{ fill: '#f5debf' }} label />
        {/* <Bar dataKey="" radius={[10, 10, 0, 0]} /> */}
        <RechartsDevtools />
        </BarChart>
    </>
  );
};

export default SimpleBarChart;