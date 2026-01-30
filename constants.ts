
import { WorkCategory } from './types';

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: 'internal',
    title: '사내방송',
    subtitle: '조직의 온도를 높이다',
    imageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/c836fed3-8ea4-4bd0-9660-284e41dd8ffd_rw_1920.png',
    items: [
      { 
        title: '체험농협현장', 
        description: '전국 사업소 리얼 체험 예능 (사내 최장수 프로그램)',
        planningIntent: '전국 각지에 흩어져 있는 사업소의 생생한 현장을 담아내어, 본사와 지사 간의 물리적 거리를 좁히고 임직원 간의 결속력을 다지기 위해 기획되었습니다. 단순한 업무 소개를 넘어 현장 직원들의 땀방울과 보람을 예능 형식으로 친근하게 풀어냈습니다.',
        fullDescription: '출연자가 전국 곳곳의 농협 사업소를 방문하여 일일 직원이 되어 현장 업무를 직접 체험하는 리얼 버라이어티 프로그램입니다. 사내 방송 역사상 최장수 프로그램이라는 타이틀에 걸맞게 전 임직원의 사랑을 받고 있으며, 조직 문화의 온도를 높이는 데 결정적인 역할을 하고 있습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/c836fed3-8ea4-4bd0-9660-284e41dd8ffd_rw_1920.png',
        contribution: { planning: 100, production: 0, filming: 50, editing: 100 },
        links: [
          { label: '주유소 & 농기계 수리센터', url: 'https://www.youtube.com/watch?v=h1y6RqylWNM' },
          { label: '제주 하나로마트', url: 'https://www.youtube.com/watch?v=RvS3l4EgLqI' },
          { label: '곤드레 수확', url: 'https://www.youtube.com/watch?v=K7OhT7enS48' },
          { label: '로컬푸드 직매장', url: 'https://www.youtube.com/watch?v=SydDkGsbTJw' },
          { label: '찾아가는 행복장터', url: 'https://www.youtube.com/watch?v=Cu5_rTxR9FE' },
          { label: '멋대로 참외', url: 'https://www.youtube.com/watch?v=tm2biylczTA' }
        ]
      },
      { 
        title: '퇴근하GO', 
        description: '사내 동호회 활성화 프로젝트 (신규 가입률 40%↑)',
        planningIntent: '직원들의 \'워라밸\'을 존중하고 건강한 사내 커뮤니티 형성을 위해 기획되었습니다. 업무 외의 시간에도 동료들과 함께 취미를 공유하며 소통할 수 있는 장을 마련함으로써 경직된 사내 분위기를 유연하게 바꾸고자 했습니다.',
        fullDescription: '사내의 다양한 동호회 활동을 직접 찾아가 소개하는 프로그램입니다. 기존의 홍보 방식에서 탈피하여 유쾌한 예능 포맷을 도입했으며, 방송 이후 신규 가입률이 40% 이상 폭증하고 타 동호회들의 출연 요청이 빗발칠 정도로 사내 최고의 화제성을 자랑합니다. CG 파트를 제외한 기획, 촬영 총괄, 편집 전 과정을 직접 핸들링하였습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/39fcbc59-b21c-47ea-938e-ea994e69d1c9_rw_1920.png',
        contribution: { planning: 100, production: 0, filming: 100, editing: 90 },
        links: [
          { label: "농협대학교 밴드 동아리 '뮤직에러'", url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=1021&&sText=&cateCode=2020&nowPage=5' },
          { label: "남동농협 야구 동호회 '두레 야구단' 1부", url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=993&&sText=&cateCode=2020&nowPage=10' },
          { label: "남동농협 야구 동호회 '두레 야구단' 2부", url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=998&&sText=&cateCode=2020&nowPage=9' },
          { label: "통합IT센터 농구 동호회 '휘모리' 1부", url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=977&&sText=&cateCode=2020&nowPage=12' },
          { label: "통합IT센터 농구 동호회 '휘모리' 2부", url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=980&&sText=&cateCode=2020&nowPage=12' },
          { label: "농협 강원본부 축구 동호회 '신토불이 FC'", url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=1032&&sText=&cateCode=2020&nowPage=4' }
        ]
      },
      { 
        title: '다은이가 알려줄게', 
        description: '아나운서와 함께하는 친절한 사내 정보 가이드',
        planningIntent: '복잡하고 딱딱하게 느껴질 수 있는 사내 제도, 규정, 복지 혜택 등을 아나운서의 친절한 설명을 통해 모든 임직원이 쉽게 이해하고 혜택을 누릴 수 있도록 정보 격차를 해소하기 위해 기획되었습니다.',
        fullDescription: '정보 전달에 최적화된 스튜디오 진행과 생생한 현장 VCR을 결합한 인포테인먼트 프로그램입니다. 시청자가 지루함을 느끼지 않도록 직관적인 인포그래픽과 연출을 가미했으며, 사내 정보 가이드의 표준으로 자리 잡았습니다. 기획과 편집 100% 전담으로 완성도를 높였습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/bf1420d3-5d6b-4d16-ad76-03735de30dd9_rw_1920.png',
        contribution: { planning: 100, production: 0, filming: 50, editing: 100 },
        links: [
          { label: '농협쌀 수출 이야기', url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=974&&sText=&cateCode=2020&nowPage=13' },
          { label: '그로운 농장(청년농부)', url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=908&&sText=&cateCode=2020&nowPage=23' },
          { label: '농협쌀 간편식품', url: 'https://www.youtube.com/watch?v=rx6L3kJssdA' },
          { label: '프랑스 사무소', url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=888&&sText=&cateCode=2020&nowPage=26' },
          { label: '쌀의 오해와 진실', url: 'https://www.youtube.com/watch?v=i0b9fWhXCXM' },
          { label: 'NH트레블리카드', url: 'http://www.nhtv.co.kr/vodView.hu?file_idx=895&&sText=&cateCode=2020&nowPage=25' }
        ]
      }
    ]
  },
  {
    id: 'marketing',
    title: '광고/마케팅',
    subtitle: '숫자로 증명하다',
    imageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f3d94b2d14f9e496ff62f62436096e8a91752968/fad00fe8-fd02-41bd-b161-49e75f4b693a_rw_1920.png',
    items: [
      { 
        title: '디에트데이', 
        description: '배우 설인아 캠페인 및 SNS 광고 기획 (최고 ROAS 800%)',
        planningIntent: '브랜드의 건강하고 세련된 이미지를 타겟 고객층에게 효과적으로 전달하고, SNS 환경에 최적화된 콘텐츠 전략을 통해 구매 전환율을 극대화하기 위한 퍼포먼스 마케팅 중심의 캠페인 기획입니다.',
        fullDescription: '배우 설인아를 모델로 기용한 대규모 브랜드 캠페인입니다. 모델의 이미지와 제품의 소구점을 정교하게 매칭시킨 스토리보드를 바탕으로, 데이터 분석을 통한 A/B 테스트용 소재를 다수 제작하여 최고 ROAS 800%라는 폭발적인 성과를 견인했습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f3d94b2d14f9e496ff62f62436096e8a91752968/fad00fe8-fd02-41bd-b161-49e75f4b693a_rw_1920.png',
        contribution: { planning: 100, production: 50, filming: 0, editing: 0 },
        links: [
          { label: '디에트데이 메인 광고', url: 'https://www.youtube.com/watch?v=2XjMhD6146o' }
        ]
      },
      { 
        title: '브랜드 광고', 
        description: '서정대학교, 대명 아임레디 등 타겟 맞춤형 퍼포먼스 광고',
        planningIntent: '서정대학교 HiVE 사업, 대명 아임레디 등 각 비즈니스 파트너의 핵심 가치를 타겟 오디언스에게 가장 신뢰감 있는 방식으로 전달하여 브랜드의 인지도를 높이고 긍정적인 이미지를 구축하는 것이 목표였습니다.',
        fullDescription: '광고주의 사업 성격과 목적에 따라 최적화된 영상 톤앤매너를 설정하여 제작된 프로젝트들입니다. 사업의 성과를 담은 공유 영상부터 소비자 신뢰를 높이는 브랜드 필름까지, 기획 단계에서부터 전략적인 메시지 설계를 통해 광고주의 만족도를 극대화했습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/b1ee9bf8d40d030ff766ce52df3048d233df559f/9d877361-615a-4ef5-8386-73148d7d5db6_rw_1920.png',
        contribution: { planning: 100, production: 50, filming: 0, editing: 0 },
        links: [
          { label: '서정대학교 성과 영상', url: 'https://www.youtube.com/watch?v=I4rlCjZvVxY' },
          { label: '대명 아임레디 보험 영상', url: 'https://www.youtube.com/watch?v=akyYzi_N6XY' }
        ]
      }
    ]
  },
  {
    id: 'youtube',
    title: '유튜브/뉴미디어',
    subtitle: '팬덤을 만들다',
    imageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/15a816ea-23fd-4c7d-8130-72da3f459ad3_rw_1920.png',
    items: [
      { 
        title: 'NEWSEN 앳스타일', 
        description: '아티스트 매력 극대화, 메이킹과 인터뷰의 트렌디한 결합',
        planningIntent: '아티스트가 가진 고유의 매력을 화보 이상의 생동감 넘치는 영상으로 담아내어, 팬덤의 니즈를 충족시키고 플랫폼의 디지털 도달 범위를 확장하기 위한 감각적인 콘텐츠 기획입니다.',
        fullDescription: '스타 화보 메이킹 영상과 트렌디한 인터뷰 세션(왓츠인마이백, 밸런스 게임 등)을 결합한 뉴미디어 콘텐츠입니다. 아티스트의 자연스러운 모습과 전문적인 화보 촬영 현장을 유기적으로 연결하여 높은 조회수와 활발한 SNS 공유를 이괄해냈습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/15a816ea-23fd-4c7d-8130-72da3f459ad3_rw_1920.png',
        contribution: { planning: 100, production: 0, filming: 50, editing: 50 },
        links: [
          { label: '앳스타일 메이킹 영상', url: 'https://www.youtube.com/watch?v=j3UJ2ahoT9A' }
        ]
      },
      { 
        title: '수키원장', 
        description: '진정성이 만든 변화, 시즌 2까지 이어진 체형 교정 시리즈',
        planningIntent: '전문적인 지식을 리얼리티 포맷과 결합하여 시청자들에게 신뢰를 주고 지속 가능한 정보성 시리즈를 구축하고자 했습니다.',
        fullDescription: '체형 고민이 있는 출연자들의 변화 과정을 가감 없이 담아낸 유튜브 시리즈입니다. 단순한 정보 전달을 넘어 출연자의 라이프스타일까지 세심하게 관찰하고 피드백하는 진정성 있는 접근으로 시즌 1의 대성공을 거두었으며, 팬들의 요청으로 시즌 2까지 제작되는 성과를 거두었습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/%EC%A0%9C%EB%AA%A9%20%EC%97%86%EC%9D%8C.png',
        contribution: { planning: 100, production: 0, filming: 50, editing: 100 },
        links: [
          { label: '수키원장 유튜브 영상', url: 'https://www.youtube.com/watch?v=l1_JaKIHYwY' }
        ]
      }
    ]
  },
  {
    id: 'live',
    title: '방송/라이브',
    subtitle: '기본의 가치를 지키다',
    imageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/6a404d3d-6eb2-449c-a6ab-c9769e7b8ed9_rw_1920.png',
    items: [
      { 
        title: '채널A 보도 제작팀', 
        description: '뉴스 A 라이브, 정치데스크 등 주요 뉴스 생방송 운영 지원',
        planningIntent: '긴박하게 돌아가는 뉴스 현장의 소식을 실시간으로 안방에 전달하며, 정확한 팩트 체크와 매끄러운 방송 진행을 통해 보도 매체로서의 신뢰성을 확보하고자 했습니다.',
        fullDescription: '뉴스 A 라이브, 정치데스크 등 주요 보도 프로그램의 FD 및 AD로 활동하며 생방송 현장의 컨트롤 타워 역할을 수행했습니다. 출연진 동선 관리부터 자막 검수, 돌발 상황 대응까지 초 단위의 긴장감이 흐르는 현장에서 무결점 방송을 서포트했습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/2311736c-9702-4a54-9ad2-f33743181f13_rw_1920.png',
        links: [
          { label: '사건상황실', url: 'https://youtu.be/nNoNyTQFDaI?si=he61NEoYb52g5L8X' },
          { label: '뉴스 A LIVE', url: 'https://www.youtube.com/watch?v=ZYJu-2Ot0zk' },
          { label: '토요랭킹쇼', url: 'https://www.youtube.com/watch?v=bXFki6_XpFM' }
        ]
      },
      { 
        title: 'NAVER LIVE', 
        description: '모바일 라이브 초창기, 실시간 요리 및 소통의 가능성 확인',
        planningIntent: '모바일 동영상 플랫폼의 성장에 발맞추어, 정형화된 TV 방송에서 벗어나 시청자와 실시간으로 양방향 소통하며 교감하는 새로운 라이브 포맷의 가능성을 확인하기 위해 기획되었습니다.',
        fullDescription: '2016년 모바일 라이브 방송의 초기 단계에서 진행된 요리 소통 콘텐츠입니다. 구매 유도에 치중하기보다 실시간 채팅을 통한 유저와의 즉각적인 피드백과 편안한 소통에 집중하여 조회수 2만 회를 돌파하는 등 뉴미디어 라이브의 선구적인 사례를 만들었습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/2bc118a9-281c-47f6-9a3f-ed0de3584259_rw_1920.png',
        links: [
          { label: '세계의 집밥', url: 'https://tv.naver.com/v/580363?playlistNo=52113' }
        ]
      },
      { 
        title: 'KBS 2TV 아침', 
        description: '철저한 제작 서포트로 완성한 고품질 정보 꼭지',
        planningIntent: '매일 아침 시청자들에게 신뢰할 수 있는 생활 정보와 감동적인 사연을 신속하고 정확하게 전달하여 삶의 활력을 제공하는 데 목적을 두었습니다.',
        fullDescription: '공영방송의 고품질 정보 프로그램으로, 조연출로서 매일 방송되는 코너의 기획부터 촬영 준비, 데이터 백업, 편집실 조율까지 제작 전반의 하드캐리 실무를 담당했습니다. 엄격한 방송 규격과 데드라인을 준수하며 안정적인 제작 환경을 지원했습니다.',
        modalImageUrl: 'https://github.com/wlgpwkdb-cell/portfolio/raw/f4b26823b86f1cb494bea8b88b0543881cae7265/32205af0-74b4-4caa-8efb-729cfbb0fc8d_rw_1200.png',
        links: [
          { label: '첨단기술, 농업에 빠지다', url: 'https://www.youtube.com/watch?v=3lyJjD7OZ8M' }
        ]
      }
    ]
  }
];
