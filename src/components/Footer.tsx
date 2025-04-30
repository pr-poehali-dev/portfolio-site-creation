import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Портфолио классного руководителя</h3>
            <p className="text-muted-foreground">
              Делюсь опытом, материалами и достижениями моего класса
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/class" className="text-muted-foreground hover:text-primary transition-colors">Мой класс</Link></li>
              <li><Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">Ресурсы</Link></li>
              <li><Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Внешние ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://drive.google.com/drive/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Google Диск
                </a>
              </li>
              <li>
                <a 
                  href="https://edu.gov.ru/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Министерство просвещения РФ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-muted-foreground">
            © {currentYear} Портфолио классного руководителя. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;