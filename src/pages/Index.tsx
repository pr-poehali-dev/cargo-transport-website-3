import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromCity: '',
    toCity: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    description: ''
  });

  const [trackingNumber, setTrackingNumber] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
  };

  const handleTracking = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber) {
      alert(`Отслеживание груза №${trackingNumber}: Груз в пути, ожидаемое прибытие через 2 дня.`);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}img/20c89e6a-205c-43bd-a551-85cb650d16aa.jpg)`,
            opacity: 0.3
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Надежные грузоперевозки <br />
            <span className="text-blue-300">по всей России</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Доставляем грузы быстро, безопасно и по выгодным ценам
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Заказать перевозку
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4"
              onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-slate-600">Полный спектр логистических решений для вашего бизнеса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Package" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Сборные грузы</h3>
                <p className="text-slate-600">Экономичная доставка небольших партий товаров по всей России</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Truck" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Габаритные грузы</h3>
                <p className="text-slate-600">Перевозка крупногабаритных и тяжелых грузов специальным транспортом</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Zap" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Экспресс-доставка</h3>
                <p className="text-slate-600">Срочная доставка грузов в кратчайшие сроки по всей стране</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Geography Section */}
      <section id="geography" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">География доставки</h2>
            <p className="text-xl text-slate-600">Работаем по всей территории Российской Федерации</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <span className="font-semibold">Москва</span>
            </div>
            <div className="p-4">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <span className="font-semibold">Санкт-Петербург</span>
            </div>
            <div className="p-4">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <span className="font-semibold">Новосибирск</span>
            </div>
            <div className="p-4">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <span className="font-semibold">Екатеринбург</span>
            </div>
            <div className="p-4">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <span className="font-semibold">Казань</span>
            </div>
            <div className="p-4">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <span className="font-semibold">Нижний Новгород</span>
            </div>
            <div className="p-4">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <span className="font-semibold">Челябинск</span>
            </div>
            <div className="p-4">
              <Icon name="MapPin" className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <span className="font-semibold">+500 городов</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-slate-600">Рассчитайте примерную стоимость перевозки</p>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="calc-from">Откуда</Label>
                  <Input id="calc-from" placeholder="Город отправления" />
                </div>
                <div>
                  <Label htmlFor="calc-to">Куда</Label>
                  <Input id="calc-to" placeholder="Город назначения" />
                </div>
                <div>
                  <Label htmlFor="calc-weight">Вес (кг)</Label>
                  <Input id="calc-weight" type="number" placeholder="100" />
                </div>
                <div>
                  <Label htmlFor="calc-volume">Объём (м³)</Label>
                  <Input id="calc-volume" type="number" placeholder="1.5" />
                </div>
              </div>
              <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" size="lg">
                Рассчитать стоимость
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order-form" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Заказать перевозку</h2>
            <p className="text-xl text-slate-600">Оставьте заявку и мы свяжемся с вами в течение 15 минут</p>
          </div>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ваше имя" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (___) ___-__-__" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="cargoType">Тип груза</Label>
                    <Input 
                      id="cargoType" 
                      name="cargoType"
                      value={formData.cargoType}
                      onChange={handleInputChange}
                      placeholder="Мебель, оборудование..." 
                    />
                  </div>
                  <div>
                    <Label htmlFor="fromCity">Откуда *</Label>
                    <Input 
                      id="fromCity" 
                      name="fromCity"
                      value={formData.fromCity}
                      onChange={handleInputChange}
                      placeholder="Город отправления" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="toCity">Куда *</Label>
                    <Input 
                      id="toCity" 
                      name="toCity"
                      value={formData.toCity}
                      onChange={handleInputChange}
                      placeholder="Город назначения" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Вес (кг)</Label>
                    <Input 
                      id="weight" 
                      name="weight"
                      type="number"
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder="100" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="dimensions">Габариты (ДхШхВ, см)</Label>
                    <Input 
                      id="dimensions" 
                      name="dimensions"
                      value={formData.dimensions}
                      onChange={handleInputChange}
                      placeholder="100x50x30" 
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="description">Дополнительная информация</Label>
                  <Textarea 
                    id="description" 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Особенности груза, пожелания по доставке..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tracking Section */}
      <section id="tracking" className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Отслеживание груза</h2>
            <p className="text-xl text-slate-600">Узнайте где находится ваш груз в режиме реального времени</p>
          </div>
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleTracking} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    placeholder="Введите номер накладной"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="Search" className="mr-2" size={20} />
                  Отследить
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">О компании</h2>
            <p className="text-xl text-slate-600">ГрузЭкспресс - ваш надежный партнер в мире логистики</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-xl font-semibold mb-2">лет на рынке</div>
              <p className="text-slate-600">Успешно работаем и развиваемся</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50 000+</div>
              <div className="text-xl font-semibold mb-2">довольных клиентов</div>
              <p className="text-slate-600">Нам доверяют по всей России</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99.8%</div>
              <div className="text-xl font-semibold mb-2">грузов доставлено в срок</div>
              <p className="text-slate-600">Высокое качество сервиса</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-slate-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Отличный сервис! Груз доставили точно в срок, все в целости и сохранности. 
                  Менеджер постоянно держал в курсе статуса доставки."
                </p>
                <div className="font-semibold">Михаил К.</div>
                <div className="text-sm text-slate-500">ООО "Стройматериалы"</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Пользуемся услугами ГрузЭкспресс уже 3 года. Всегда качественно и в срок. 
                  Цены адекватные, персонал вежливый."
                </p>
                <div className="font-semibold">Елена В.</div>
                <div className="text-sm text-slate-500">ИП Волкова</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Icon key={star} name="Star" className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-4">
                  "Нужно было срочно доставить оборудование из Москвы в Новосибирск. 
                  Справились за 2 дня! Рекомендую!"
                </p>
                <div className="font-semibold">Александр П.</div>
                <div className="text-sm text-slate-500">Директор завода</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Контакты</h2>
            <p className="text-xl text-slate-600">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardContent className="p-6">
                <Icon name="Phone" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Телефон</h3>
                <p className="text-slate-600">+7 (800) 555-0123</p>
                <p className="text-sm text-slate-500">Звонок по России бесплатный</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="Mail" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-slate-600">info@gruzexpress.ru</p>
                <p className="text-sm text-slate-500">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Icon name="MapPin" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Адрес</h3>
                <p className="text-slate-600">Москва, ул. Транспортная, 15</p>
                <p className="text-sm text-slate-500">Ежедневно с 8:00 до 20:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;