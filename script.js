<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Enterprise WebApp Portal</title>
    <!-- Tailwind CSS Framework CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- FontAwesome Icon Suite -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { background-color: #0d0d0d; color: #ffffff; }
        .card-panel { background-color: #1a1a1a; border: 1px solid #333333; }
        .accent-gradient { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); }
    </style>
</head>
<body class="min-h-screen flex flex-col justify-between items-center p-0 sm:p-4">

    <!-- Mobile Shell Container -->
    <div class="w-full max-w-md bg-black min-h-screen sm:min-h-[844px] sm:rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col justify-between">
        
        <!-- Header Bar -->
        <header class="p-4 bg-neutral-900 border-b border-neutral-800 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full accent-gradient flex items-center justify-center font-bold text-white shadow-md">
                    E
                </div>
                <div>
                    <h1 class="text-sm font-bold tracking-wide uppercase text-red-500 leading-none">Enterprise</h1>
                    <span class="text-[10px] text-gray-400 tracking-wider">Web Portal</span>
                </div>
            </div>
            <span class="text-xs text-emerald-400 font-medium"><i class="fa-solid fa-circle text-[8px] mr-1"></i> Cloudflare Live</span>
        </header>

        <!-- Dynamic Content Body -->
        <main id="app-content" class="p-4 flex-1 overflow-y-auto">
            <!-- View 1: Dashboard Home (Default) -->
            <section id="view-home" class="space-y-4">
                <div class="accent-gradient p-5 rounded-2xl shadow-lg relative overflow-hidden">
                    <h2 class="text-lg font-bold mb-1">Welcome to WebApp Portal</h2>
                    <p class="text-xs text-red-100 mb-3">Manage business operations efficiently on Cloudflare Pages.</p>
                    <button onclick="switchView('services')" class="bg-white text-red-700 font-bold text-xs px-4 py-2 rounded-lg hover:bg-neutral-100 transition">
                        Explore Modules
                    </button>
                </div>

                <div class="grid grid-cols-2 gap-3">
                    <div onclick="switchView('analytics')" class="card-panel p-4 rounded-xl cursor-pointer hover:border-red-500 transition">
                        <i class="fa-solid fa-chart-line text-red-500 text-2xl mb-2"></i>
                        <h3 class="text-xs font-bold">Analytics</h3>
                        <p class="text-[10px] text-gray-400">View performance</p>
                    </div>
                    <div onclick="switchView('settings')" class="card-panel p-4 rounded-xl cursor-pointer hover:border-red-500 transition">
                        <i class="fa-solid fa-gear text-red-500 text-2xl mb-2"></i>
                        <h3 class="text-xs font-bold">System Config</h3>
                        <p class="text-[10px] text-gray-400">Manage settings</p>
                    </div>
                </div>
            </section>

            <!-- View 2: Services / Modules -->
            <section id="view-services" class="hidden space-y-3">
                <h2 class="text-sm font-bold text-gray-400 uppercase tracking-wider">Available Modules</h2>
                <div class="card-panel p-4 rounded-xl flex justify-between items-center">
                    <div>
                        <h3 class="text-sm font-bold">Data Management</h3>
                        <p class="text-xs text-gray-400">Store and query records</p>
                    </div>
                    <button onclick="alert('Module Selected')" class="text-xs bg-red-600 px-3 py-1.5 rounded-lg">Open</button>
                </div>
            </section>
        </main>

        <!-- Bottom Navigation Bar -->
        <nav class="bg-neutral-900 border-t border-neutral-800 p-3 grid grid-cols-3 gap-1 text-center">
            <button onclick="switchView('home')" id="nav-home" class="text-red-500 flex flex-col items-center gap-1">
                <i class="fa-solid fa-house text-base"></i>
                <span class="text-[10px]">Home</span>
            </button>
            <button onclick="switchView('services')" id="nav-services" class="text-gray-400 hover:text-white flex flex-col items-center gap-1">
                <i class="fa-solid fa-cubes text-base"></i>
                <span class="text-[10px]">Modules</span>
            </button>
            <button onclick="switchView('settings')" id="nav-settings" class="text-gray-400 hover:text-white flex flex-col items-center gap-1">
                <i class="fa-solid fa-gear text-base"></i>
                <span class="text-[10px]">Config</span>
            </button>
        </nav>
    </div>

    <!-- Application Script -->
    <script src="app.js"></script>
</body>
</html>
