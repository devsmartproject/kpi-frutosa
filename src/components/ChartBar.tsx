"use client";

import { data } from "@/constants/data-bar";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
} from "recharts";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

function ChartBar() {
  return (
    <Card className="w-[850px] h-[350px]">
      <CardHeader>
        <CardTitle>Resumen de Costo de Planilla</CardTitle>
        <CardDescription>
          Indicador del costo de planilla mensual
        </CardDescription>
      </CardHeader>
      <CardContent className="w-[650px] h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
export default ChartBar;
