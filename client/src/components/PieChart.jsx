import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ['#4caf50', '#f44336', '#ffc107'];

const ResaPieChart = ({affittoAnnuale, costiAnnuali, sfittoPercentuale}) => {
    const sfitto = affittoAnnuale * (sfittoPercentuale/100);
    const utileNetto = affittoAnnuale - costiAnnuali -sfitto;

    const data = [
        {name: 'Utile Netto', value: utileNetto},
        {name: 'Costi Annuali', value: costiAnnuali},
        {name: 'Sfitto', value: sfitto},
    ];

    return (
        <div className="w-full max-w-md mx-auto mt-5">
            <h3 className="text-center font-bold mb-2">Distribuzione ROI</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={data} innerRadius={60} outerRadius={100} fill="#8884d8" paddingAngle={3} isAnimationActive={true} dataKey="value" label>
                        {data.map((entry, index)=>(
                            <Cell key={index} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Tooltip/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );

}

export default ResaPieChart;
