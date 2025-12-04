import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Snowmobile {
  id: number;
  name: string;
  power: string;
  capacity: string;
  price: string;
  features: string[];
  image: string;
}

const snowmobiles: Snowmobile[] = [
  {
    id: 1,
    name: 'Arctic Pro 600',
    power: '125 л.с.',
    capacity: '2 места',
    price: '5 000 ₽/час',
    features: ['Мощный двигатель', 'Подогрев рукояток', 'GPS-навигация', 'Комфортная подвеска'],
    image: 'https://cdn.poehali.dev/projects/041dcd08-726e-46ee-9e4e-34698e15e49c/files/078a7fcb-9df9-4c02-9a6d-4c080fac693b.jpg'
  },
  {
    id: 2,
    name: 'Taiga Explorer 800',
    power: '150 л.с.',
    capacity: '2 места',
    price: '7 000 ₽/час',
    features: ['Повышенная проходимость', 'Широкая гусеница', 'Электростартер', 'Багажное отделение'],
    image: 'https://cdn.poehali.dev/projects/041dcd08-726e-46ee-9e4e-34698e15e49c/files/078a7fcb-9df9-4c02-9a6d-4c080fac693b.jpg'
  },
  {
    id: 3,
    name: 'Baikal Premium 900',
    power: '180 л.с.',
    capacity: '2 места',
    price: '9 000 ₽/час',
    features: ['Максимальная мощность', 'Люкс-комплектация', 'Премиум-сиденья', 'Усиленная защита'],
    image: 'https://cdn.poehali.dev/projects/041dcd08-726e-46ee-9e4e-34698e15e49c/files/078a7fcb-9df9-4c02-9a6d-4c080fac693b.jpg'
  }
];

const reviews = [
  {
    id: 1,
    name: 'Алексей М.',
    rating: 5,
    text: 'Потрясающие эмоции! Маршруты проходят через невероятные места. Байкал с перевала — это что-то неописуемое.',
    date: 'Ноябрь 2024'
  },
  {
    id: 2,
    name: 'Екатерина П.',
    rating: 5,
    text: 'Профессиональное оборудование и опытные инструкторы. Чувствовала себя в полной безопасности. Рекомендую!',
    date: 'Декабрь 2024'
  },
  {
    id: 3,
    name: 'Дмитрий К.',
    rating: 5,
    text: 'Ездили всей семьей — впечатлений на год вперед! Тайга, горы, адреналин. Обязательно вернемся.',
    date: 'Январь 2024'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedSnowmobile, setSelectedSnowmobile] = useState<Snowmobile | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    date: '',
    duration: '',
    message: ''
  });

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setBookingForm({ name: '', phone: '', date: '', duration: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Icon name="Mountain" size={32} className="text-accent" />
              <div>
                <h1 className="text-xl font-bold text-white">Байкал Экстрим</h1>
                <p className="text-xs text-white/70">Прокат снегоходов</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white/90 hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('snowmobiles')} className="text-white/90 hover:text-accent transition-colors">Снегоходы</button>
              <button onClick={() => scrollToSection('reviews')} className="text-white/90 hover:text-accent transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-white/90 hover:text-accent transition-colors">Контакты</button>
              <Button onClick={() => scrollToSection('booking')} className="bg-accent hover:bg-accent/90 text-white">
                Забронировать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/041dcd08-726e-46ee-9e4e-34698e15e49c/files/317c2f06-15f9-476a-95f4-cdb8ca1eed31.jpg" 
            alt="Байкал" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/70" />
        </div>
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Покорите Байкал<br />на снегоходе
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Тайга, перевалы, панорамы Байкала.<br />Незабываемые эмоции и экстрим высочайшего уровня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('snowmobiles')} size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6">
              <Icon name="Snowflake" size={20} className="mr-2" />
              Выбрать снегоход
            </Button>
            <Button onClick={() => scrollToSection('booking')} size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
              <Icon name="Calendar" size={20} className="mr-2" />
              Забронировать
            </Button>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-scale-in hover:shadow-xl transition-shadow">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-accent mb-4" />
                <CardTitle>Безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Современное оборудование, профессиональные инструкторы и полное страхование</p>
              </CardContent>
            </Card>
            <Card className="animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="MapPin" size={48} className="text-accent mb-4" />
                <CardTitle>Живые маршруты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Без выезда на лёд. Только тайга, горные перевалы и панорамные виды</p>
              </CardContent>
            </Card>
            <Card className="animate-scale-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="Award" size={48} className="text-accent mb-4" />
                <CardTitle>Премиум уровень</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Топовые снегоходы, комфортная экипировка и незабываемый сервис</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="snowmobiles" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наш парк снегоходов</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Выберите идеальную машину для вашего приключения</p>
          <div className="grid md:grid-cols-3 gap-8">
            {snowmobiles.map((snowmobile) => (
              <Card key={snowmobile.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={snowmobile.image} 
                    alt={snowmobile.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-white text-lg px-4 py-2">
                    {snowmobile.price}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{snowmobile.name}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Icon name="Zap" size={16} />
                        {snowmobile.power}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={16} />
                        {snowmobile.capacity}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {snowmobile.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={18} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => {
                      setSelectedSnowmobile(snowmobile);
                      scrollToSection('booking');
                    }}
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="routes" className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Маршруты и пейзажи</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img 
                src="https://cdn.poehali.dev/projects/041dcd08-726e-46ee-9e4e-34698e15e49c/files/97d65bf7-d5c7-46c8-92df-8c8795c1cf9f.jpg" 
                alt="Тайга" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Таежные тропы</h3>
                  <p className="text-white/90">Извилистые маршруты среди вековых деревьев и сугробов</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img 
                src="https://cdn.poehali.dev/projects/041dcd08-726e-46ee-9e4e-34698e15e49c/files/317c2f06-15f9-476a-95f4-cdb8ca1eed31.jpg" 
                alt="Перевалы" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Горные панорамы</h3>
                  <p className="text-white/90">Захватывающие виды на Байкал с высоты перевалов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Отзывы наших гостей</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{review.name}</CardTitle>
                    <Badge variant="secondary">{review.date}</Badge>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-muted">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Забронировать катание</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Оставьте заявку, и мы свяжемся с вами для подтверждения
          </p>
          {selectedSnowmobile && (
            <Card className="mb-8 bg-accent/10 border-accent">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Icon name="Snowflake" size={32} className="text-accent" />
                  <div>
                    <p className="font-semibold text-lg">Выбранный снегоход:</p>
                    <p className="text-xl font-bold text-accent">{selectedSnowmobile.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Желаемая дата *</Label>
                  <Input 
                    id="date" 
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Продолжительность *</Label>
                  <Input 
                    id="duration" 
                    placeholder="2 часа / 4 часа / весь день"
                    value={bookingForm.duration}
                    onChange={(e) => setBookingForm({...bookingForm, duration: e.target.value})}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительные пожелания</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Укажите количество человек, опыт вождения, особые пожелания..."
                    rows={4}
                    value={bookingForm.message}
                    onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Ежедневно с 8:00 до 20:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@baikal-extreme.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">Иркутская область, пос. Листвянка</p>
                    <p className="text-sm text-muted-foreground">Встреча на базе у начала маршрута</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Режим работы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Понедельник - Пятница</span>
                  <span className="text-muted-foreground">8:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="font-medium">Суббота - Воскресенье</span>
                  <span className="text-muted-foreground">7:00 - 21:00</span>
                </div>
                <div className="bg-accent/10 p-4 rounded-lg mt-6">
                  <p className="text-sm text-center">
                    <Icon name="Info" size={18} className="inline mr-2 text-accent" />
                    Предварительное бронирование обязательно
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Mountain" size={32} className="text-accent" />
                <div>
                  <h3 className="text-xl font-bold">Байкал Экстрим</h3>
                  <p className="text-sm text-white/70">Прокат снегоходов</p>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Незабываемые приключения на снегоходах по живописным маршрутам Прибайкалья
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="text-white/70 hover:text-accent transition-colors">Главная</button></li>
                <li><button onClick={() => scrollToSection('snowmobiles')} className="text-white/70 hover:text-accent transition-colors">Снегоходы</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="text-white/70 hover:text-accent transition-colors">Отзывы</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="text-white/70 hover:text-accent transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="text-white hover:text-accent hover:bg-white/10">
                  <Icon name="Phone" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-accent hover:bg-white/10">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="text-white hover:text-accent hover:bg-white/10">
                  <Icon name="MapPin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2024 Байкал Экстрим. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
