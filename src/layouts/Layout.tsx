export default function Layout({ children }) {
return (
<div className="min-h-screen flex w-full">
{/* Sidebar */}
<aside className="w-64 shadow-md p-5 border-r hidden md:block">
<h1 className="text-2xl font-bold mb-7">FlexLiving</h1>
<nav className="space-y-3">
<a className="block p-2 rounded hover:bg-gray-100" href="/dashboard">Dashboard</a>
<a className="block p-2 rounded hover:bg-gray-100" href="/properties">Properties</a>
<a className="block p-2 rounded hover:bg-gray-100" href="/reviews">Reviews</a>
</nav>
</aside>


{/* Main content */}
<main className="flex-1 p-6 bg-red-400">{children}</main>
</div>
);
}