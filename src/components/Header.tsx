import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">ГрузЭкспресс</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('geography')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              География
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Калькулятор
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              О компании
            </button>
            <button 
              onClick={() => scrollToSection('reviews')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Отзывы
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('tracking')}
              className="text-slate-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
            >
              <Icon name="Search" size={18} />
              <span>Отследить груз</span>
            </button>
            <Button 
              onClick={() => scrollToSection('order-form')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Заказать перевозку
            </Button>
          </div>
          
          <button className="md:hidden">
            <Icon name="Menu" size={24} className="text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;