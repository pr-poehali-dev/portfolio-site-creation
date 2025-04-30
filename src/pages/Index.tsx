import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Award, BookOpen, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-100 to-indigo-100 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                  Портфолио классного руководителя
                </h1>
                <p className="text-xl mb-6 text-gray-700 animate-fade-in">
                  Добро пожаловать на мой персональный сайт, где я делюсь опытом работы классного руководителя, 
                  достижениями моего класса и учебными материалами.
                </p>
                <div className="space-x-4 animate-fade-in">
                  <Button className="bg-primary hover:bg-primary/90">
                    Про мой класс
                  </Button>
                  <Button variant="outline">
                    Материалы
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Классный руководитель"
                  className="rounded-lg shadow-lg animate-fade-in w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Обо мне</h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Портрет классного руководителя"
                  className="rounded-full w-64 h-64 object-cover mx-auto shadow-md"
                />
              </div>
              <div className="md:w-2/3">
                <p className="text-lg mb-4">
                  Я учитель высшей категории с 15-летним стажем педагогической деятельности. 
                  Последние 8 лет работаю классным руководителем. Имею педагогическое образование, 
                  а также диплом о профессиональной переподготовке по направлению "Современные 
                  образовательные технологии".
                </p>
                <p className="text-lg mb-4">
                  Моё призвание — помогать детям раскрыть свой потенциал, развивать их таланты и формировать 
                  полноценную личность. В своей работе особое внимание уделяю индивидуальному подходу к каждому ученику 
                  и созданию дружественной атмосферы в классе.
                </p>
                <p className="text-lg">
                  Регулярно участвую в профессиональных конкурсах, конференциях и мастер-классах, 
                  постоянно совершенствуя свои навыки и знания.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Моя деятельность</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Планирование</h3>
                  <p className="text-muted-foreground">
                    Организация учебно-воспитательного процесса, планирование мероприятий и классных часов
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Воспитательная работа</h3>
                  <p className="text-muted-foreground">
                    Формирование коллектива, развитие лидерских качеств и взаимопомощи среди учеников
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Методическая работа</h3>
                  <p className="text-muted-foreground">
                    Разработка учебных материалов, планов уроков и воспитательных мероприятий
                  </p>
                </div>
              </Card>
              
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Достижения</h3>
                  <p className="text-muted-foreground">
                    Результаты участия класса в школьных, районных и городских мероприятиях
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Google Drive Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Материалы на Google Диске</h2>
            <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
              Все методические материалы, планы работы, презентации и документация доступны по ссылкам ниже.
              Для просмотра и скачивания некоторых материалов может потребоваться доступ.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-3">Методические материалы</h3>
                <p className="text-muted-foreground mb-4">
                  Разработки классных часов, сценарии мероприятий, дидактические материалы
                </p>
                <a 
                  href="https://drive.google.com/drive/folders/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Открыть папку →
                </a>
              </Card>
              
              <Card className="p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-3">Портфолио учеников</h3>
                <p className="text-muted-foreground mb-4">
                  Достижения, грамоты, результаты участия в олимпиадах и конкурсах
                </p>
                <a 
                  href="https://drive.google.com/drive/folders/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Открыть папку →
                </a>
              </Card>
              
              <Card className="p-6 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl mb-3">Документация</h3>
                <p className="text-muted-foreground mb-4">
                  Отчеты, планы воспитательной работы, характеристики класса
                </p>
                <a 
                  href="https://drive.google.com/drive/folders/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Открыть папку →
                </a>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-purple-100 to-indigo-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Отзывы</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <p className="italic mb-4">
                  "Хочу выразить благодарность нашему классному руководителю за профессионализм, 
                  терпение и индивидуальный подход к каждому ребенку. Благодаря вашим усилиям, 
                  наши дети стали более ответственными и дружными."
                </p>
                <Separator className="mb-4" />
                <p className="font-semibold">Елена Петрова, родитель</p>
              </Card>
              
              <Card className="p-6">
                <p className="italic mb-4">
                  "Спасибо за отличную организацию учебного процесса и внеклассных мероприятий. 
                  Мой ребенок с удовольствием ходит в школу и всегда с восторгом рассказывает о 
                  проектах и мероприятиях, которые вы проводите."
                </p>
                <Separator className="mb-4" />
                <p className="font-semibold">Ирина Сидорова, родитель</p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Обратная связь</h2>
            <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
              Вы можете связаться со мной по рабочим вопросам через электронную почту 
              или во время родительских собраний.
            </p>
            
            <div className="flex flex-col items-center justify-center">
              <Card className="p-8 max-w-md w-full">
                <h3 className="font-bold text-xl mb-4 text-center">Контактная информация</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="mr-2">📧</span>
                    <span>Email: teacher@school.ru</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">📱</span>
                    <span>Телефон: (доступен в школе)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🏫</span>
                    <span>Школа №123, кабинет 42</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">🕒</span>
                    <span>Приемные часы: вторник, 16:00 - 18:00</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;