import Dashboard from '@/components/Dashboard';
import HomeLoanCalculator from '@/components/HomeLoanCalculator';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Dashboard />
      <HomeLoanCalculator />
    </div>
  );
}