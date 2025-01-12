"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Kalkulator Pinjaman Rumah</h1>
        <p className="text-gray-600 mt-2">Kira anggaran bayaran bulanan pinjaman anda.</p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Selamat Datang!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Gunakan kalkulator pinjaman rumah kami untuk menganggar bayaran bulanan anda.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Panduan Ringkas</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-gray-600">Masukkan jumlah pinjaman anda</li>
              <li className="text-gray-600">Pilih tempoh pinjaman</li>
              <li className="text-gray-600">Tetapkan kadar faedah</li>
              <li className="text-gray-600">Dapatkan pengiraan segera</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;