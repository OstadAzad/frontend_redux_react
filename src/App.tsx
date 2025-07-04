// src/App.tsx
import Navbar from "@/components/routes/navbar";
import Footer from "@/components/routes/footer";
import AppRoutes from "@/components/routes/appRouts";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
