import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  CalendarCheck, 
  CreditCard, 
  MapPin, 
  Info, 
  ChevronRight,
  Menu,
  X,
  Download,
  Bell,
  Wallet,
  Trophy,
  Activity,
  Edit2,
  Home,
  Lock,
  User,
  Swords
} from 'lucide-react';

// --- Данные о кортах для модального окна ---
const courtsData = [
  {
    id: 'olimp1',
    title: 'Олимп 1',
    shortDesc: 'Открытые корты с качественным грунтовым покрытием. Отлично подходят для игры на свежем воздухе.',
    fullDesc: 'Открытые корты с классическим грунтовым покрытием. Идеальный выбор для игры в теплое время года на свежем воздухе. Качественный грунт обеспечивает комфортную игру, правильное скольжение и идеальный отскок мяча.',
    image: 'https://images.unsplash.com/photo-1530915534664-4ac6423816b7?auto=format&fit=crop&q=80',
    tags: ['Открытый', 'Грунт', 'Свежий воздух', 'Парковка']
  },
  {
    id: 'olimp2',
    title: 'Олимп 2',
    shortDesc: 'Дополнительные открытые грунтовые корты комплекса Олимп.',
    fullDesc: 'Живописные открытые грунтовые корты, оснащенные всем необходимым для комфортной летней игры. Отлично подходят для парных игр, турниров на свежем воздухе и регулярных тренировок.',
    image: 'https://images.unsplash.com/photo-1622279457486-62d74eca181f?auto=format&fit=crop&q=80',
    tags: ['Открытый', 'Грунт', 'Зона отдыха', 'Летний сезон']
  },
  {
    id: 'tarkhanovo',
    title: 'Тарханово',
    shortDesc: 'Современные крытые корты. Доступны для игры круглый год в любую погоду.',
    fullDesc: 'Современный крытый комплекс. Идеальное освещение, комфортная температура и отличная акустика. Подходит как для регулярных тренировок зимой и летом, так и для проведения турниров независимо от погодных условий.',
    image: 'https://images.unsplash.com/photo-1595436065982-89f1d1490212?auto=format&fit=crop&q=80',
    tags: ['Крытый', 'Круглый год', 'Раздевалки', 'Освещение']
  }
];

// --- Компоненты кнопок App Store / RuStore ---
const AppStoreButton = ({ className = "" }) => (
  <a href="https://apps.apple.com/us/app/теннисный-центр-дружба/id6766533760" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-3 bg-black text-white border border-gray-800 hover:bg-gray-900 rounded-xl px-5 py-2.5 transition-all duration-300 shadow-md hover:shadow-lg w-[180px] sm:w-[200px] ${className}`}>
    <svg viewBox="0 0 384 512" className="w-7 h-7" fill="currentColor">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.8 90.4-82.5 102.8-125.1-48.4-25.3-62.1-66.2-61.9-85.5zM201.2 87.1c23.9-31.5 16-65.4 13.9-74.1-23.7 2.5-56.1 18.2-76 39.8-16.7 17.4-29.5 44.8-24.8 70.9 26.6 2 52.3-12.7 86.9-36.6z"/>
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[10px] leading-tight text-gray-300">Загрузите в</span>
      <span className="text-base font-semibold leading-tight tracking-tight">App Store</span>
    </div>
  </a>
);

const RuStoreButton = ({ className = "" }) => (
  <a href="https://www.rustore.ru/catalog/app/io.fitbase.druzhba" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-3 bg-black text-white border border-gray-800 hover:bg-gray-900 rounded-xl px-5 py-2.5 transition-all duration-300 shadow-md hover:shadow-lg w-[180px] sm:w-[200px] ${className}`}>
    <img 
      src="https://cdn.icon-icons.com/icons2/3914/PNG/512/rustore_logo_icon_248749.png" 
      alt="RuStore Logo" 
      className="w-7 h-7 object-contain" 
      onError={(e) => { e.target.onerror = null; e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/RuStore_logo.svg/512px-RuStore_logo.svg.png' }}
    />
    <div className="flex flex-col text-left">
      <span className="text-[10px] leading-tight text-gray-300">Доступно в</span>
      <span className="text-base font-semibold leading-tight tracking-tight">RuStore</span>
    </div>
  </a>
);

// --- Компонент Мокапа Приложения (по скриншоту) ---
const AppMockup = () => (
  <div className="relative w-[300px] h-[620px] bg-[#F7F7F7] rounded-[3rem] border-[10px] border-gray-200 shadow-2xl overflow-hidden font-sans group">
    {/* Dynamic Island с фиолетовой точкой */}
    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30 pointer-events-none flex items-center justify-end px-3">
      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_5px_#a855f7]"></div>
    </div>
    
    {/* Контейнер БЕЗ скролла */}
    <div className="absolute inset-0 overflow-hidden pb-24">
      <div className="flex flex-col pt-12 pb-8">
        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-4">
          <div className="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-gray-200" />
            <span className="font-bold text-lg text-black">Привет, Степан</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Bell className="w-5 h-5 text-gray-400 fill-current" />
          </div>
        </div>

        {/* Мой счет */}
        <div className="px-5 mb-5">
          <div className="bg-white rounded-2xl p-4 shadow-sm w-[120px]">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
              <Wallet className="w-5 h-5 text-gray-700" />
            </div>
            <p className="text-xs text-gray-500 mb-1 font-medium">Мой счет</p>
            <p className="text-lg font-bold text-black">0 ₽</p>
          </div>
        </div>

        {/* Баннер турнира */}
        <div className="px-5 mb-6">
          <div className="relative w-full h-44 rounded-2xl overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1560012057-4372e14c5085?auto=format&fit=crop&w=600&q=80" alt="Tennis Tournament" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <h3 className="text-white font-bold text-[15px] leading-tight max-w-[200px]">
                Положение расписание<br/>Турнир-шоу «Олимп против...»
              </h3>
              
              <div className="flex items-end justify-between w-full">
                <button className="bg-white text-black text-xs font-bold px-4 py-2 rounded-full">
                  Подробнее
                </button>
                <div className="flex items-center gap-3 text-white">
                  <Trophy className="w-5 h-5" />
                  <div className="w-[1px] h-5 bg-white/40"></div>
                  <Swords className="w-5 h-5" />
                  <div className="w-[1px] h-5 bg-white/40"></div>
                  <Activity className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
          {/* Пагинация точек */}
          <div className="flex justify-center gap-1.5 mt-3">
            <div className="w-4 h-1.5 bg-black rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Меню */}
        <div className="px-5 mb-6">
          <h3 className="text-xl font-bold text-black mb-3">Меню</h3>
          <div className="bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <Edit2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-sm text-black">Мои записи</span>
            </div>
            <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full">
              <ChevronRight className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Мои покупки */}
        <div className="px-5">
          <h3 className="text-xl font-bold text-black mb-4">Мои покупки</h3>
          <div className="flex gap-2 mb-4">
            <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold">Услуги</button>
          </div>
          
          <div className="flex flex-col gap-3">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start justify-between">
              <span className="font-bold text-base text-black pt-1">Занятие 60 минут</span>
              <span className="bg-[#4ADE80] text-white text-xs font-bold px-3 py-1.5 rounded-full">Активный</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Navigation */}
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 pt-3 pb-6 flex justify-between z-20 pointer-events-none">
      <div className="flex flex-col items-center gap-1">
        <Home className="w-6 h-6 text-gray-800 fill-current" />
        <span className="text-[9px] font-medium text-gray-800">Главная</span>
      </div>
      <div className="flex flex-col items-center gap-1 opacity-40">
        <Lock className="w-6 h-6 text-gray-500 fill-current" />
        <span className="text-[9px] font-medium text-gray-500">Оплата</span>
      </div>
      <div className="flex flex-col items-center gap-1 opacity-40">
        <Trophy className="w-6 h-6 text-gray-500 fill-current" />
        <span className="text-[9px] font-medium text-gray-500">Корты (бронь)</span>
      </div>
      <div className="flex flex-col items-center gap-1 opacity-40">
        <User className="w-6 h-6 text-gray-500 fill-current" />
        <span className="text-[9px] font-medium text-gray-500">Профиль</span>
      </div>
    </div>
  </div>
);

// --- Основной компонент приложения ---
export default function App() {
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Блокировка скролла при открытых модальных окнах и мобильном меню
  useEffect(() => {
    if (selectedCourt || isOfferOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedCourt, isOfferOpen, isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-green-500 selection:text-white relative">
      
      {/* 1. HERO СЕКЦИЯ */}
      <header className="relative w-full h-[100svh] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595436065982-89f1d1490212?auto=format&fit=crop&q=80" 
            alt="Теннисный корт" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-gray-50"></div>
        </div>

        <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 w-full max-w-7xl mx-auto mt-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm mx-4 md:mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
              <div className="w-5 h-[2px] bg-white rounded-sm"></div>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900">Дружба</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#about" className="hover:text-green-600 transition-colors">О центре</a>
            <a href="#locations" className="hover:text-green-600 transition-colors">Корты</a>
            <a href="#app" className="hover:text-green-600 transition-colors">Приложение</a>
          </div>
          <button className="md:hidden text-gray-900 hover:text-green-600 transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
        </nav>

        {/* Мобильное Бургер Меню */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-white animate-in fade-in slide-in-from-top-4 duration-200 md:hidden pt-4 px-4 pb-8">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 p-2 bg-gray-100 rounded-full">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 px-4">
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-gray-900">О центре</a>
              <a href="#locations" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-gray-900">Корты</a>
              <a href="#app" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-gray-900">Приложение</a>
              <a href="#map" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-gray-900">Контакты</a>
            </div>
            <div className="mt-auto border-t border-gray-100 pt-8 px-4 flex flex-col gap-2">
              <span className="text-sm text-gray-500">Бронирование кортов</span>
              <a href="tel:+79278836959" className="text-green-600 font-bold text-2xl">+7 927 883-69-59</a>
              <span className="text-sm text-gray-500 mt-2">Ежедневно 06:00 – 00:00</span>
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 flex-1 w-full max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-200 text-xs font-semibold text-green-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Бронирование открыто
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-tight">
            Теннисный центр <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">Дружба</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 font-medium">
            Бронирование кортов за 30 секунд. Играйте в любое время без звонков, ожиданий и очередей.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <a href="#app" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              <Download className="w-5 h-5" />
              Скачать приложение
            </a>
            <a href="#locations" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-sm">
              Посмотреть корты
            </a>
          </div>
        </div>
      </header>

      {/* 2. О ЦЕНТРЕ */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">Больше, чем просто корты</h2>
          <p className="text-gray-600 text-lg">
            Теннисный центр "Дружба" - это современный центр для любителей и профессионалов. Несколько крытых кортов с качественным освещением, раздевалки с душем, зона отдыха. Тренеры для взрослых и детей.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Smartphone, title: "Онлайн бронирование", desc: "Никаких звонков администратору. Выбирайте свободное время и бронируйте корт в 2 клика." },
            { icon: CalendarCheck, title: "Реальное наличие", desc: "Сетка расписания обновляется в реальном времени. Вы всегда видите актуальную загруженность." },
            { icon: CreditCard, title: "Быстрая оплата", desc: "Привяжите карту один раз и оплачивайте аренду мгновенно через приложение." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl hover:border-green-200 transition-all duration-300 group">
              <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-50 group-hover:text-green-600 transition-colors text-gray-700">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ЛОКАЦИИ */}
      <section id="locations" className="py-24 px-6 md:px-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-gray-900 text-center md:text-left">Наши корты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courtsData.map((court) => (
              <div key={court.id} className="flex flex-col bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 relative bg-gray-100 overflow-hidden flex items-center justify-center group cursor-pointer" onClick={() => setSelectedCourt(court)}>
                  <img src={court.image} alt={court.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center z-10 shadow-md">
                    <MapPin className="text-green-600 w-6 h-6" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{court.title}</h3>
                  <p className="text-gray-600 mb-6 flex-1">{court.shortDesc}</p>
                  <button 
                    onClick={() => setSelectedCourt(court)}
                    className="flex items-center justify-center gap-2 w-full bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 py-3 rounded-xl font-medium transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно Кортов */}
      {selectedCourt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={() => setSelectedCourt(null)}>
          <div className="bg-white w-full max-w-2xl rounded-[2rem] overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedCourt(null)} className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/60 backdrop-blur-md text-white p-2 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
            <div className="h-64 sm:h-80 w-full relative">
              <img src={selectedCourt.image} alt={selectedCourt.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 sm:left-8 text-3xl sm:text-4xl font-bold text-white">{selectedCourt.title}</h3>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCourt.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">{selectedCourt.fullDesc}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#app" onClick={() => setSelectedCourt(null)} className="flex-1 bg-green-500 hover:bg-green-600 text-white text-center py-4 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-green-500/30">
                  Скачать приложение
                </a>
                <button onClick={() => setSelectedCourt(null)} className="sm:w-1/3 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 py-4 rounded-xl font-bold text-lg transition-colors">
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. МОБИЛЬНОЕ ПРИЛОЖЕНИЕ */}
      <section id="app" className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900">
              Все бронирования — <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">в одном приложении</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0">
              Забудьте о звонках администратору. Скачайте приложение, выберите удобное время и оплатите корт за несколько секунд.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <AppStoreButton />
              <RuStoreButton />
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <AppMockup />
          </div>
        </div>
      </section>

      {/* 5. КАРТА */}
      <section id="map" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">Ждем вас на кортах</h2>
          <p className="text-gray-600 text-lg">
            Две удобные локации в Йошкар-Оле. Выбирайте ближайшую и бронируйте время в приложении.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="w-full h-[400px] md:h-[500px] bg-gray-100 rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 relative">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?ll=47.875831,56.648779&z=13&pt=47.901192,56.641662,pm2gnm~47.850470,56.655896,pm2gnm" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowFullScreen={true} 
              className="absolute inset-0"
              title="Карта кортов Дружба"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="border-t border-gray-200 bg-white pt-16 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-[2px] bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">Дружба</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Современный теннисный центр. Мы делаем спорт доступнее с помощью технологий и сервиса.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3">
              <h5 className="text-gray-900 font-bold mb-2">Документы</h5>
              <button onClick={() => setIsOfferOpen(true)} className="text-left text-sm text-gray-500 hover:text-green-600 transition-colors">Публичная оферта</button>
              <a href="#privacy" className="text-sm text-gray-500 hover:text-green-600 transition-colors">Политика конфиденциальности</a>
              <a href="#rules" className="text-sm text-gray-500 hover:text-green-600 transition-colors">Правила клуба</a>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="text-gray-900 font-bold mb-2">Контакты</h5>
              <a href="mailto:ma_rab@mail.ru" className="text-sm text-gray-500 hover:text-green-600 transition-colors">ma_rab@mail.ru</a>
              <a href="tel:+79278836959" className="text-sm text-gray-500 hover:text-green-600 transition-colors">+7 (927) 883-69-59</a>
              <span className="text-sm text-gray-500">Ежедневно 06:00 – 00:00</span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">© 2026 Теннисный центр «Дружба». Все права защищены.</p>
        </div>
      </footer>

      {/* Модальное окно: ОФЕРТА */}
      {isOfferOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-gray-900/60 backdrop-blur-sm transition-opacity" onClick={() => setIsOfferOpen(false)}>
          <div className="bg-white w-full max-w-4xl h-[85vh] rounded-[2rem] shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Публичная оферта</h2>
              <button onClick={() => setIsOfferOpen(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-900 p-2 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-sm text-gray-700 leading-relaxed custom-scrollbar pb-12">
              <h3 className="font-bold text-center mb-4">ПУБЛИЧНАЯ ОФЕРТА НА ОКАЗАНИЕ УСЛУГ от 01.06.2026 г.</h3>
              <p className="mb-4 text-center">ИП Васенев Максим Валерьевич ИНН 121503295492, ОГРНИП: 326120000016244</p>
              
              <p className="mb-6">Настоящая публичная оферта (далее — «Оферта») является официальным предложением Индивидуального предпринимателя Васенев Максим Валерьевич (ИНН 121503295492, ОГРНИП 326120000016244) в адрес любого дееспособного физического лица, принявшего условия настоящей Оферты (далее — «Клиент»), заключить договор на условиях, изложенных ниже. Настоящая Оферта разработана в соответствии с положениями статей 435, 437, 438, 779–783 Гражданского кодекса Российской Федерации, Федерального закона от 07.02.1992 № 2300-1 «О защите прав потребителей», а также иного применимого законодательства Российской Федерации. Акцепт (принятие) Оферты — это совершение Клиентом действий по оплате услуг Исполнителя любым способом — означает полное и безоговорочное согласие Клиента со всеми условиями настоящей Оферты без каких-либо изъятий и/или оговорок.</p>
              
              <h4 className="font-bold mb-2">1. ОБЩИЕ ПОЛОЖЕНИЯ</h4>
              <p className="mb-2">1.1. Оферта является официальным публичным предложением, адресованным дееспособным физическим лицам, достигшим 18 лет, желающим получить услуги, оказываемые Исполнителем.</p>
              <p className="mb-2">1.1.1. Услуги, предоставляемые несовершеннолетним, приобретаются и оплачиваются их законными представителями (родителями или опекунами), которые принимают условия настоящей Оферты от имени несовершеннолетнего.</p>
              <p className="mb-2">1.2. Отношения сторон регулируются настоящей Офертой, Гражданским кодексом РФ, Законом «О защите прав потребителей», иными нормами действующего законодательства, а также локальными актами Исполнителя, не противоречащими указанным нормам.</p>
              <p className="mb-2">1.3. Исполнитель вправе вносить изменения в Оферту в любое время без предварительного уведомления. Изменения вступают в силу с момента публикации новой редакции. Настоящая редакция Оферты вступает в силу с 01.06.2026 и действует до опубликования новой редакции. Принятие Оферты (акцепт) Клиентом имеет силу простой электронной подписи в соответствии с ч. 2 ст. 434 ГК РФ.</p>
              <p className="mb-6">1.4. Договор между Клиентом и Исполнителем считается заключённым с момента поступления оплаты за Услугу на расчётный счёт или в кассу Исполнителя.</p>
              
              <h4 className="font-bold mb-2">2. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</h4>
              <p className="mb-2">2.1. «Центр» — теннисный центр «Дружба», оказывающий Услуги по настоящей Оферте.</p>
              <p className="mb-2">2.2. «Услуги» — действия, совершаемые Исполнителем в пользу Клиента, включая: групповыми и индивидуальными занятиями, мастер-классами, спецкурсами, интенсивами.</p>
              <p className="mb-2">2.3. «Абонемент» — пакет занятий с ограниченным сроком действия.</p>
              <p className="mb-2">2.4. «Клиент» — физическое лицо, оплатившее Услугу.</p>
              <p className="mb-2">2.5. «Спецкурс», «Интенсив», «Мастер-класс» — мероприятие с фиксированными датами, составом участников и программой, по которому возврат ограничен.</p>
              <p className="mb-2">2.6 «Заморозка» — временная приостановка срока действия абонемента.</p>
              <p className="mb-6">2.7 «Дата начала действия абонемента» — дата первого фактического посещения по приобретенному абонементу. До первого посещения абонемент считается неактивированным.</p>

              <h4 className="font-bold mb-2">3. ПРЕДМЕТ ДОГОВОРА</h4>
              <p className="mb-2">3.1 Исполнитель обязуется оказать Услуги, а Клиент — оплатить их в порядке и на условиях, определенных настоящей Офертой.</p>
              <p className="mb-6">3.2. Характеристика, сроки, стоимость, формат и содержание Услуг определяются в приложении «Дружба».</p>

              <h4 className="font-bold mb-2">4. УСЛОВИЯ ОКАЗАНИЯ УСЛУГ, ПРАВА И ОБЯЗАННОСТИ СТОРОН</h4>
              <p className="mb-2">4.1. Занятия проводятся согласно расписанию, в мобильном приложении «Дружба».</p>
              <p className="mb-2">4.2. Клиент обязуется самостоятельно отслеживать изменения расписания и записываться на занятия через мобильное приложение.</p>
              <p className="mb-2">4.2.1. Учёт посещений ведётся через электронную систему записи (CRM) или путём ручной фиксации тренером. Указанные данные используются в качестве подтверждения факта оказания Услуг.</p>
              <p className="mb-2">4.3. Исполнитель вправе: — вносить изменения в расписание; — переносить занятия в другие залы или филиалы при необходимости.</p>
              <p className="mb-2">4.4. Клиент соглашается, что занятия могут быть перенесены или заменены в связи с производственной необходимостью, в том числе по причине болезни преподавателя, форс-мажора или технических работ. Такие изменения могут являются основанием для возврата средств.</p>
              <p className="mb-2">4.5. В случае опоздания Клиента более чем на 15 минут преподаватель вправе не допустить его до занятия, чтобы не нарушать ход занятия. Опоздание не компенсируется.</p>
              <p className="mb-2">4.6. Клиент обязан приходить на занятия в удобной, безопасной одежде и сменной обуви, соответствующей выбранному направлению. Преподаватель вправе отказать в допуске при несоблюдении требований безопасности.</p>
              <p className="mb-2">4.7. Пропуск занятия по любой причине без своевременной отмены считается использованным.</p>
              <p className="mb-2">4.8. Отсутствие Клиента на занятии, в том числе по болезни, не является основанием для возврата или продления, если не предусмотрена заморозка.</p>
              <p className="mb-2">4.9. Исполнитель вправе удалить Клиента с занятия или запретить дальнейшее посещение в случае: — оскорбительного поведения; — нарушения техники безопасности; — неадекватного состояния (в том числе алкогольного или наркотического опьянения); — нарушения внутреннего распорядка. Такие действия не подлежат компенсации, и абонемент аннулируется без возврата.</p>
              <p className="mb-2">4.10 Клиент Центра обязан:</p>
              <p className="mb-2 ml-4">4.10.1 Самостоятельно ознакомиться и соблюдать правила техники безопасности, инструкции и рекомендации по пользованию оборудования центра.</p>
              <p className="mb-2 ml-4">4.10.2 Для возможности предоставления доступа в центр (а также в целях предоставления доступа к приложению) предоставить Исполнителю следующие персональные данные: ФИО, дата рождения, телефон, e-mail (адрес электронной почты), реквизиты банковской карты, а также предоставить Исполнителю согласие на обработку своих персональных данных (далее «ПДн»), акцептовать оферту.</p>
              <p className="mb-2 ml-4">4.10.3 Самостоятельно оценивать состояние своего здоровья и возможность посещения центра. Посещение центра сопряжено с рисками получения травм (вред жизни или здоровью), таких как ушибы, вывихи, растяжения, разрывы связок и иное, причем любой степени тяжести. При головокружении и ином ухудшении состояния здоровья Клиент центра обязан немедленно прекратить тренировку и любое пользование услугами и обратиться к врачу;</p>
              <p className="mb-2 ml-4">4.10.4 Обеспечить контроль за своим имуществом при посещении центра в целях предотвращения их кражи (хищения); при помещении имущества в персональный ящик в раздевалке закрыть его на замок, проверив надежность закрытия; не оставлять ячейку ящика открытой; не оставлять имущество без присмотра. При нарушении любого из указанных требований Исполнитель не несет ответственности за утрату имущества Клиента Центра.</p>
              <p className="mb-2 ml-4">4.10.5 В случае причинения ущерба имуществу Центра возместить причиненный ущерб на основании пункта 7.1 оферты.</p>
              <p className="mb-2">4.11. Клиент Центра имеет право:</p>
              <p className="mb-6 ml-4">4.11.1. Отказаться от своего права посещения центра, уведомив об этом Исполнителя.</p>

              <h4 className="font-bold mb-2">5. ПОРЯДОК ОПЛАТЫ</h4>
              <p className="mb-2">5.1. Оплата Услуг осуществляется 100% авансом, по QR-коду, через платёжный агрегатор (CloudPayments).</p>
              <p className="mb-2">5.2. Стоимость разовых занятий, абонементов, спецкурсов и других Услуг указывается в мобильном приложении “Дружба”.</p>
              <p className="mb-2">5.3. Срок действия абонементов: —30 дней с момента первого посещения;</p>
              <p className="mb-2">5.4. В случае истечения срока действия абонемента неиспользованные занятия аннулируются и возврат денежных средств за них не производится. Продление срока действия абонемента возможно исключительно по усмотрению Исполнителя в индивидуальном порядке, при наличии уважительных причин. Настоящее условие соответствует положениям ст. 782 ГК РФ и не противоречит Закону РФ «О защите прав потребителей».</p>
              <p className="mb-2">6.4. В случае отказа Клиента от участия в мастер-классе, спецкурсе или интенсиве: — при уведомлении за 24 часа и более до начала мероприятия, возврат денежных средств осуществляется в размере 100% от стоимости Услуги. Указанные суммы удерживаются как разумная неустойка за резервирование индивидуального места и ограничение других Клиентов в возможности участия. Данные условия соответствуют положениям ст. 781 и 782 Гражданского кодекса Российской Федерации. Возврат производится только по письменному заявлению и при предъявлении документа, удостоверяющего личность Клиента. Возврат не осуществляется по завершении мероприятия, независимо от факта участия Клиента.</p>
              <p className="mb-2">6.5. В случае оплаты банковской картой через онлайн-сервис, возврат осуществляется исключительно на ту же карту, с которой производилась оплата, в соответствии с п. 5 ст. 10 Закона РФ «О защите прав потребителей» и требованиями платёжных систем. Срок возврата — до 10 рабочих дней.</p>
              <p className="mb-6">6.6. По соглашению Сторон, вместо возврата денежных средств за неиспользованные Услуги Клиенту может быть предложена альтернатива в виде переноса услуги или зачисления стоимости в счёт будущих посещений или на депозит.</p>

              <h4 className="font-bold mb-2">7. ОТВЕТСТВЕННОСТЬ СТОРОН</h4>
              <p className="mb-2">7.1. Клиент студии несет материальную ответственность за ущерб, причиненный имуществу Центра, и обязан возместить стоимость поврежденного и/или утраченного имущества. Причинение ущерба подтверждается Актом, который подписывается Клиентом Центра и представителем Центра. В случае отказа Клиент Центра от подписания акта, Центр подписывает его в одностороннем порядке. Клиент Центра в течение 5 (Пяти) календарных дней с момента составления Акта обязан возместить причиненный ущерб в полном объеме.</p>
              <p className="mb-2">7.2. Акцептом оферты Клиент Центра подтверждает, что не имеет медицинских противопоказаний для посещения Центра и получения физкультурнооздоровительных и спортивных услуг.</p>
              <p className="mb-2">7.3. Исполнитель НЕ несет ответственности: <br/>- за вред, причиненный жизни, здоровью или имуществу Центра в результате предоставления и/или не своевременного предоставления Центра достоверных сведений о состоянии здоровья Клиента Центра; и/или при нарушении или ненадлежащем выполнении Клиентом Центра и условий оферты, Правил Центра и/или положений (регламентов) офизкультурных, физкультурно-оздоровительных мероприятиях и/или правил техники безопасности при пользовании Основными услугами, Дополнительными услугами, инструкций и рекомендаций по пользованию оборудованием, инвентарем и т.д., предупреждающих, ограничивающих и/или запрещающих табличек и надписей, размещенных в Центре или месте оказания услуг; и/или в результате умышленных действий, либо по неосторожности Клиентом Центра; <br/>- за вред, нанесенный здоровью или причиненный имуществу Центра собственными действиями и/или бездействием, и/или вовремя самостоятельных занятий, и/или причиненный действиями третьих лиц; <br/>- за утрату или повреждение личных вещей, оставленных в раздевалках или в других помещениях Центра; <br/>- за вред, связанный с ухудшением здоровья, если состояние здоровья Клиента Центра ухудшилось в результате острого заболевания; обострения травмы или хронического заболевания, собственных действий и/или бездействий Клиентом Центра, третьих лиц, не являющихся сотрудниками Центра;<br/>- за технические неудобства, вызванные проведением уполномоченными организациями сезонных профилактических, ремонтно-строительных и иных работ, а также аварийными и форс-мажорными ситуациями, возникшими не по вине Центра.</p>
              <p className="mb-6">7.4. Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по условиям оферты, если неисполнение явилось следствием обстоятельств непреодолимой силы. Сторона, чьи обязательства не могут быть исполнены вследствие наступления обстоятельств непреодолимой силы, обязана известить другую Сторону в течение 3 (трех) календарных дней с момента наступления таких событий. Наступление указанных событий должно быть подтверждено актом, выданным Торгово-промышленной палатой РФ или иным компетентным органом государственной власти.</p>

              <h4 className="font-bold mb-2">8. ПРОЧИЕ УСЛОВИЯ</h4>
              <p className="mb-2">8.1. Акцептом оферты Клиент Центра заявляет:<br/>- о своем полном и безусловном присоединении к оферте и выражении своего согласия с изложенными в ней обязательствами и правами сторон, о принятии обязательства их исполнять, включая все приложения и дополнения, о том, что их содержание ему полностью понятны;<br/>- о своем полном и безусловном согласии с тем, что Исполнитель может в одностороннем порядке и без предварительного согласования с Клиентом Центра вносить изменения в условия оферты, Правила Центра, тарифы, указанные в мобильном приложении, предварительно проинформировав Клиента Центра не менее чем за 10 (десять) календарных дней до даты вступления изменений в силу путем их размещения в приложении. Изменение условий оферты влечет автоматическое изменение условий в полном соответствии с измененными условиями оферты. Клиент Центра обязан самостоятельно отслеживать такие изменения. При этом Клиент Центра оставляет за собой право, в случае несогласия с произошедшими изменениями, расторгнуть договор в предусмотренном офертой порядке;.<br/>- являясь субъектом персональных данных (далее по тексту «Субъект ПДн»), Клиент Центра принимает решение и выражает согласие на обработку Исполнителем принадлежащих ему ПДн, отраженных выше в настоящем документе, а также полученных Центром от Субъекта ПДн, свободно, своей волей и в своем интересе. Под обработкой ПДн в соответствии с Федеральным законом от 27.07.2006 г. No152-ФЗ «О персональных данных» понимаются действия (операции) с ПДн, включая сбор, систематизацию, накопление, хранение, уточнение (обновление, изменение), использование, обезличивание. Перечень ПДн, на обработку которых дается согласие: фамилия, имя, отчество, дата рождения, номера контактных телефонов, email, изображения субъекта ПДн, полученные посредством установленных и используемых открыто в помещениях Центра технических средств фото- и/или видеофиксации...<br/>- о согласии на получение голосовых и/или СМС-сообщений, сообщений и/или иной информации по электронной почте и/или по телефону/адресу, предоставленному Центру и/или уполномоченному им лицу, о деятельности Центра, проводимых им акциях, отправляемых Центром или по его поручению третьими лицами.</p>
              <p className="mb-2">8.2. Все споры и разногласия, связанные с заключением, исполнением и прекращением согласия с офертой, Стороны решают путем переговоров. В случае, если в ходе переговоров Стороны не разрешили спорную ситуацию, заинтересованная Сторона обязана направить другой Стороне претензию, составленную в письменной форме. Претензия должна быть направлена почтой заказным письмом с уведомлением, скан-копия претензии может быть направлена на адрес электронной почты, либо через форму обратной связи на сайте Исполнителя. Срок рассмотрения претензии составляет 10 (десять) календарных дней. Претензионный порядок урегулирования споров является обязательным для Сторон. В случае недостижения согласия спор может быть передан на рассмотрение в суд по месту нахождения Исполнителя.</p>
              <p className="mb-6">8.3. Во всем остальном, что не предусмотрено условиями Офреты, Стороны руководствуются действующим законодательством Российской Федерации.</p>

              <h4 className="font-bold mb-2">9. Реквизиты Исполнителя</h4>
              <p className="mb-0"><strong>ИП Васенев Максим Валерьевич</strong></p>
              <p className="mb-0">ИНН: 121503295492</p>
              <p className="mb-0">Юридический адрес: ул. Красноармейская, д. 122а, кв. 116, г. Йошкар-Ола, респ. Марий Эл, 424019</p>
              <p className="mb-0">Электронный адрес: <a href="mailto:ma_rab@mail.ru" className="text-green-600">ma_rab@mail.ru</a></p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}