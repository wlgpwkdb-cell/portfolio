
import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-40 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute -top-10 -right-20 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[30rem] font-black leading-none uppercase tracking-tighter italic">SOLVER</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="relative group">
              <div className="aspect-[3/4] rounded-xl overflow-hidden grayscale contrast-110 group-hover:grayscale-0 transition-all duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Lee Ji-hye" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-lg shadow-2xl">
                <span className="block text-5xl font-black text-zinc-900 italic tracking-tighter leading-none">10th</span>
                <span className="block text-[10px] uppercase tracking-[0.2em] font-black text-blue-600 mt-2">Anniversary</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 pt-4">
            <span className="text-blue-500 font-black tracking-widest text-xs mb-6 block uppercase">About Story</span>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter leading-[1.1]">
              스스로 답을 찾아내는<br />
              에너지, <span className="text-blue-500">자해(自解)</span>
            </h2>
            
            <div className="space-y-12 text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              <p className="text-white font-medium">
                제 별명은 <span className="text-blue-500 font-black tracking-tighter">'자해'</span>입니다. <br className="hidden md:block" />
                '스스로(自) 문제를 해결(解)한다'는 뜻을 담고 있습니다.
              </p>
              
              <p>
                10년 전 방송국 막내 시절부터 지금의 시니어 기획자가 되기까지, <br />
                저는 정해진 길보다 <span className="text-white">새로운 답을 찾는 쪽</span>을 선택해왔습니다. 
              </p>
              
              <div className="grid grid-cols-1 gap-10 pt-4">
                {[
                  { title: "쉬운 기획", desc: "어려운 이야기도 제가 잡으면 가장 재밌는 콘텐츠가 됩니다." },
                  { title: "성공 경험", desc: "고민을 성과(ROAS 800%, 가입률 40%↑)로 바꿔왔습니다." },
                  { title: "사람 중심", desc: "아티스트의 매력을 발견하고, 동료의 마음을 연결합니다." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-6 border-l border-zinc-800 pl-8 hover:border-blue-500 transition-colors">
                    <div>
                      <h4 className="text-white text-2xl font-black mb-2 tracking-tight">{point.title}</h4>
                      <p className="text-base text-zinc-500">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-12">
                <p className="text-2xl md:text-3xl font-black text-white italic tracking-tighter leading-tight">
                  "오늘이 마지막인 것처럼, <br />
                  주어진 환경에서 <span className="text-blue-500 underline decoration-4 underline-offset-8">최선</span>을 다해 나아갑니다."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
