export default function Header() {
    return (
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center pl-8">
          <div className="text-2xl font-bold">ClassSpace</div>
  
          <div className="flex-grow mx-4 pl-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-2/4 px-4 py-2 pl-2 rounded-lg bg-gray-800 text-white border border-gray-600 "
            />
          </div>
  
          <nav className="flex space-x-8 pr-12 gap-6">
            <a href="/home page ke andar" className="hover:text-blue-400">
            <i class="fa-solid fa-house"/>
            </a>
            <a href="/profile me hai tu apne" className="hover:text-blue-400">
            <i class="fa-solid fa-user"></i>
            </a>
          </nav>
        </div>
      </header>
    );
  }
  