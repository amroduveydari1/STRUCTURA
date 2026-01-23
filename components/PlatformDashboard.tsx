
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../translations';

interface PlatformDashboardProps {
  onBack: () => void;
  lang?: Language;
}

const TRANSLATIONS = {
  en: {
    missionControl: "MISSION CONTROL",
    sandbox: "Sandbox Session",
    relay: "Node Relay: Operational",
    intel: "System Intel",
    analysis: "Structural Lab",
    workflow: "Builder Ops",
    compliance: "Eco Audit",
    terminate: "Terminate Session",
    parameters: "Scenario Parameters",
    material: "Indicative Material",
    height: "Nominal Height (m)",
    wind: "Wind Case (km/h)",
    span: "Intended Span (m)",
    load: "Target Load (kg)",
    verified: "DESIGN INTELLIGENCE VERIFIED",
    warning: "SCENARIO TOLERANCE ALERT",
    interpretation: "Parameter Interpretation",
    deflection: "Interpreted Deflection",
    stress: "Estimated Stress",
    mass: "Structural Mass",
    export: "Export Coordination Summary",
    thermal: "Thermal Expansion",
    deltaT: "Temp Delta (°C)",
    expansion: "Expansion ΔL (mm)",
    concreteVol: "Concrete Vol (m³)",
    rebarWeight: "Rebar Est (tons)",
    carbon: "Carbon Impact (kg CO₂)",
    leadTime: "Procurement Lead Time",
    procurement: "Procurement Logic",
    logistics: "Logistics Relay",
    days: "Est. Days",
    summary: "Coordination Summary",
    seismic: "Seismic Base Shear (kN)",
    efficiency: "Structural Efficiency",
    logisticsActive: "LOGISTICS STREAM ACTIVE",
    nodeSync: "BIM NODE SYNC: STABLE"
  },
  ar: {
    missionControl: "مركز التحكم",
    sandbox: "جلسة اختبار",
    relay: "مرحل العقدة: يعمل",
    intel: "استخبارات النظام",
    analysis: "المختبر الإنشائي",
    workflow: "عمليات البناء",
    compliance: "التدقيق البيئي",
    terminate: "إنهاء الجلسة",
    parameters: "معايير السيناريو",
    material: "المادة المقترحة",
    height: "الارتفاع الاسمي (م)",
    wind: "حالة الرياح (كم/س)",
    span: "المسافة المقصودة (م)",
    load: "الحمل المستهدف (كجم)",
    verified: "تم التحقق من ذكاء التصميم",
    warning: "تنبيه تسامح السيناريو",
    interpretation: "تفسير المعايير",
    deflection: "الترخيم المفسر",
    stress: "الإجهاد المقدر",
    mass: "الكتلة الإنشائية",
    export: "تصدير الملخص",
    thermal: "التمدد الحراري",
    deltaT: "فرق الحرارة (°م)",
    expansion: "التمدد ΔL (مم)",
    concreteVol: "حجم الخرسانة (م³)",
    rebarWeight: "تقدير حديد التسليح (طن)",
    carbon: "الأثر الكربوني (كجم CO₂)",
    leadTime: "مدة التوريد",
    procurement: "منطق المشتريات",
    logistics: "مرحل اللوجستيات",
    days: "أيام مقدرة",
    summary: "ملخص التنسيق",
    seismic: "القص القاعدي الزلزالي (kN)",
    efficiency: "الكفاءة الإنشائية",
    logisticsActive: "تدفق الخدمات اللوجستية نشط",
    nodeSync: "مزامنة عقدة BIM: مستقرة"
  },
  tr: {
    missionControl: "GÖREV KONTROLÜ",
    sandbox: "Sandbox Oturumu",
    relay: "Düğüm Rölesi: Çalışıyor",
    intel: "Sistem Bilgisi",
    analysis: "Yapı Laboratuvarı",
    workflow: "İnşaat Op.",
    compliance: "Eko Denetim",
    terminate: "Oturumu Sonlandır",
    parameters: "Senaryo Parametreleri",
    material: "Gösterge Malzemesi",
    height: "Yükseklik (m)",
    wind: "Rüzgar (km/s)",
    span: "Açıklık (m)",
    load: "Yük (kg)",
    verified: "TASARIM ZEKASI DOĞRULANDI",
    warning: "TOLERANS UYARISI",
    interpretation: "Parametre Yorumu",
    deflection: "Sehim",
    stress: "Gerilme",
    mass: "Yapısal Kütle",
    export: "Koordinasyon Özetini Dışa Aktar",
    thermal: "Termal Genleşme",
    deltaT: "Sıcaklık Farkı (°C)",
    expansion: "Genleşme ΔL (mm)",
    concreteVol: "Beton Hacmi (m³)",
    rebarWeight: "Donatı Tahmini (ton)",
    carbon: "Karbon Etkisi (kg CO₂)",
    leadTime: "Tedarik Süresi",
    procurement: "Satın Alma Mantığı",
    logistics: "Lojistik Rölesi",
    days: "Tahmini Gün",
    summary: "Koordinasyon Özeti",
    seismic: "Sismik Taban Kesme (kN)",
    efficiency: "Yapısal Verimlilik",
    logisticsActive: "LOJİSTİK AKIŞI AKTİF",
    nodeSync: "BIM DÜĞÜM SENKRONİZASYONU: STABİL"
  },
  de: {
    missionControl: "MISSIONSKONTROLLE",
    sandbox: "Sandbox-Sitzung",
    relay: "Knoten-Relais: Betriebsbereit",
    intel: "System-Informationen",
    analysis: "Strukturlabor",
    workflow: "Bau-Ops",
    compliance: "Öko-Audit",
    terminate: "Sitzung beenden",
    parameters: "Szenario-Parameter",
    material: "Indikatives Material",
    height: "Höhe (m)",
    wind: "Windfall (km/h)",
    span: "Spannweite (m)",
    load: "Last (kg)",
    verified: "DESIGN-INTELLIGENZ VERIFIZIERT",
    warning: "TOLERANZALARM",
    interpretation: "Parameter-Interpretation",
    deflection: "Durchbiegung",
    stress: "Spannung",
    mass: "Strukturmasse",
    export: "Zusammenfassung exportieren",
    thermal: "Thermische Ausdehnung",
    deltaT: "Temperaturdelta (°C)",
    expansion: "Ausdehnung ΔL (mm)",
    concreteVol: "Betonvolumen (m³)",
    rebarWeight: "Bewehrungsest. (Tonnen)",
    carbon: "CO₂-Auswirkung (kg)",
    leadTime: "Beschaffungszeit",
    procurement: "Beschaffungslogik",
    logistics: "Logistik-Relais",
    days: "Gesch. Tage",
    summary: "Koordinationsbericht",
    seismic: "Sismische Basisscherung (kN)",
    efficiency: "Strukturelle Effizienz",
    logisticsActive: "LOGISTIK-STREAM AKTIV",
    nodeSync: "BIM-KNOTEN-SYNC: STABIL"
  }
};

const MATERIALS = [
  { id: 'steel', name: { en: 'Reinforced Steel', ar: 'الفولاذ المقوى', tr: 'Çelik', de: 'Stahl' }, modulus: 200, yieldStrength: 250, density: 7850, coeff: 12e-6, co2Factor: 1.85, lead: 45 },
  { id: 'concrete', name: { en: 'C30 Concrete', ar: 'خرسانة C30', tr: 'Beton', de: 'Beton' }, modulus: 30, yieldStrength: 30, density: 2400, coeff: 10e-6, co2Factor: 0.12, lead: 2 },
  { id: 'carbon', name: { en: 'Carbon Composite', ar: 'كربون مركب', tr: 'Karbon', de: 'Karbon' }, modulus: 250, yieldStrength: 600, density: 1600, coeff: 2e-6, co2Factor: 2.5, lead: 90 },
  { id: 'timber', name: { en: 'Glulam Timber', ar: 'خشب غلولام', tr: 'Ahşap', de: 'Holz' }, modulus: 12, yieldStrength: 24, density: 600, coeff: 5e-6, co2Factor: -0.8, lead: 30 }
];

const PlatformDashboard: React.FC<PlatformDashboardProps> = ({ onBack, lang: globalLang = 'en' }) => {
  const [lang, setInternalLang] = useState<Language>(globalLang);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTool, setActiveTool] = useState<'intel' | 'calc' | 'workflow' | 'audit'>('calc');
  const [logs, setLogs] = useState<string[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  const [params, setParams] = useState({
    span: 12.0,
    load: 5000,
    material: 'steel',
    tempDelta: 35,
    width: 300,
    depth: 600,
    safetyFactor: 1.5,
    seismicZone: 0.2, // PGA
  });

  const [results, setResults] = useState({
    deflection: 0,
    stress: 0,
    weight: 0,
    expansion: 0,
    carbon: 0,
    concVol: 0,
    rebarTons: 0,
    seismicForce: 0,
    isCompliant: true
  });

  useEffect(() => {
    if (!isAuthenticated) return;
    const mat = MATERIALS.find(m => m.id === params.material)!;
    
    // Physics Logic
    const I = (params.width * Math.pow(params.depth, 3)) / 12000;
    const def = (params.load * Math.pow(params.span, 3)) / (48 * mat.modulus * I) * params.safetyFactor;
    const area = (params.width * params.depth) / 1000000;
    const mass = area * params.span * mat.density;
    const stress = (params.load * 9.81) / (area * 1000000);
    const exp = params.span * 1000 * mat.coeff * params.tempDelta;
    const co2 = mass * mat.co2Factor;
    
    const concV = area * params.span;
    const rebarT = params.material === 'concrete' ? concV * 0.12 : (params.material === 'steel' ? mass / 1000 : 0);
    const seismic = (mass / 1000) * params.seismicZone * 9.81;

    setResults({
      deflection: parseFloat(def.toFixed(2)),
      stress: parseFloat(stress.toFixed(1)),
      weight: Math.round(mass),
      expansion: parseFloat(exp.toFixed(2)),
      carbon: Math.round(co2),
      concVol: parseFloat(concV.toFixed(2)),
      rebarTons: parseFloat(rebarT.toFixed(2)),
      seismicForce: parseFloat(seismic.toFixed(1)),
      isCompliant: def < 15.0 && stress < mat.yieldStrength
    });

    addLog(`Node Sync: ${mat.id.toUpperCase()} | Stress ${stress.toFixed(1)} MPa | Safety ${params.safetyFactor}`);
  }, [params, isAuthenticated, lang]);

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString('en-GB', { hour12: false });
    setLogs(prev => [...prev, `[${time}] ${msg}`].slice(-10));
  };

  const handleLogin = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsLoggingIn(false);
      addLog("Core Logic Verified. Session Initialized.");
    }, 1200);
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center p-6">
        <div className="absolute inset-0 bg-grid-wallpaper opacity-10 pointer-events-none"></div>
        <div className="w-full max-w-sm relative z-10 animate-fade-in-up text-center">
          <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center transform rotate-45 mx-auto mb-10 shadow-2xl">
            <div className="w-8 h-8 bg-zinc-950 transform -rotate-45"></div>
          </div>
          <h1 className="text-3xl font-architectural font-bold text-white tracking-tighter uppercase mb-2">{t.missionControl}</h1>
          <p className="text-zinc-600 font-architectural text-[9px] uppercase tracking-[0.4em] mb-12">Operator Access Required</p>
          <button onClick={handleLogin} disabled={isLoggingIn} className="w-full bg-white hover:bg-amber-600 hover:text-white text-zinc-950 py-5 font-architectural font-bold uppercase tracking-[0.3em] text-[10px] transition-all">
            {isLoggingIn ? 'Verifying Credentials...' : 'Initialize Mission'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-[100] bg-zinc-950 text-zinc-300 flex flex-col font-inter selection:bg-amber-600 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="h-16 md:h-20 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl px-6 md:px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-4 md:space-x-6 rtl:space-x-reverse">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={onBack}>
            <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center transform rotate-45">
              <div className="w-3 h-3 bg-zinc-950 transform -rotate-45"></div>
            </div>
            <span className="text-xs md:text-sm font-architectural font-bold text-white tracking-tighter uppercase">{t.missionControl}</span>
          </div>
          <div className="h-6 w-[1px] bg-zinc-800 hidden sm:block"></div>
          <span className="text-[9px] text-zinc-600 font-mono tracking-widest hidden lg:block">{t.relay}</span>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-6 rtl:space-x-reverse">
           <div className="flex space-x-2 md:space-x-3 rtl:space-x-reverse">
             {(['en', 'ar', 'tr', 'de'] as Language[]).map(l => (
               <button key={l} onClick={() => setInternalLang(l)} className={`text-[9px] font-bold uppercase transition-colors ${lang === l ? 'text-amber-500 underline' : 'text-zinc-600 hover:text-zinc-400'}`}>{l}</button>
             ))}
           </div>
           <button onClick={onBack} className="text-[10px] font-architectural font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white border border-white/10 px-4 py-1.5 md:px-5 md:py-2 transition-all">{t.terminate}</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Navigation Sidebar */}
        <aside className="w-16 lg:w-64 border-r border-white/5 bg-zinc-950 flex flex-col shrink-0">
          <nav className="flex-1 py-4 md:py-6">
            {[
              { id: 'intel', label: t.intel, icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { id: 'calc', label: t.analysis, icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
              { id: 'workflow', label: t.workflow, icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" },
              { id: 'audit', label: t.compliance, icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => { setActiveTool(item.id as any); addLog(`Switched Module: ${item.label.toUpperCase()}`); }}
                className={`w-full flex items-center p-4 lg:px-8 lg:py-5 transition-all group ${activeTool === item.id ? 'bg-amber-600/10 text-amber-500 border-r-2 border-amber-500' : 'text-zinc-600 hover:text-zinc-300'}`}
              >
                <svg className="w-5 h-5 lg:mr-4 lg:rtl:mr-0 lg:rtl:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon}/></svg>
                <span className="hidden lg:block text-[9px] font-architectural font-bold uppercase tracking-widest">{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="p-4 md:p-6 border-t border-white/5 hidden lg:block">
            <div className="bg-zinc-900/50 p-4 rounded-sm border border-white/5">
              <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-widest block mb-2">Platform Status</span>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                <span className="text-[10px] text-zinc-400 font-mono">ENCR_SSL_V3</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-zinc-950 p-4 md:p-8 lg:p-12 relative scrollbar-hide">
          <div className="absolute inset-0 bg-grid-wallpaper opacity-5 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto relative z-10 animate-fade-in-up">
            {activeTool === 'calc' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
                {/* Inputs */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-sm backdrop-blur-sm">
                    <h3 className="text-[10px] text-white font-architectural font-bold uppercase tracking-widest mb-6 border-b border-white/5 pb-3">{t.parameters}</h3>
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest">{t.material}</label>
                        <select value={params.material} onChange={(e) => setParams({...params, material: e.target.value})} className="w-full bg-zinc-950 border border-zinc-800 py-3 px-4 text-white text-xs uppercase focus:border-amber-600 outline-none transition-colors">
                          {MATERIALS.map(m => <option key={m.id} value={m.id}>{m.name[lang]}</option>)}
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest">{t.span}</label>
                          <input type="number" step="0.5" value={params.span} onChange={(e) => setParams({...params, span: parseFloat(e.target.value) || 0})} className="w-full bg-zinc-950 border border-zinc-800 py-3 px-4 text-white font-mono text-xs focus:border-amber-600 outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest">{t.load}</label>
                          <input type="number" step="100" value={params.load} onChange={(e) => setParams({...params, load: parseFloat(e.target.value) || 0})} className="w-full bg-zinc-950 border border-zinc-800 py-3 px-4 text-white font-mono text-xs focus:border-amber-600 outline-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest">{t.deltaT}</label>
                        <input type="range" min="-20" max="60" value={params.tempDelta} onChange={(e) => setParams({...params, tempDelta: parseInt(e.target.value)})} className="w-full h-1 bg-zinc-800 accent-amber-600 cursor-pointer" />
                        <div className="flex justify-between text-[10px] text-zinc-600 font-mono"><span>-20°C</span><span className="text-white">{params.tempDelta}°C</span><span>60°C</span></div>
                      </div>
                      <div className="space-y-2 pt-2 border-t border-white/5">
                        <label className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest">Seismic Zone (PGA)</label>
                        <input type="range" min="0.05" max="0.5" step="0.05" value={params.seismicZone} onChange={(e) => setParams({...params, seismicZone: parseFloat(e.target.value)})} className="w-full h-1 bg-zinc-800 accent-amber-600 cursor-pointer" />
                        <div className="flex justify-between text-[10px] text-zinc-600 font-mono"><span>0.05g</span><span className="text-white">{params.seismicZone}g</span><span>0.50g</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-sm">
                    <h3 className="text-[10px] text-white font-architectural font-bold uppercase tracking-widest mb-6 border-b border-white/5 pb-3">Structural Safety</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className="text-zinc-500">{t.seismic}</span>
                        <span className="text-amber-500 font-mono">{results.seismicForce} kN</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest">
                        <span className="text-zinc-500">{t.efficiency}</span>
                        <span className="text-amber-500 font-mono">{Math.max(10, Math.min(100, Math.round(100 - results.deflection * 5)))}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Results View */}
                <div className="lg:col-span-8 space-y-6">
                  <div className={`p-6 md:p-10 border-2 transition-all duration-700 rounded-sm relative overflow-hidden ${results.isCompliant ? 'border-amber-600/20 bg-amber-600/5' : 'border-red-600/30 bg-red-600/10'}`}>
                    <div className="flex justify-between items-start mb-8 md:mb-12">
                      <div>
                        <span className={`text-[10px] uppercase font-bold tracking-[0.4em] mb-2 block ${results.isCompliant ? 'text-emerald-500' : 'text-red-500'}`}>{results.isCompliant ? t.verified : t.warning}</span>
                        <h2 className="text-white font-architectural font-bold text-2xl md:text-3xl uppercase tracking-tighter">{t.interpretation}</h2>
                      </div>
                      <div className={`w-4 h-4 rounded-full ${results.isCompliant ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' : 'bg-red-500 animate-ping'}`}></div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-12 md:mb-16">
                      <div className="space-y-1">
                        <span className="text-[8px] md:text-[9px] text-zinc-600 uppercase font-bold tracking-widest block">{t.deflection}</span>
                        <div className="flex items-baseline space-x-1 rtl:space-x-reverse"><span className="text-3xl md:text-4xl text-white font-mono tracking-tighter">{results.deflection}</span><span className="text-[10px] text-zinc-600 font-mono">mm</span></div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] md:text-[9px] text-zinc-600 uppercase font-bold tracking-widest block">{t.stress}</span>
                        <div className="flex items-baseline space-x-1 rtl:space-x-reverse"><span className="text-3xl md:text-4xl text-white font-mono tracking-tighter">{results.stress}</span><span className="text-[10px] text-zinc-600 font-mono">MPa</span></div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] md:text-[9px] text-zinc-600 uppercase font-bold tracking-widest block">{t.expansion}</span>
                        <div className="flex items-baseline space-x-1 rtl:space-x-reverse"><span className="text-3xl md:text-4xl text-white font-mono tracking-tighter">{results.expansion}</span><span className="text-[10px] text-zinc-600 font-mono">mm</span></div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[8px] md:text-[9px] text-zinc-600 uppercase font-bold tracking-widest block">{t.mass}</span>
                        <div className="flex items-baseline space-x-1 rtl:space-x-reverse"><span className="text-2xl md:text-3xl text-white font-mono tracking-tighter">{results.weight.toLocaleString()}</span><span className="text-[10px] text-zinc-600 font-mono">kg</span></div>
                      </div>
                    </div>

                    <div className="bg-black/40 border border-white/5 p-4 font-mono text-[9px] space-y-2 text-zinc-500 h-32 md:h-40 overflow-y-auto scrollbar-hide rounded-sm">
                      {logs.map((log, i) => <div key={i} className="flex space-x-3 rtl:space-x-reverse"><span className="text-amber-600">>>></span><span className={i === logs.length -1 ? 'text-zinc-200' : ''}>{log}</span></div>)}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-sm">
                        <h4 className="text-[10px] text-white font-architectural font-bold uppercase tracking-widest mb-6">{t.compliance}</h4>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                          <div className="text-3xl md:text-4xl font-mono text-emerald-500">{results.carbon}</div>
                          <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">kg CO₂ <br/>Indicative Footprint</div>
                        </div>
                     </div>
                     <div className="bg-zinc-900/40 border border-white/5 p-6 rounded-sm">
                        <h4 className="text-[10px] text-white font-architectural font-bold uppercase tracking-widest mb-6">{t.workflow}</h4>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                          <div className="text-3xl md:text-4xl font-mono text-amber-500">{MATERIALS.find(m => m.id === params.material)?.lead}</div>
                          <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{t.days} <br/>{t.leadTime}</div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            )}

            {activeTool === 'intel' && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                  {[
                    { title: "BIM SYNC", val: "99.98%", status: "OPTIMAL" },
                    { title: "CORE UPTIME", val: "1420:12", status: "STABLE" },
                    { title: "ACTIVE NODES", val: "31", status: "SYNCED" }
                  ].map((s, i) => (
                    <div key={i} className="bg-zinc-900/40 border border-white/5 p-8 md:p-12 rounded-sm backdrop-blur-sm">
                      <h4 className="text-[10px] text-zinc-600 font-architectural font-bold uppercase tracking-[0.3em] mb-4">{s.title}</h4>
                      <div className="text-4xl md:text-5xl font-mono text-white mb-4 tracking-tighter">{s.val}</div>
                      <div className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">{s.status}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-sm">
                   <h3 className="text-white font-architectural font-bold text-[10px] uppercase tracking-[0.3em] mb-8">{t.nodeSync}</h3>
                   <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-zinc-950 p-3 rounded-sm border border-white/5">
                           <div className={`w-1.5 h-1.5 rounded-full ${Math.random() > 0.1 ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'}`}></div>
                           <span className="text-[9px] font-mono text-zinc-500">ST-00{i+1}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {activeTool === 'workflow' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up">
                <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-sm">
                   <h3 className="text-white font-architectural font-bold text-[10px] uppercase tracking-[0.3em] mb-8">BUILDER LOGISTICS RELAY</h3>
                   <div className="space-y-6">
                      {[
                        { label: "STEEL PROCUREMENT", status: "45 DAYS", progress: 65 },
                        { label: "CONCRETE BATCHING", status: "READY", progress: 100 },
                        { label: "GLASS CURTAIN WALL", status: "90 DAYS", progress: 20 },
                        { label: "HVAC PRE-FAB", status: "15 DAYS", progress: 85 }
                      ].map((item, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest">
                              <span className="text-zinc-500">{item.label}</span>
                              <span className="text-amber-500">{item.status}</span>
                           </div>
                           <div className="w-full h-1 bg-zinc-950 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-600 transition-all duration-1000" style={{ width: `${item.progress}%` }}></div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-sm flex flex-col justify-center items-center text-center">
                   <div className="w-16 h-16 border border-amber-600/30 rounded-full flex items-center justify-center mb-6">
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
                   </div>
                   <h4 className="text-white font-architectural text-[10px] uppercase tracking-widest mb-2">{t.logisticsActive}</h4>
                   <p className="text-zinc-600 text-[10px] max-w-xs font-light">Real-time procurement data streams are synced with global supply chain nodes.</p>
                </div>
              </div>
            )}

            {activeTool === 'audit' && (
              <div className="space-y-8 animate-fade-in-up">
                 <div className="p-8 md:p-12 bg-emerald-950/20 border border-emerald-500/20 rounded-sm">
                    <div className="flex justify-between items-center mb-12">
                       <h3 className="text-white font-architectural font-bold text-xl uppercase tracking-tighter">SUSTAINABILITY SCORE: A+</h3>
                       <div className="text-emerald-500 font-mono text-[10px] uppercase tracking-widest font-bold">Audit Verified</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                       <div className="space-y-2">
                          <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block">EMBODIED CO₂</span>
                          <div className="flex items-baseline space-x-2"><span className="text-4xl text-white font-mono">{results.carbon}</span><span className="text-[10px] text-zinc-600">kg</span></div>
                       </div>
                       <div className="space-y-2">
                          <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block">RECYCLABILITY</span>
                          <div className="flex items-baseline space-x-2"><span className="text-4xl text-white font-mono">82</span><span className="text-[10px] text-zinc-600">%</span></div>
                       </div>
                       <div className="space-y-2">
                          <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block">OPERATIONAL NET</span>
                          <div className="flex items-baseline space-x-2"><span className="text-4xl text-white font-mono">0.0</span><span className="text-[10px] text-zinc-600">kW</span></div>
                       </div>
                    </div>
                 </div>
                 <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-sm">
                    <h4 className="text-white font-architectural text-[10px] uppercase tracking-widest mb-6 font-bold">Eco-Material Strategy</h4>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">By prioritizing {MATERIALS.find(m => m.id === params.material)?.name[lang]} in this scenario, the embodied carbon is estimated at {results.carbon} kg. This module recommends high-performance alternatives if the target falls below threshold B2.</p>
                 </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Persistent Status Bar */}
      <footer className="h-10 bg-zinc-950 border-t border-white/5 flex items-center justify-between px-6 md:px-8 text-[8px] font-mono text-zinc-700 uppercase tracking-[0.2em] shrink-0">
         <div className="flex space-x-6 rtl:space-x-reverse">
           <span className="text-emerald-500/50">RELAY_SYNC: 0.08ms</span>
           <span className="hidden sm:inline">PROTO: BIM_600_ELITE</span>
         </div>
         <div className="flex space-x-6 rtl:space-x-reverse">
           <span className="hidden sm:inline">NODES: 14/14</span>
           <span>SYS_EPOCH: ${new Date().getFullYear()}.Q4</span>
         </div>
      </footer>
    </div>
  );
};

export default PlatformDashboard;
