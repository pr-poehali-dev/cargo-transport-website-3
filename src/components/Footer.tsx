import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">ГрузЭкспресс</span>
            </div>
            <p className="text-slate-300">
              Надежные грузоперевозки по всей России. Быстро, безопасно, выгодно.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Перевозка сборных грузов</li>
              <li>Доставка габаритных грузов</li>
              <li>Экспресс-доставка</li>
              <li>Складские услуги</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (800) 555-0123</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@gruzexpress.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Транспортная, 15</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Работаем</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Пн-Пт: 8:00 - 20:00</li>
              <li>Сб: 9:00 - 18:00</li>
              <li>Вс: 10:00 - 16:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 ГрузЭкспресс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;