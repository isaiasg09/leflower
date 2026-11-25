export const businessData = {
  nome: 'Le Flower cafeteria',
  nicho: 'OPERATIONAL',
  endereco: 'R. 6, 01 - St. Central, Goiânia - GO, 74023-030, Brasil',
  cidade: '01',
  link_google_maps:
    'https://maps.google.com/?cid=2869567595523480939&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA',
  telefone: '(62) 96000-6950',
  telefone_internacional: '+55 62 96000-6950',
  link_whatsapp: 'https://wa.me/5562960006950',
  nota: 5,
  total_avaliacoes: 17,
  instagram: 'https://www.instagram.com/reel/Cix4vQYBWOe/',
  ifood:
    null,
  anota_ai: null,
  horario_funcionamento: [
    'segunda-feira: 10:00 – 18:30',
    'terça-feira: 10:00 – 18:30',
    'quarta-feira: 10:00 – 18:30',
    'quinta-feira: 10:00 – 18:30',
    'sexta-feira: 10:00 – 18:30',
    'sábado: 10:00 – 18:30',
    'domingo: Fechado',
  ],
  avaliacoes: [
    {
      autor: 'Silvynha Passarinho',
      nota: 5,
      texto:
        'Imagina um lugar incrível,com um dos melhores cafés que já tomei ,croassan,trufas ,salgados,com doces ,tudo muito requintado ,chique no último e o Dono Rogério é nível masterchef além de ser um gentleman.Bom gosto do bom gosto....Top do top',
    },
    {
      autor: 'Lara Frias',
      nota: 5,
      texto:
        'A comida e bebida têm ótima qualidade, muito saborosos. Os preços são ótimos. Gostei muito de tudo, vou voltar.',
    },
    {
      autor: 'Ana Clara Fagundes do Amaral',
      nota: 5,
      texto:
        'Amei! Tudo delicioso, bom custo benefício, espaço aconchegante e muito agradável, voltarei mais vezes com certeza!',
    },
    {
      autor: 'Patrícia Alves',
      nota: 5,
      texto:
        'Um boa surpresa encontrar um lugar tão aconchegante no Centro de Goiânia, comida boa e café incrível.',
    },
    {
      autor: 'Cristiane Meiry',
      nota: 5,
      texto:
        'Atendimento excelente, o espaço é lindo. Comprei um croissant de chocolate mas quero voltar para um café com as amigas',
    },
  ],
  fotos: [
    {
      titulo: 'Foto Google Maps 1',
      url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLfWp31wFphay8OvDQ193RnixnVUO7qqEbrZUDzl4JX4PprY4lLS82BUnWA3WABmhUK8xkIgdD2rumetlVvsTt5WycyLAw0UH-HQTYH47Jq9K3QkP3GRQtT8rLOFgVt9ZEq1eK2j4J4dTebu=s4800-w1080-h1080',
    },
    {
      titulo: 'Foto Google Maps 2',
      url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLd1665rMOjyxZGz1gylmgzqrf61wLdeFl4VGm3eQVfpBAm-0olaM87Vl66nTd04ohsrNGT60pb8j7CPavSbCRmSVkCeZl9Z9LQKOGQ53NLA0jeL3opHLJXo5QvIPfS_SrhJv0uIyMLIcmjU=s4800-w1080-h1080',
    },
    {
      titulo: 'Foto Google Maps 3',
      url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLeBjN-TcxGOnor9lqqKzYpinrbAaz3wAENU4OxxTyFcqkTXH1fu1i8L4pKbdrXpFDdKUVrfaCXcpRlHCPokC9rYGCe8O-wx70V_DvBV6m2FW5vo8eyz0K9-S9o2MZgaGBVMYxebvo4eKerb=s4800-w1080-h1080',
    },
    {
      titulo: 'Foto Google Maps 4',
      url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLc3Jjzb2Dn5sS-41DdhH_eEJDi7mZGxdcOpriAvG9WlOc_yuh6LbqQfsGyqQvXaz8nOUtJpTPdaMSjv0F0rg5RvFb6wd0_8P8QgWYMSJbgzFr1adUadvKQ-L0bGb6n5qYduTjj_WFOcngQ=s4800-w1080-h1080',
    },
    {
      titulo: 'Foto Google Maps 5',
      url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLdsB6DP4hO01Ahc51yHsXHlgX_O6Smo3LW6SRFsQSwnDq0UuD2MhdakDSR4zgRvWVWPWbR1EJBFlh386pFAbfMwAM3SXco0L-e2HKnKDNlHOAiTY3qoeYZeaWILTHUsJzotvIRCaxzUz-8=s4800-w1080-h1080',
    },
    {
      titulo: 'Foto Google Maps 6',
      url: 'https://lh3.googleusercontent.com/grass-cs/AABkmLcDfbOe6ZNsDh8lVz9EJjueHqESDjuCfaBOTL6QFPzGMhgmW2GV0RLiFDGJvzz9EUFUL0x6qnMwrf-gyDFGovlkfLgORwt-gXP6G3iccrQe-uxa_O9-mWdMifMWm0WJd16ZIKLk076s8eG-=s4800-w1080-h1080',
    },
  ],
};

const whatsappPreset = encodeURIComponent(
  'Olá! Gostaria de agendar uma mesa na Le Flower cafeteria.'
);

export const siteData = {
  ...businessData,
  instagram: 'https://www.instagram.com/leflowercafe/',
  instagramHandle: '@leflowercafe',
  instagramSeguidores: '70 mil+',
  instagramReel: businessData.instagram,
  cidadeExibicao: 'Goiânia, GO',
  bairroExibicao: 'Setor Central',
  whatsappAgendamento: `${businessData.link_whatsapp}?text=${whatsappPreset}`,
  horariosFormatados: businessData.horario_funcionamento.map((linha) => {
    const [dia, horario] = linha.split(': ');
    const cleaned = (horario || '').replace(/\u2009/g, ' ').replace(/\s*–\s*/, ' às ').trim();
    return {
      dia: dia ? dia.charAt(0).toUpperCase() + dia.slice(1) : '',
      horario: cleaned === 'Fechado' ? 'Fechado' : cleaned,
      fechado: cleaned === 'Fechado',
    };
  }),
  photoCatalog: [
    {
      id: 'cappuccino-ganache',
      url: businessData.fotos[0].url,
      titulo: 'Taça Signature de Chocolate & Café',
      subtitulo: 'Borda de ganache artesanal, creme aveludado e chantilly fresco',
      alt: 'Taça de vidro alta com café cremoso e chocolate quente, borda espessa de ganache de chocolate e chantilly fresco servida em bandeja com filete dourado na Le Flower cafeteria',
    },
    {
      id: 'bolo-mesclado',
      url: businessData.fotos[1].url,
      titulo: 'Bolos Caseiros & Vitrine de Doces',
      subtitulo: 'Massas fofinhas de confeitaria diante da vitrine iluminada',
      alt: 'Bolo mesclado artesanal em destaque no primeiro plano com a vitrine iluminada de salgados e croissants ao fundo na Le Flower cafeteria',
    },
    {
      id: 'fachada-botanica',
      url: businessData.fotos[2].url,
      titulo: 'Fachada Botânica na Rua 6, Nº 01',
      subtitulo: 'Mural de cafeeiros em flor, veios dourados e xícaras suspensas',
      alt: 'Entrada externa da Le Flower cafeteria na Rua 6 número 01 com paredes terrosas com veios dourados, painéis pintados de pés de café, xícaras coloridas suspensas e plantas verdes',
    },
    {
      id: 'interior-rogerio',
      url: businessData.fotos[3].url,
      titulo: 'Salão Principal & Chef Rogério',
      subtitulo: 'Lustre globo dourado, mural de lírios botânicos e atendimento no balcão',
      alt: 'Interior acolhedor da Le Flower cafeteria com lustre dourado de globos acesos, mesa de madeira com bule de porcelana e cardápio, mural pintado com lírios verdes e brancos e Rogério no balcão',
    },
    {
      id: 'brasao-leflower',
      url: businessData.fotos[4].url,
      titulo: 'Brasão Dourado Le Flower',
      subtitulo: 'Identidade de alta confeitaria com toque de chef e xícara fumegante',
      alt: 'Letreiro curvo externo da Le Flower cafeteria exibindo o brasão dourado com chapéu de chef, ramos botânicos e xícara de café',
    },
    {
      id: 'vitrine-salgados',
      url: businessData.fotos[5].url,
      titulo: 'Croissants & Salgados Dourados',
      subtitulo: 'Croissants folhados, empadinhas, pastéis assados e quibes quentinhos',
      alt: 'Vitrine aquecida da Le Flower cafeteria repleta de croissants dourados, empadinhas, pastéis assados, quibes e roscas artesanais',
    },
  ],
  menuItems: [
    {
      id: 'cafes-chocolate',
      categoria: 'Bebidas Signature',
      titulo: 'Cafés Especiais & Chocolate Cremoso',
      descricao:
        'Extrações encorpadas, taças com borda de ganache de chocolate e chantilly fresco elogiadas como um dos melhores cafés da cidade.',
      destaqueReview: '“Um dos melhores cafés que já tomei” · Silvynha Passarinho',
      tags: ['Café Espresso', 'Chocolate Cremoso', 'Chantilly & Ganache'],
      imageUrl: businessData.fotos[0].url,
      imageAlt:
        'Taça alta com chocolate cremoso e café especial com borda de ganache e chantilly na Le Flower cafeteria',
      featured: true,
    },
    {
      id: 'croissants-salgados',
      categoria: 'Fornada & Vitrine',
      titulo: 'Croissants & Salgados Artesanais',
      descricao:
        'Croissant de chocolate e massa folhada dourada ao lado de empadinhas, pastéis assados, quibes e salgados de preparo cuidadoso.',
      destaqueReview: '“Comprei um croissant de chocolate” · Cristiane Meiry',
      tags: ['Croissant de Chocolate', 'Empadinhas', 'Salgados Assados'],
      imageUrl: businessData.fotos[5].url,
      imageAlt:
        'Vitrine aquecida com croissants dourados, empadinhas, pastéis assados e quibes na Le Flower cafeteria',
      featured: false,
    },
    {
      id: 'bolos-trufas',
      categoria: 'Confeitaria Fina',
      titulo: 'Bolos Recheados, Trufas & Doces',
      descricao:
        'Bolos artesanais bem servidos, trufas finas e doces preparados com bom custo benefício e apresentação impecável.',
      destaqueReview: '“Trufas, salgados, com doces, tudo muito requintado” · Silvynha Passarinho',
      tags: ['Trufas Artesanais', 'Bolos da Casa', 'Doces Finos'],
      imageUrl: businessData.fotos[1].url,
      imageAlt:
        'Bolo artesanal mesclado e doces de vitrine servidos na Le Flower cafeteria em Goiânia',
      featured: false,
    },
  ],
  faqItems: [
    {
      id: 'faq-endereco',
      pergunta: 'Onde fica a Le Flower cafeteria em Goiânia?',
      resposta:
        'Estamos localizados na R. 6, 01, no Setor Central de Goiânia, GO, CEP 74023-030, em um espaço reservado e aconchegante com fácil acesso pelo Centro.',
    },
    {
      id: 'faq-horario',
      pergunta: 'Qual é o horário de funcionamento?',
      resposta:
        'Atendemos de segunda-feira a sábado, das 10:00 às 18:30. Aos domingos a cafeteria permanece fechada.',
    },
    {
      id: 'faq-reserva',
      pergunta: 'Como posso agendar uma mesa ou encomendar pelo WhatsApp?',
      resposta:
        'Basta clicar em qualquer botão Agendar Mesa no WhatsApp ou enviar mensagem para (62) 96000-6950 para reservar seu horário com atendimento direto.',
    },
    {
      id: 'faq-cardapio',
      pergunta: 'Quais são os destaques do cardápio segundo os clientes?',
      resposta:
        'Os visitantes elogiam os cafés especiais, o chocolate cremoso, os croissants de chocolate e tradicionais, as trufas, os bolos artesanais e os salgados servidos sempre fresquinhos.',
    },
  ],
};

export const instagramGallery = [
  siteData.photoCatalog[0],
  siteData.photoCatalog[5],
  siteData.photoCatalog[1],
  siteData.photoCatalog[2],
];
