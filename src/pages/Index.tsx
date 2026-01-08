import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-x-hidden cursor-none">
      <div 
        className="fixed w-6 h-6 rounded-full border-2 border-neon-purple pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="fixed w-2 h-2 rounded-full bg-neon-pink pointer-events-none z-50"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neon-purple/20 via-transparent to-neon-pink/20 pointer-events-none" />
      
      <div className="relative">
        <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center space-y-8 animate-fade-in-up max-w-4xl">
            <div className="relative inline-block mb-8">
              <img 
                src="https://cdn.poehali.dev/files/@skalionovgood.png" 
                alt="Скалионов" 
                className="w-40 h-40 md:w-56 md:h-56 rounded-full mx-auto object-cover border-4 border-neon-purple shadow-[0_0_40px_rgba(155,135,245,0.6)] hover:shadow-[0_0_60px_rgba(155,135,245,0.9)] transition-all duration-500 hover:scale-110 animate-float"
              />
              <div className="absolute -inset-3 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange blur-3xl -z-10 opacity-60 animate-pulse" />
            </div>
            <div className="relative inline-block">
              <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-4 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-orange bg-clip-text text-transparent animate-glow px-8 py-4 rounded-3xl border-4 border-neon-purple/30">
                Скалионов
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 blur-3xl -z-10 animate-float" />
            </div>
            
            <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-muted-foreground flex-wrap">
              <span className="px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/30 hover:bg-neon-purple/20 transition-all duration-300">
                16 y.o
              </span>
              <span className="px-4 py-2 rounded-full bg-neon-pink/10 border border-neon-pink/30 hover:bg-neon-pink/20 transition-all duration-300">
                designer
              </span>
              <span className="px-4 py-2 rounded-full bg-neon-orange/10 border border-neon-orange/30 hover:bg-neon-orange/20 transition-all duration-300">
                supporter
              </span>
              <span className="px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/30 hover:bg-neon-blue/20 transition-all duration-300">
                osinter
              </span>
            </div>

            <div className="flex gap-4 justify-center mt-8 flex-wrap">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-neon-purple to-neon-pink hover:scale-110 transition-transform duration-300 text-lg group"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Обо мне
                <Icon name="ChevronDown" className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-neon-blue hover:bg-neon-blue/10 hover:scale-110 transition-all duration-300 text-lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Портфолио
                <Icon name="Briefcase" className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl w-full animate-fade-in">
            <div className="mb-12 text-center">
              <div className="relative inline-block mb-8">
                <img 
                  src="https://cdn.poehali.dev/files/@skalionovgood.png" 
                  alt="Скалионов" 
                  className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-neon-purple shadow-[0_0_30px_rgba(155,135,245,0.5)] hover:shadow-[0_0_50px_rgba(155,135,245,0.8)] transition-all duration-500 hover:scale-105"
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-neon-purple to-neon-pink blur-2xl -z-10 opacity-50 animate-pulse" />
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-neon-pink via-neon-orange to-neon-blue bg-clip-text text-transparent">
                Обо мне
              </h2>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-purple to-neon-pink rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 bg-card/50 backdrop-blur-xl border-neon-purple/30 hover:border-neon-purple transition-all duration-500 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neon-purple/20 group-hover:bg-neon-purple/30 transition-colors">
                    <Icon name="User" size={32} className="text-neon-purple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Основная инфа</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Icon name="Cake" size={20} className="text-neon-pink" />
                        <span>16 years old</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Send" size={20} className="text-neon-blue" />
                        <a href="https://t.me/skalionovgood" target="_blank" rel="noopener noreferrer" className="hover:text-neon-blue transition-colors">
                          @skalionovgood
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Users" size={20} className="text-neon-orange" />
                        <span>Кент: 
                          <a href="https://t.me/skalionovbad" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-neon-orange transition-colors">
                            @skalionovbad
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-xl border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neon-pink/20 group-hover:bg-neon-pink/30 transition-colors">
                    <Icon name="Briefcase" size={32} className="text-neon-pink" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">Каста</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Icon name="Palette" size={20} className="text-neon-purple" />
                        <span>Designer</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Headphones" size={20} className="text-neon-blue" />
                        <span>Supporter</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <Icon name="Search" size={20} className="text-neon-orange" />
                        <span>Osinter</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="md:col-span-2 p-8 bg-card/50 backdrop-blur-xl border-neon-blue/30 hover:border-neon-blue transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-neon-blue/20 group-hover:bg-neon-blue/30 transition-colors">
                    <Icon name="MessageCircle" size={32} className="text-neon-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4">О себе</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Приветствую на моем сайте! Меня зовут Скалионов, погнали расскажу про себя!
                      В км я недавно, а именно месяц. За этот месяц я успел наказать много педофилов и скамеров. 
                      Делал я это не один, а с Скалионовым младшим (мой кент). Так-же я овнер проектов таких как:
                    </p>
                    <div className="flex gap-6 mt-6 justify-center flex-wrap">
                      <div className="group relative">
                        <div className="relative overflow-hidden rounded-2xl border-4 border-neon-purple/30 hover:border-neon-purple transition-all duration-500 hover:scale-105">
                          <img 
                            src="https://cdn.poehali.dev/files/ChatGPT Image 8 янв. 2026 г., 22_58_46.png" 
                            alt="Туман Разума" 
                            className="w-64 h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4">
                            <span className="text-xl font-bold text-neon-purple">Туман Разума</span>
                          </div>
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-neon-purple to-neon-pink blur-2xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      </div>
                      <div className="group relative">
                        <div className="relative overflow-hidden rounded-2xl border-4 border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:scale-105">
                          <img 
                            src="https://cdn.poehali.dev/files/himera.png" 
                            alt="Himera" 
                            className="w-64 h-64 object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-4">
                            <span className="text-xl font-bold text-neon-pink">himera бек в км</span>
                          </div>
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-neon-pink to-neon-orange blur-2xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mt-6 text-center">
                      Спасибо за внимание! 💜
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="stats" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl w-full animate-fade-in">
            <div className="mb-12 text-center">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Достижения
              </h2>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-blue to-neon-purple rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-8 bg-card/50 backdrop-blur-xl border-neon-purple/30 hover:border-neon-purple transition-all duration-500 hover:scale-110 group text-center">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-neon-purple/20 group-hover:bg-neon-purple/30 transition-colors inline-block">
                    <Icon name="Target" size={48} className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent mb-2">
                      10+
                    </p>
                    <p className="text-lg text-muted-foreground">Наказано нарушителей</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-xl border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:scale-110 group text-center">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-neon-pink/20 group-hover:bg-neon-pink/30 transition-colors inline-block">
                    <Icon name="Zap" size={48} className="text-neon-pink" />
                  </div>
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-neon-pink to-neon-orange bg-clip-text text-transparent mb-2">
                      2
                    </p>
                    <p className="text-lg text-muted-foreground">Активных проекта</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-xl border-neon-orange/30 hover:border-neon-orange transition-all duration-500 hover:scale-110 group text-center">
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-neon-orange/20 group-hover:bg-neon-orange/30 transition-colors inline-block">
                    <Icon name="Calendar" size={48} className="text-neon-orange" />
                  </div>
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-neon-orange to-neon-blue bg-clip-text text-transparent mb-2">
                      1
                    </p>
                    <p className="text-lg text-muted-foreground">Месяц в км</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="portfolio" className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-5xl w-full animate-fade-in">
            <div className="mb-12 text-center">
              <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-neon-orange via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Портфолио
              </h2>
              <div className="h-1 w-32 mx-auto bg-gradient-to-r from-neon-orange to-neon-pink rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-xl border-neon-purple/30 hover:border-neon-purple transition-all duration-500 hover:scale-105">
                <a href="https://t.me/+5I6SB5EMtjwwMzlh" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-neon-purple/20 group-hover:bg-neon-purple/30 transition-colors">
                        <Icon name="Cloud" size={40} className="text-neon-purple" />
                      </div>
                      <h3 className="text-3xl font-bold">Туман Разума</h3>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Дуэт проект с кентом по ловле педофилов и скамеров. 
                      Работаем вдвоём со Скалионовым младшим, активно выявляем и наказываем нарушителей в сети.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 text-sm rounded-full bg-neon-purple/20 border border-neon-purple/40">
                        👥 Дуэт
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full bg-neon-purple/20 border border-neon-purple/40">
                        OSINT
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full bg-neon-purple/20 border border-neon-purple/40">
                        Овнер
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-neon-purple pt-2">
                      <Icon name="ExternalLink" size={20} />
                      <span className="text-sm">Перейти в Telegram</span>
                    </div>
                  </div>
                </a>
              </Card>

              <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-xl border-neon-pink/30 hover:border-neon-pink transition-all duration-500 hover:scale-105">
                <a href="https://t.me/+5a1758TYKfdiOTli" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-xl bg-neon-pink/20 group-hover:bg-neon-pink/30 transition-colors">
                        <Icon name="Shield" size={40} className="text-neon-pink" />
                      </div>
                      <h3 className="text-3xl font-bold">himera бек в км</h3>
                    </div>
                    <p className="text-lg text-muted-foreground">
                      Большой командный проект по борьбе с педофилами и скамерами. 
                      Работаю в команде профессионалов, нас много — масштабная работа по защите интернета.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="px-3 py-1 text-sm rounded-full bg-neon-pink/20 border border-neon-pink/40">
                        👥 Команда
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full bg-neon-pink/20 border border-neon-pink/40">
                        OSINT
                      </span>
                      <span className="px-3 py-1 text-sm rounded-full bg-neon-pink/20 border border-neon-pink/40">
                        Админ
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-neon-pink pt-2">
                      <Icon name="ExternalLink" size={20} />
                      <span className="text-sm">Перейти в Telegram</span>
                    </div>
                  </div>
                </a>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <Card className="p-8 bg-card/50 backdrop-blur-xl border-neon-orange/30 hover:border-neon-orange transition-all duration-500 inline-block">
                <div className="flex flex-col items-center gap-4">
                  <Icon name="Mail" size={48} className="text-neon-orange" />
                  <h3 className="text-2xl font-bold">Связаться со мной</h3>
                  <p className="text-muted-foreground">Готов к новым проектам и коллаборациям</p>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-neon-orange to-neon-pink hover:scale-110 transition-transform duration-300 text-lg mt-4"
                    onClick={() => window.open('https://t.me/skalionovgood', '_blank')}
                  >
                    Написать в Telegram
                    <Icon name="Send" className="ml-2" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <footer className="py-8 px-4 border-t border-border/50 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto text-center text-muted-foreground">
            <p className="text-sm">
              © 2026 Скалионов. Создано с 💜 в поехали
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;