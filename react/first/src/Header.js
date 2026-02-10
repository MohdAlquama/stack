function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-100">
      
      <div className="text-xl font-bold">
        MyWebsite
      </div>

      <nav className="space-x-6">
        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
        <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
        <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
      </nav>

    </header>
  );
}

export default Header;
