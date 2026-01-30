
import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 md:py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute -top-10 -right-20 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[30rem] font-black leading-none uppercase tracking-tighter italic">SOLVER</span>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative group">
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden bg-black shadow-2xl transition-all duration-1000 border border-zinc-800">
                <img 
                  src="https://github.com/wlgpwkdb-cell/portfolio/raw/5df79d3fab108d972ec08a503031d8f13d7036fd/ChatGPT%20Image%202026%EB%85%84%201%EC%9B%94%2030%EC%9D%BC%20%EC%98%A4%ED%9B%84%2002_02_19.png" 
                  alt="Lee Ji-hye" 
                  className="w-full h-full object-cover object-center grayscale contrast-[1.3] brightness-[0.85]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="text-blue-500 font-black tracking-widest text-xs mb-6 block uppercase">About Story</span>
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-[1.1] break-keep">
              스스로 답을 찾아내는<br />
              에너지, <span className="text-blue-500">자해(自解)</span>
            </h2>
            
            <div className="space-y-10 text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              <p className="text-white font-medium break-keep">
                제 별명은 <span className="text-blue-500 font-black tracking-tighter">'자해'</span>입니다. <br className="hidden md:block" />
                '스스로(自) 문제를 해결(解)한다'는 뜻을 담고 있습니다.
              </p>
              
              <p className="break-keep">
                10년 전 방송국 막내 시절부터 지금의 시니어 기획자가 되기까지, <br />
                저는 정해진 길보다 <span className="text-white">새로운 답을 찾는 쪽</span>을 선택해왔습니다. 
              </p>
              
              <div className="grid grid-cols-1 gap-8 pt-2">
                {[
                  { title: "쉬운 기획", desc: "어려운 이야기도 제가 잡으면 가장 재밌는 콘텐츠가 됩니다." },
                  { title: "성공 경험", desc: "고민을 성과(ROAS 800%, 가입률 40%↑)로 바꿔왔습니다." },
                  { title: "사람 중심", desc: "아티스트의 매력을 발견하고, 동료의 마음을 연결합니다." }
                ].map((point, i) => (
                  <div key={i} className="flex gap-6 border-l border-zinc-800 pl-8 hover:border-blue-500 transition-colors">
                    <div>
                      <h4 className="text-white text-2xl font-black mb-1 tracking-tight">{point.title}</h4>
                      <p className="text-base text-zinc-500 break-keep">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <p className="text-2xl md:text-3xl font-black text-white italic tracking-tighter leading-tight break-keep">
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
