export default function Table({ columns, data }) {
return (
<div className="overflow-x-auto bg-white rounded-xl shadow border">
<table className="w-full text-left">
<thead className="bg-gray-100 border-b">
<tr>
{columns.map((c, i) => (
<th key={i} className="p-3 text-sm font-semibold text-gray-700">{c}</th>
))}
</tr>
</thead>
<tbody>
{data.map((row, i) => (
<tr key={i} className="border-b hover:bg-gray-50">
{Object.values(row).map((cell, ci) => (
<td key={ci} className="p-3 text-sm">{cell}</td>
))}
</tr>
))}
</tbody>
</table>
</div>
);
}