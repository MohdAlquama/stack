import { Users, BookOpen, IndianRupee, Settings } from "lucide-react"

export default function Admin() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Admin 👋</p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
          + Add New
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Students */}
        <div className="bg-white rounded-2xl shadow p-5 flex items-center justify-between hover:shadow-lg transition">
          <div>
            <p className="text-sm text-gray-500">Total Students</p>
            <h2 className="text-2xl font-bold">1,245</h2>
          </div>
          <div className="bg-blue-100 p-3 rounded-xl">
            <Users className="text-blue-600" />
          </div>
        </div>

        {/* Courses */}
        <div className="bg-white rounded-2xl shadow p-5 flex items-center justify-between hover:shadow-lg transition">
          <div>
            <p className="text-sm text-gray-500">Total Courses</p>
            <h2 className="text-2xl font-bold">32</h2>
          </div>
          <div className="bg-green-100 p-3 rounded-xl">
            <BookOpen className="text-green-600" />
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white rounded-2xl shadow p-5 flex items-center justify-between hover:shadow-lg transition">
          <div>
            <p className="text-sm text-gray-500">Revenue</p>
            <h2 className="text-2xl font-bold">₹2,45,000</h2>
          </div>
          <div className="bg-yellow-100 p-3 rounded-xl">
            <IndianRupee className="text-yellow-600" />
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl shadow p-5 flex items-center justify-between hover:shadow-lg transition">
          <div>
            <p className="text-sm text-gray-500">System Settings</p>
            <h2 className="text-2xl font-bold">Manage</h2>
          </div>
          <div className="bg-purple-100 p-3 rounded-xl">
            <Settings className="text-purple-600" />
          </div>
        </div>

      </div>

      {/* Recent Activity Section */}
      <div className="mt-8 bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li className="border-b pb-2">✔️ New student admission completed</li>
          <li className="border-b pb-2">✔️ Fee payment received</li>
          <li className="border-b pb-2">✔️ Course updated by Admin</li>
          <li>✔️ New teacher added</li>
        </ul>
      </div>

    </div>
  )
}
