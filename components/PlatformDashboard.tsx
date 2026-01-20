
import React, { useState, useEffect } from 'react';
import { Language } from '../translations';

interface WorkflowStep {
  id: string;
  stage: string;
  date: string;
  progress: number;
}

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
    analysis: "Analysis",
    workflow: "Workflow",
    compliance: "Compliance",
    terminate: "Terminate Session",
    protocol: "Protocol: Read-Only Intelligence Relay",
    parameters: "Scenario Parameters",
    material: "Indicative Material",
    height: "Nominal Height (m)",
    wind: "Wind Case (km/h)",
    span: "Intended Span (m)",
    load: "Target Load (kg)",
    footing: "Indicative Footing",
    seismic: "Seismic Assessment Zone",
    area: "Planned Area (m²)",
    verified: "DESIGN INTELLIGENCE VERIFIED",
    warning: "SCENARIO TOLERANCE ALERT",
    interpretation: "Indicative Parameter Interpretation",
    deflection: "Interpreted Deflection",
    stress: "Estimated Stress",
    windPressure: "Wind Scenario Pressure",
    soilLoad: "Indicative Soil Load",
    mass: "Estimated Structural Mass",
    export: "Export Coordination Summary",
    verifyBim: "Verify BIM Link",
    notice: "Notice: Metrics displayed are based on simplified engineering logic for scenario support. Final analysis must be executed in certified BIM environments.",
    reportTitle: "STRUCTURA | COORDINATION SUMMARY",
    reportDisclaimer: "IMPORTANT NOTICE: This summary is for coordination, early-stage decision support, and scenario evaluation ONLY. It is NOT a certified structural analysis or professional approval document."
  },
  ar: {
    missionControl: "مركز التحكم",
    sandbox: "جلسة اختبار",
    relay: "مرحل العقدة: يعمل",
    intel: "استخبارات النظام",
    analysis: "التحليل",
    workflow: "سير العمل",
    compliance: "الامتثال",
    terminate: "إنهاء الجلسة",
    protocol: "البروتوكول: مرحل استخباراتي للقراءة فقط",
    parameters: "معايير السيناريو",
    material: "المادة المقترحة",
    height: "الارتفاع الاسمي (م)",
    wind: "حالة الرياح (كم/س)",
    span: "المسافة المقصودة (م)",
    load: "الحمل المستهدف (كجم)",
    footing: "القواعد المقترحة",
    seismic: "منطقة التقييم الزلزالي",
    area: "المساحة المخططة (م²)",
    verified: "تم التحقق من ذكاء التصميم",
    warning: "تنبيه تسامح السيناريو",
    interpretation: "تفسير المعايير المقترحة",
    deflection: "الترخيم المفسر",
    stress: "الإجهاد المقدر",
    windPressure: "ضغط سيناريو الرياح",
    soilLoad: "حمل التربة المقترح",
    mass: "الكتلة الإنشائية المقدرة",
    export: "تصدير ملخص التنسيق",
    verifyBim: "التحقق من رابط BIM",
    notice: "ملاحظة: المقاييس المعروضة تعتمد على منطق هندسي مبسط لدعم السيناريو. يجب تنفيذ التحليل النهائي في بيئات BIM معتمدة.",
    reportTitle: "ستركتورا | ملخص التنسيق",
    reportDisclaimer: "ملاحظة هامة: هذا الملخص مخصص للتنسيق ودعم القرار في المراحل المبكرة وتقييم السيناريوهات فقط. إنه ليس تحليلاً إنشائيًا معتمدًا أو وثيقة اعتماد مهنية."
  },
  tr: {
    missionControl: "GÖREV KONTROLÜ",
    sandbox: "Sandbox Oturumu",
    relay: "Düğüm Rölesi: Çalışıyor",
    intel: "Sistem Bilgisi",
    analysis: "Analiz",
    workflow: "İş Akışı",
    compliance: "Uyumluluk",
    terminate: "Oturumu Sonlandır",
    protocol: "Protokol: Salt Okunur İstihbarat Rölesi",
    parameters: "Senaryo Parametreleri",
    material: "Gösterge Malzemesi",
    height: "Nominal Yükseklik (m)",
    wind: "Rüzgar Durumu (km/s)",
    span: "Planlanan Açıklık (m)",
    load: "Hedef Yük (kg)",
    footing: "Gösterge Temeli",
    seismic: "Sismik Değerlendirme Bölgesi",
    area: "Planlanan Alan (m²)",
    verified: "TASARIM ZEKASI DOĞRULANDI",
    warning: "SENARYO TOLERANS UYARISI",
    interpretation: "Gösterge Parametresi Yorumu",
    deflection: "Yorumlanan Sehim",
    stress: "Tahmini Gerilme",
    windPressure: "Rüzgar Senaryo Basıncı",
    soilLoad: "Gösterge Zemin Yükü",
    mass: "Tahmini Yapısal Kütle",
    export: "Koordinasyon Özetini Dışa Aktar",
    verifyBim: "BIM Bağlantısını Doğrula",
    notice: "Not: Görüntülenen metrikler, senaryo desteği için basitleştirilmiş mühendislik mantığına dayanmaktadır. Nihai analiz sertifikalı BIM ortamlarında yürütülmelidir.",
    reportTitle: "STRUCTURA | KOORDİNASYON ÖZETİ",
    reportDisclaimer: "ÖNEMLİ NOT: Bu özet YALNIZCA koordinasyon, erken aşama karar desteği ve senaryo değerlendirmesi içindir. Sertifikalı bir yapısal analiz veya profesyonel onay belgesi DEĞİLDİR."
  },
  de: {
    missionControl: "MISSIONSKONTROLLE",
    sandbox: "Sandbox-Sitzung",
    relay: "Knoten-Relais: Betriebsbereit",
    intel: "System-Informationen",
    analysis: "Analyse",
    workflow: "Arbeitsablauf",
    compliance: "Compliance",
    terminate: "Sitzung beenden",
    protocol: "Protokoll: Schreibgeschütztes Intelligenz-Relais",
    parameters: "Szenario-Parameter",
    material: "Indikatives Material",
    height: "Nominale Höhe (m)",
    wind: "Windfall (km/h)",
    span: "Geplante Spannweite (m)",
    load: "Ziel-Last (kg)",
    footing: "Indikatives Fundament",
    seismic: "Seismische Bewertungszone",
    area: "Geplante Fläche (m²)",
    verified: "DESIGN-INTELLIGENZ VERIFIZIERT",
    warning: "SZENARIO-TOLERANZALARM",
    interpretation: "Interpretation indikativer Parameter",
    deflection: "Interpretierte Durchbiegung",
    stress: "Geschätzte Spannung",
    windPressure: "Wind-Szenariodruck",
    soilLoad: "Indikative Bodenlast",
    mass: "Geschätzte Strukturmasse",
    export: "Koordinationszusammenfassung exportieren",
    verifyBim: "BIM-Link verifizieren",
    notice: "Hinweis: Die angezeigten Kennzahlen basieren auf vereinfachter Konstruktionslogik. Die endgültige Analyse muss in zertifizierten BIM-Umgebungen erfolgen.",
    reportTitle: "STRUCTURA | KOORDINATIONSZUSAMMENFASSUNG",
    reportDisclaimer: "WICHTIGER HINWEIS: Diese Zusammenfassung dient NUR der Koordination und Szenariobewertung. Sie ist KEINE zertifizierte Strukturanalyse."
  }
};

const MATERIALS = [
  { id: 'steel', name: { en: 'Reinforced Steel', ar: 'الفولاذ المقوى', tr: 'Güçlendirilmiş Çelik', de: 'Verstärkter Stahl' }, modulus: 200, yieldStrength: 250, density: 7850 },
  { id: 'concrete', name: { en: 'C30 Concrete', ar: 'خرسانة C30', tr: 'C30 Beton', de: 'C30 Beton' }, modulus: 30, yieldStrength: 30, density: 2400 },
  { id: 'carbon', name: { en: 'Carbon Composite', ar: 'كربون مركب', tr: 'Karbon Kompozit', de: 'Kohlenstoffverbundstoff' }, modulus: 250, yieldStrength: 600, density: 1600 },
  { id: 'timber', name: { en: 'Glulam Timber', ar: 'خشب غلولام', tr: 'Lamine Ahşap', de: 'Leimholz' }, modulus: 12, yieldStrength: 24, density: 600 }
];

const SEISMIC_ZONES = [
  { level: '1', label: { en: 'Stable', ar: 'مستقر', tr: 'Stabil', de: 'Stabil' }, multiplier: 1.0 },
  { level: '2', label: { en: 'Moderate', ar: 'متوسط', tr: 'Orta', de: 'Moderat' }, multiplier: 1.25 },
  { level: '3', label: { en: 'High Risk', ar: 'عالي المخاطر', tr: 'Yüksek Risk', de: 'Hohes Risiko' }, multiplier: 1.6 },
  { level: '4', label: { en: 'Critical', ar: 'حرج', tr: 'Kritik', de: 'Kritisch' }, multiplier: 2.1 }
];

const PlatformDashboard: React.FC<PlatformDashboardProps> = ({ onBack, lang: globalLang = 'en' }) => {
  const [lang, setInternalLang] = useState<Language>(globalLang);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState<'selection' | 'login'>('selection');
  const [userType, setUserType] = useState<'guest' | 'professional' | null>(null);
  const [activeTool, setActiveTool] = useState<'intel' | 'calc' | 'workflow' | 'audit'>('intel');
  const [isSyncing, setIsSyncing] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const t = TRANSLATIONS[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
     setLogs([
        `[SYSTEM] Structura Intelligence Interface Initialized.`,
        `[LANG] Active locale: ${lang.toUpperCase()}`
     ]);
  }, [lang]);

  // Analysis Parameters
  const [params, setParams] = useState({
    span: 12.5,
    load: 4500,
    material: 'steel',
    depth: 450, 
    width: 200, 
    safetyFactor: 1.5,
    seismicZone: '1',
    windSpeed: 120, 
    height: 35, 
    footingArea: 4.5 
  });

  const [results, setResults] = useState({
    deflection: 0,
    stress: 0,
    windPressure: 0,
    soilPressure: 0,
    weight: 0,
    isCompliant: true
  });

  useEffect(() => {
    if (!isAuthenticated) return;
    const mat = MATERIALS.find(m => m.id === params.material)!;
    const seismic = SEISMIC_ZONES.find(z => z.level === params.seismicZone)!;

    const momentOfInertia = (params.width * Math.pow(params.depth, 3)) / 12000;
    const E = mat.modulus;
    const P = params.load;
    const L = params.span;
    let rawDeflection = (P * Math.pow(L, 3)) / (48 * E * momentOfInertia);

    const finalDeflection = (rawDeflection * params.safetyFactor * seismic.multiplier) / 100;
    const windPressureKPa = (0.5 * 1.225 * Math.pow(params.windSpeed / 3.6, 2) * 1.2 * (1 + params.height/100)) / 1000;
    const areaSqM = (params.width / 1000) * (params.depth / 1000) * 0.8;
    const stressMPa = (params.load * 9.81) / (areaSqM * 1000000);
    const soilPressureKPa = (params.load * 9.81) / (params.footingArea * 1000);
    const weightKg = areaSqM * params.span * mat.density;

    setResults({
      deflection: parseFloat(finalDeflection.toFixed(3)),
      stress: parseFloat(stressMPa.toFixed(2)),
      windPressure: parseFloat(windPressureKPa.toFixed(2)),
      soilPressure: parseFloat(soilPressureKPa.toFixed(2)),
      weight: Math.round(weightKg),
      isCompliant: finalDeflection < 5.0 && stressMPa < mat.yieldStrength
    });
  }, [params, isAuthenticated]);

  const addLog = (msg: string) => {
    setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev].slice(0, 5));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setUserType('professional');
      setIsAuthenticated(true);
      setIsLoggingIn(false);
      addLog("Node Entry Verified: " + credentials.email);
    }, 1500);
  };

  const handleGuestAccess = () => {
    setIsLoggingIn(true);
    setTimeout(() => {
      setUserType('guest');
      setIsAuthenticated(true);
      setIsLoggingIn(false);
      addLog("Scenario Evaluation Sandbox Initialized.");
    }, 1000);
  };

  const exportReport = () => {
    const reportId = Math.random().toString(36).substr(2, 9).toUpperCase();
    const content = `
============================================================
      ${t.reportTitle}
============================================================
ID: ${reportId}
USER: ${userType?.toUpperCase()}
DATE: ${new Date().toLocaleString()}
------------------------------------------------------------

1. ${t.parameters}
- ${t.material}: ${MATERIALS.find(m => m.id === params.material)?.name[lang]}
- ${t.height}: ${params.height}m
- ${t.wind}: ${params.windSpeed} km/h
- ${t.seismic}: ${params.seismicZone}

2. ${t.interpretation}
- ${t.stress}: ${results.stress} MPa
- ${t.deflection}: ${results.deflection} mm
- ${t.mass}: ${results.weight.toLocaleString()} kg
- ${t.soilLoad}: ${results.soilPressure} kPa

${t.reportDisclaimer}
============================================================
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Structura_Summary_${reportId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    addLog(`Dossier ${reportId} Exported.`);
  };

  if (!isAuthenticated) {
    return (
      <div className={`fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center p-6 overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="absolute inset-0 bg-grid-wallpaper opacity-10 pointer-events-none"></div>
        <div className="w-full max-w-md relative z-10 animate-fade-in-up">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center transform rotate-45 mx-auto mb-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <div className="w-8 h-8 bg-zinc-950 transform -rotate-45"></div>
            </div>
            <h1 className="text-3xl md:text-5xl font-architectural font-bold text-white tracking-tighter uppercase mb-4 leading-none">
              {t.missionControl}
            </h1>
            <p className="text-zinc-500 font-architectural text-[9px] uppercase tracking-[0.4em]">v2.5.0 Intelligence Relay</p>
          </div>

          <div className="space-y-6">
            {authMode === 'selection' ? (
              <>
                <button onClick={() => setAuthMode('login')} className="w-full bg-white text-zinc-950 py-6 font-architectural font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-amber-600 hover:text-white transition-all shadow-xl">
                  {lang === 'en' ? 'Professional Entry' : lang === 'ar' ? 'دخول الخبراء' : lang === 'tr' ? 'Profesyonel Giriş' : 'Professioneller Zugang'}
                </button>
                <button onClick={handleGuestAccess} className="w-full border border-white/10 text-zinc-400 py-6 font-architectural font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-white/5 transition-all">
                  {lang === 'en' ? 'Guest Sandbox' : lang === 'ar' ? 'بيئة الاختبار' : lang === 'tr' ? 'Misafir Alanı' : 'Gast-Sandbox'}
                </button>
              </>
            ) : (
              <form onSubmit={handleLogin} className="space-y-6">
                <input required type="email" value={credentials.email} onChange={(e) => setCredentials({...credentials, email: e.target.value})} className="w-full bg-zinc-900 border border-zinc-800 py-4 px-6 text-white focus:outline-none focus:border-amber-600" placeholder="ID" />
                <input required type="password" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})} className="w-full bg-zinc-900 border border-zinc-800 py-4 px-6 text-white focus:outline-none focus:border-amber-600" placeholder="KEY" />
                <button type="submit" className="w-full bg-amber-600 text-white py-6 font-architectural font-bold uppercase tracking-[0.3em] text-[11px]">{lang === 'en' ? 'Initialize' : lang === 'ar' ? 'تهيئة الجلسة' : lang === 'tr' ? 'Başlat' : 'Initialisieren'}</button>
                <button type="button" onClick={() => setAuthMode('selection')} className="w-full text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{lang === 'en' ? 'Back' : lang === 'ar' ? 'رجوع' : lang === 'tr' ? 'Geri' : 'Zurück'}</button>
              </form>
            )}
            <div className="pt-10 flex justify-center space-x-6 rtl:space-x-reverse">
              {(['en', 'ar', 'tr', 'de'] as Language[]).map(l => (
                <button key={l} onClick={() => setInternalLang(l)} className={`text-[10px] font-bold uppercase tracking-widest ${lang === l ? 'text-amber-500' : 'text-zinc-700'}`}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-zinc-950 text-zinc-300 pt-32 pb-24 font-inter selection:bg-amber-600 selection:text-white ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10">
          <div>
            <div className={`flex items-center space-x-3 mb-4 ${isRTL ? 'space-x-reverse' : ''}`}>
              <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded-sm tracking-widest ${userType === 'professional' ? 'bg-amber-600 text-white' : 'bg-zinc-800 text-zinc-400'}`}>
                {t.sandbox}
              </span>
              <span className="text-zinc-600 font-mono text-[9px] tracking-widest uppercase">{t.relay}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-architectural font-bold text-white tracking-tighter uppercase leading-none">
              {t.missionControl}
            </h1>
          </div>
          
          <div className="flex flex-wrap bg-zinc-900/50 border border-white/5 p-1 rounded-sm">
            {[
              { id: 'intel', label: t.intel },
              { id: 'calc', label: t.analysis },
              { id: 'workflow', label: t.workflow },
              { id: 'audit', label: t.compliance }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTool(tab.id as any)}
                className={`px-8 py-4 text-[10px] font-architectural font-bold uppercase tracking-[0.2em] transition-all ${
                  activeTool === tab.id ? 'bg-amber-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {activeTool === 'intel' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 animate-fade-in-up">
            <div className="lg:col-span-12">
               <div className="p-12 bg-zinc-900 border border-white/5 relative overflow-hidden">
                  <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-32 h-32 border-t border-amber-500/10 ${isRTL ? 'border-l' : 'border-r'}`}></div>
                  <h3 className="text-3xl font-architectural font-bold text-white uppercase tracking-tighter mb-8 leading-none">
                    {lang === 'en' ? 'Intelligence Architecture' : lang === 'ar' ? 'هندسة المعلومات' : lang === 'tr' ? 'İstihbarat Mimarisi' : 'Intelligenz-Architektur'}
                  </h3>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed mb-10 max-w-4xl">
                    {t.notice}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                      { h: t.intel, p: "STRUCTURA v2.5.0" },
                      { h: t.analysis, p: t.interpretation },
                      { h: t.relay, p: t.protocol }
                    ].map((box, i) => (
                      <div key={i} className="bg-black/40 p-6 border border-white/5">
                        <h4 className="text-amber-500 font-bold text-[10px] uppercase mb-2">{box.h}</h4>
                        <p className="text-zinc-500 text-xs">{box.p}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        )}

        {activeTool === 'calc' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in-up">
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-zinc-900/40 border border-white/5 p-8">
                <h3 className="text-white font-architectural font-bold text-[10px] uppercase tracking-widest mb-10 border-b border-white/5 pb-4">{t.parameters}</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-[9px] text-zinc-600 uppercase tracking-widest block mb-2 font-bold">{t.material}</label>
                    <select 
                      value={params.material}
                      onChange={(e) => setParams({...params, material: e.target.value})}
                      className="w-full bg-black border border-zinc-800 py-3 px-4 text-white focus:outline-none focus:border-amber-600 text-[10px] uppercase tracking-widest"
                    >
                      {MATERIALS.map(m => <option key={m.id} value={m.id}>{m.name[lang]}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] text-zinc-600 uppercase tracking-widest block mb-2 font-bold">{t.height}</label>
                      <input type="number" value={params.height} onChange={(e) => setParams({...params, height: parseFloat(e.target.value) || 0})} className="w-full bg-black border border-zinc-800 py-3 px-4 text-white font-mono text-sm" />
                    </div>
                    <div>
                      <label className="text-[9px] text-zinc-600 uppercase tracking-widest block mb-2 font-bold">{t.wind}</label>
                      <input type="number" value={params.windSpeed} onChange={(e) => setParams({...params, windSpeed: parseFloat(e.target.value) || 0})} className="w-full bg-black border border-zinc-800 py-3 px-4 text-white font-mono text-sm" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] text-zinc-600 uppercase tracking-widest block mb-2 font-bold">{t.span}</label>
                      <input type="number" step="0.1" value={params.span} onChange={(e) => setParams({...params, span: parseFloat(e.target.value) || 0})} className="w-full bg-black border border-zinc-800 py-3 px-4 text-white font-mono text-sm" />
                    </div>
                    <div>
                      <label className="text-[9px] text-zinc-600 uppercase tracking-widest block mb-2 font-bold">{t.load}</label>
                      <input type="number" value={params.load} onChange={(e) => setParams({...params, load: parseFloat(e.target.value) || 0})} className="w-full bg-black border border-zinc-800 py-3 px-4 text-white font-mono text-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className={`p-10 border transition-all duration-700 ${results.isCompliant ? 'border-amber-600/20 bg-amber-600/5' : 'border-red-600/20 bg-red-600/10'}`}>
                 <div className="flex justify-between items-start mb-10">
                   <div>
                     <span className={`text-[10px] uppercase font-bold tracking-[0.3em] mb-2 block ${results.isCompliant ? 'text-emerald-500' : 'text-red-500'}`}>
                       {results.isCompliant ? t.verified : t.warning}
                     </span>
                     <p className="text-zinc-600 text-[9px] uppercase tracking-widest font-mono">{t.interpretation}</p>
                   </div>
                   <div className={`w-3 h-3 rounded-full ${results.isCompliant ? 'bg-emerald-500' : 'bg-red-500 animate-pulse'}`}></div>
                 </div>
                 <div className="grid grid-cols-2 gap-10">
                   <div>
                      <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-widest block mb-2">{t.deflection}</span>
                      <div className={`flex items-baseline space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                         <span className="text-5xl text-white font-mono tracking-tighter">{results.deflection}</span>
                         <span className="text-xs text-zinc-600 font-mono uppercase">mm</span>
                      </div>
                   </div>
                   <div>
                      <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-widest block mb-2">{t.stress}</span>
                      <div className={`flex items-baseline space-x-2 ${isRTL ? 'space-x-reverse' : ''}`}>
                         <span className="text-5xl text-white font-mono tracking-tighter">{results.stress}</span>
                         <span className="text-xs text-zinc-600 font-mono uppercase">MPa</span>
                      </div>
                   </div>
                 </div>
                 <div className="mt-12 space-y-6 pt-10 border-t border-white/5">
                    <div className="flex justify-between items-center">
                       <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-[0.2em]">{t.windPressure}</span>
                       <span className="text-xs text-amber-500 font-mono">{results.windPressure} kPa</span>
                    </div>
                    <div className="w-full h-[1px] bg-zinc-800">
                      <div className={`h-full bg-amber-500 transition-all duration-1000 ${isRTL ? 'float-right' : ''}`} style={{ width: `${Math.min(results.windPressure * 5, 100)}%` }}></div>
                    </div>
                 </div>
              </div>
              <div className="font-mono text-[9px] space-y-2 opacity-40 px-6 py-4 bg-zinc-900/50 text-left rtl:text-right">
                {logs.map((log, i) => <div key={i} className={`flex space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}><span className="text-zinc-700">|</span>{log}</div>)}
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col space-y-4">
               <button 
                 onClick={exportReport} 
                 className="flex-1 bg-white hover:bg-amber-600 text-zinc-950 hover:text-white p-12 font-architectural font-bold uppercase tracking-[0.4em] text-[10px] transition-all flex flex-col items-center justify-center space-y-8"
               >
                 <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                 <span className="text-center">{t.export}</span>
               </button>
            </div>
          </div>
        )}
        {(activeTool === 'workflow' || activeTool === 'audit') && (
            <div className="p-24 text-center border border-white/5 bg-zinc-900/40">
                <span className="text-zinc-600 font-architectural uppercase tracking-widest text-xs">
                    {lang === 'en' ? 'BIM OBSERVATION MODULE ACTIVE' : lang === 'ar' ? 'وحدة مراقبة BIM نشطة' : lang === 'tr' ? 'BIM GÖZLEM MODÜLÜ AKTİF' : 'BIM-BEOBACHTUNGSMODUL AKTIV'}
                </span>
            </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black/98 backdrop-blur-2xl border-t border-white/5 px-8 py-6 flex flex-col md:flex-row justify-between items-center z-[100] gap-4">
        <div className={`flex space-x-12 ${isRTL ? 'space-x-reverse' : ''}`}>
           <div className={`flex items-center space-x-3 ${isRTL ? 'space-x-reverse' : ''}`}>
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
             <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{t.protocol}</span>
           </div>
        </div>

        <div className={`flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
           <div className={`flex space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
             {(['en', 'ar', 'tr', 'de'] as Language[]).map(l => (
               <button key={l} onClick={() => setInternalLang(l)} className={`text-[9px] font-bold uppercase tracking-widest ${lang === l ? 'text-amber-500 underline' : 'text-zinc-500 hover:text-white'}`}>{l}</button>
             ))}
           </div>
           <button onClick={onBack} className="text-[10px] font-architectural font-bold uppercase tracking-[0.4em] text-amber-500 hover:text-white transition-all px-10 py-3 border border-amber-500/20 hover:bg-amber-500/10">
             {t.terminate}
           </button>
        </div>
      </div>
    </div>
  );
};

export default PlatformDashboard;
