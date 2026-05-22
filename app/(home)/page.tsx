import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, GraduationCap, Coins, Settings, ShieldCheck, Globe, HelpCircle } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-radial from-slate-50 to-slate-100 dark:from-zinc-900 dark:to-zinc-950 text-slate-800 dark:text-slate-100">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-400/20 dark:bg-violet-600/10 blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 pt-16 pb-20 flex flex-col justify-center items-center z-10">
        
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 shadow-xs mb-8 animate-fade-in backdrop-blur-xs">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wider text-slate-600 dark:text-zinc-300">
            eSchool Siakad Plus v3.0.0
          </span>
        </div>

        {/* Hero Headline */}
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 dark:from-blue-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent leading-tight drop-shadow-sm">
            Pusat Dokumentasi Resmi eSchool
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
            Temukan panduan lengkap, langkah-langkah konfigurasi, dan solusi penyelesaian masalah untuk mengoptimalkan penggunaan sistem informasi akademik eSchool Anda.
          </p>
        </div>

        {/* Core Language Access Gateways */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-16">
          <Link
            href="/id/docs"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">Bahasa Indonesia</h2>
              </div>
              <p className="text-sm text-slate-500 dark:text-zinc-400 mb-6">
                Akses manual panduan operasional lengkap untuk Admin, Guru, Siswa, dan Bendahara Sekolah.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              Mulai Membaca <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/en/docs"
            className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-md hover:shadow-xl hover:border-violet-500 dark:hover:border-violet-400 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300">
                  <Globe className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">English Version</h2>
              </div>
              <p className="text-sm text-slate-500 dark:text-zinc-400 mb-6">
                Access step-by-step user guides and configuration manuals for administrators and teachers.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-400">
              Start Reading <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        {/* Features Preview Section */}
        <div className="w-full max-w-5xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold tracking-tight mb-2">Pilar Utama Fitur eSchool</h3>
            <div className="h-1 w-12 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-white/50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80 backdrop-blur-xs shadow-xs">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit mb-4">
                <Settings className="h-5 w-5" />
              </div>
              <h4 className="font-bold mb-2">Manajemen Admin</h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Kelola profil sekolah, konfigurasi semester, hak akses (ACL), dan pengaturan sistem terpusat.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80 backdrop-blur-xs shadow-xs">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 w-fit mb-4">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h4 className="font-bold mb-2">Absensi & Kesiswaan</h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Konfigurasi poin tatib, hari efektif, serta cetak rekap absensi dengan tanda tangan digital resmi.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80 backdrop-blur-xs shadow-xs">
              <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit mb-4">
                <Coins className="h-5 w-5" />
              </div>
              <h4 className="font-bold mb-2">Keuangan & Tagihan</h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Pengaturan tarif tagihan, diskon khusus, validasi NISN, dan filter alokasi biaya per kelas secara otomatis.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/50 dark:bg-zinc-900/50 border border-slate-100 dark:border-zinc-800/80 backdrop-blur-xs shadow-xs">
              <div className="p-2.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 w-fit mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-bold mb-2">Keamanan & Ujian</h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed">
                Syarat & ketentuan ujian online terproteksi, kebijakan privasi data, dan pembatasan lisensi trial.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer Area */}
      <footer className="border-t border-slate-200 dark:border-zinc-800 py-6 text-center text-xs text-slate-500 dark:text-zinc-500 z-10 backdrop-blur-xs bg-white/30 dark:bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} eSchool Siakad Plus. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex gap-4">
            <a href="https://eschool.ac.id" target="_blank" rel="noopener noreferrer" className="hover:underline">Website Resmi</a>
            <span>•</span>
            <a href="https://eschool.ac.id/kontak" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-blue-600 dark:text-blue-400">Hubungi Bantuan</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
