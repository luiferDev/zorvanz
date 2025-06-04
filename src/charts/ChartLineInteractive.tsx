import * as React from 'react'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '../components/ui/chart'

export const description = 'An interactive line chart'

const chartData = [
    { date: '2024-04-01', Fragancias: 222, Ambientadores: 150, Velas: 120 },
    { date: '2024-04-02', Fragancias: 97, Ambientadores: 180, Velas: 150 },
    { date: '2024-04-03', Fragancias: 167, Ambientadores: 120, Velas: 170 },
    { date: '2024-04-04', Fragancias: 242, Ambientadores: 260, Velas: 150 },
    { date: '2024-04-05', Fragancias: 373, Ambientadores: 290, Velas: 200 },
    { date: '2024-04-06', Fragancias: 301, Ambientadores: 340, Velas: 130 },
    { date: '2024-04-07', Fragancias: 245, Ambientadores: 180, Velas: 105 },
    { date: '2024-04-08', Fragancias: 409, Ambientadores: 320, Velas: 192 },
    { date: '2024-04-09', Fragancias: 59, Ambientadores: 110, Velas: 109 },
    { date: '2024-04-10', Fragancias: 261, Ambientadores: 190, Velas: 300 },
    { date: '2024-04-11', Fragancias: 327, Ambientadores: 350, Velas: 250 },
    { date: '2024-04-12', Fragancias: 292, Ambientadores: 210, Velas: 125 },
    { date: '2024-04-13', Fragancias: 342, Ambientadores: 380, Velas: 186 },
    { date: '2024-04-14', Fragancias: 137, Ambientadores: 220, Velas: 187 },
    { date: '2024-04-15', Fragancias: 120, Ambientadores: 170, Velas: 105 },
    { date: '2024-04-16', Fragancias: 138, Ambientadores: 190, Velas: 109 },
    { date: '2024-04-17', Fragancias: 446, Ambientadores: 360, Velas: 156 },
    { date: '2024-04-18', Fragancias: 364, Ambientadores: 410, Velas: 154 },
    { date: '2024-04-19', Fragancias: 243, Ambientadores: 180, Velas: 145 },
    { date: '2024-04-20', Fragancias: 89, Ambientadores: 150, Velas: 196 },
    { date: '2024-04-21', Fragancias: 137, Ambientadores: 200, Velas: 150 },
    { date: '2024-04-22', Fragancias: 224, Ambientadores: 170, Velas: 140 },
    { date: '2024-04-23', Fragancias: 138, Ambientadores: 230, Velas: 190 },
    { date: '2024-04-24', Fragancias: 387, Ambientadores: 290, Velas: 160 },
    { date: '2024-04-25', Fragancias: 215, Ambientadores: 250, Velas: 88 },
    { date: '2024-04-26', Fragancias: 75, Ambientadores: 130, Velas: 160 },
    { date: '2024-04-27', Fragancias: 383, Ambientadores: 420, Velas: 50 },
    { date: '2024-04-28', Fragancias: 122, Ambientadores: 180, Velas: 40 },
    { date: '2024-04-29', Fragancias: 315, Ambientadores: 240, Velas: 300 },
    { date: '2024-04-30', Fragancias: 454, Ambientadores: 380, Velas: 200 },
    { date: '2024-05-01', Fragancias: 165, Ambientadores: 220, Velas: 400 },
    { date: '2024-05-02', Fragancias: 293, Ambientadores: 310, Velas: 500 },
    { date: '2024-05-03', Fragancias: 247, Ambientadores: 190, Velas: 200 },
    { date: '2024-05-04', Fragancias: 385, Ambientadores: 420, Velas: 300 },
    { date: '2024-05-05', Fragancias: 481, Ambientadores: 390, Velas: 500 },
    { date: '2024-05-06', Fragancias: 498, Ambientadores: 520, Velas: 900 },
    { date: '2024-05-07', Fragancias: 388, Ambientadores: 300, Velas: 900 },
    { date: '2024-05-08', Fragancias: 149, Ambientadores: 210, Velas: 800 },
    { date: '2024-05-09', Fragancias: 227, Ambientadores: 180, Velas: 500 },
    { date: '2024-05-10', Fragancias: 293, Ambientadores: 330, Velas: 400 },
    { date: '2024-05-11', Fragancias: 335, Ambientadores: 270, Velas: 600 },
    { date: '2024-05-12', Fragancias: 197, Ambientadores: 240, Velas: 200 },
    { date: '2024-05-13', Fragancias: 197, Ambientadores: 160, Velas: 200 },
    { date: '2024-05-14', Fragancias: 448, Ambientadores: 490, Velas: 110 },
    { date: '2024-05-15', Fragancias: 473, Ambientadores: 380, Velas: 180 },
    { date: '2024-05-16', Fragancias: 338, Ambientadores: 400, Velas: 59 },
    { date: '2024-05-17', Fragancias: 499, Ambientadores: 420, Velas: 45 },
    { date: '2024-05-18', Fragancias: 315, Ambientadores: 350, Velas: 105 },
    { date: '2024-05-19', Fragancias: 235, Ambientadores: 180, Velas: 108 },
    { date: '2024-05-20', Fragancias: 177, Ambientadores: 230, Velas: 106 },
    { date: '2024-05-21', Fragancias: 82, Ambientadores: 140, Velas: 105 },
    { date: '2024-05-22', Fragancias: 81, Ambientadores: 120, Velas: 110 },
    { date: '2024-05-23', Fragancias: 252, Ambientadores: 290, Velas: 200 },
    { date: '2024-05-24', Fragancias: 294, Ambientadores: 220, Velas: 250 },
    { date: '2024-05-25', Fragancias: 201, Ambientadores: 250, Velas: 260 },
    { date: '2024-05-26', Fragancias: 213, Ambientadores: 170, Velas: 320 },
    { date: '2024-05-27', Fragancias: 420, Ambientadores: 460, Velas: 520 },
    { date: '2024-05-28', Fragancias: 233, Ambientadores: 190, Velas: 150 },
    { date: '2024-05-29', Fragancias: 78, Ambientadores: 130, Velas: 105 },
    { date: '2024-05-30', Fragancias: 340, Ambientadores: 280, Velas: 160 },
    { date: '2024-05-31', Fragancias: 178, Ambientadores: 230, Velas: 120 },
    { date: '2024-06-01', Fragancias: 178, Ambientadores: 200, Velas: 160 },
    { date: '2024-06-02', Fragancias: 470, Ambientadores: 410, Velas: 140 },
    { date: '2024-06-03', Fragancias: 103, Ambientadores: 160, Velas: 180 },
    { date: '2024-06-04', Fragancias: 439, Ambientadores: 380, Velas: 120 },
    { date: '2024-06-05', Fragancias: 88, Ambientadores: 140, Velas: 104 },
    { date: '2024-06-06', Fragancias: 294, Ambientadores: 250, Velas: 101 },
    { date: '2024-06-07', Fragancias: 323, Ambientadores: 370, Velas: 150 },
    { date: '2024-06-08', Fragancias: 385, Ambientadores: 320, Velas: 105 },
    { date: '2024-06-09', Fragancias: 438, Ambientadores: 480, Velas: 106 },
    { date: '2024-06-10', Fragancias: 155, Ambientadores: 200, Velas: 10 },
    { date: '2024-06-11', Fragancias: 92, Ambientadores: 150, Velas: 100 },
    { date: '2024-06-12', Fragancias: 492, Ambientadores: 420, Velas: 190 },
    { date: '2024-06-13', Fragancias: 81, Ambientadores: 130, Velas: 540 },
    { date: '2024-06-14', Fragancias: 426, Ambientadores: 380, Velas: 150 },
    { date: '2024-06-15', Fragancias: 307, Ambientadores: 350, Velas: 150 },
    { date: '2024-06-16', Fragancias: 371, Ambientadores: 310, Velas: 100 },
    { date: '2024-06-17', Fragancias: 475, Ambientadores: 520, Velas: 140 },
    { date: '2024-06-18', Fragancias: 107, Ambientadores: 170, Velas: 160 },
    { date: '2024-06-19', Fragancias: 341, Ambientadores: 290, Velas: 140 },
    { date: '2024-06-20', Fragancias: 408, Ambientadores: 450, Velas: 180 },
    { date: '2024-06-21', Fragancias: 169, Ambientadores: 210, Velas: 170 },
    { date: '2024-06-22', Fragancias: 317, Ambientadores: 270, Velas: 180 },
    { date: '2024-06-23', Fragancias: 480, Ambientadores: 530, Velas: 150 },
    { date: '2024-06-24', Fragancias: 132, Ambientadores: 180, Velas: 140 },
    { date: '2024-06-25', Fragancias: 141, Ambientadores: 190, Velas: 180 },
    { date: '2024-06-26', Fragancias: 434, Ambientadores: 380, Velas: 180 },
    { date: '2024-06-27', Fragancias: 448, Ambientadores: 490, Velas: 160 },
    { date: '2024-06-28', Fragancias: 149, Ambientadores: 200, Velas: 150 },
    { date: '2024-06-29', Fragancias: 103, Ambientadores: 160, Velas: 105 },
    { date: '2024-06-30', Fragancias: 446, Ambientadores: 400, Velas: 140 },
]

const chartConfig = {
    Ventas: {
        label: 'Ventas',
    },
    Fragancias: {
        label: 'Fragancias',
        color: 'var(--chart-1)',
    },
    Ambientadores: {
        label: 'Ambientadores',
        color: 'var(--chart-2)',
    },
    Velas: {
        label: 'Velas',
        color: 'var(--chart-3)',
    },
} satisfies ChartConfig

export function ChartLineInteractive() {
    const [activeChart, setActiveChart] =
        React.useState<keyof typeof chartConfig>('Fragancias')

    const total = React.useMemo(
        () => ({
            Fragancias: chartData.reduce(
                (acc, curr) => acc + curr.Fragancias,
                0,
            ),
            Ambientadores: chartData.reduce(
                (acc, curr) => acc + curr.Ambientadores,
                0,
            ),
            Velas: chartData.reduce((acc, curr) => acc + curr.Velas, 0),
        }),
        [],
    )

    return (
        <Card className="py-4 sm:py-0">
            <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
                    <CardTitle>Line Chart - Interactive</CardTitle>
                    <CardDescription>
                        Total de ventas por categoría de producto.
                    </CardDescription>
                </div>
                <div className="flex">
                    {['Fragancias', 'Ambientadores', 'Velas'].map((key) => {
                        const chart = key as keyof typeof chartConfig
                        return (
                            <button
                                key={chart}
                                data-active={activeChart === chart}
                                className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                                onClick={() => setActiveChart(chart)}
                            >
                                <span className="text-muted-foreground text-xs">
                                    {chartConfig[chart].label}
                                </span>
                                <span className="text-lg leading-none font-bold sm:text-3xl">
                                    {total[
                                        key as keyof typeof total
                                    ].toLocaleString()}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                >
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            minTickGap={32}
                            tickFormatter={(value) => {
                                const date = new Date(value)
                                return date.toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                })
                            }}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent
                                    className="w-[150px]"
                                    nameKey="views"
                                    labelFormatter={(value) => {
                                        return new Date(
                                            value,
                                        ).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })
                                    }}
                                />
                            }
                        />
                        <Line
                            dataKey={activeChart}
                            type="monotone"
                            stroke={`var(--color-${activeChart})`}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
