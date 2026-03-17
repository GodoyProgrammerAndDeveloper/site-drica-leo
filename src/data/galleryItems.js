// Dados da galeria - separados para melhor manutenção
export const galleryMediaItems = [
  // VÍDEOS
  {
    id: 1,
    type: 'video',
    thumbnail: '/images/logo.png',
    fallbackThumbnail: '/images/logo.png',
    videoUrl: '/videos/video1.mp4',
    title: 'Colmeia Depois',
    description: 'Organização com colmeias - resultado final',
    category: 'organizacao'
  },
  {
    id: 2,
    type: 'video',
    thumbnail: '/images/logo.png',
    fallbackThumbnail: '/images/logo.png',
    videoUrl: '/videos/video2.mp4',
    title: 'Colmeia Antes',
    description: 'Organização com colmeias - estado inicial',
    category: 'organizacao'
  },
  {
    id: 3,
    type: 'video',
    thumbnail: '/images/logo.png',
    fallbackThumbnail: '/images/logo.png',
    videoUrl: '/videos/video3.mp4',
    title: 'Sala Antes',
    description: 'Sala antes da organização',
    category: 'salas'
  },
  {
    id: 4,
    type: 'video',
    thumbnail: '/images/logo.png',
    fallbackThumbnail: '/images/logo.png',
    videoUrl: '/videos/video4.mp4',
    title: 'Sala Depois',
    description: 'Sala após organização completa',
    category: 'salas'
  },
  // IMAGENS
  {
    id: 5,
    type: 'image',
    image: '/images/Cabide Roupoas Masculinas.jpeg',
    title: 'Guarda-roupas Masculino',
    description: 'Organização completa de guarda-roupas',
    category: 'guarda-roupas'
  },
  {
    id: 6,
    type: 'image',
    image: '/images/Louça organizada_01.jpeg',
    title: 'Louça Organizada',
    description: 'Organização de louças',
    category: 'cozinha'
  },
  {
    id: 7,
    type: 'image',
    image: '/images/Papelaria Depois.jpeg',
    title: 'Papelaria Organizada',
    description: 'Papelaria organizada',
    category: 'escritorio'
  },
  {
    id: 8,
    type: 'image',
    image: '/images/Organização comeias frente Depois.jpeg',
    title: 'Organização com Colmeias',
    description: 'Técnica de organização com colmeias',
    category: 'organizacao'
  },
  {
    id: 9,
    type: 'image',
    image: '/images/Roupas Depois.jpeg',
    title: 'Roupas Organizadas',
    description: 'Depois da organização',
    category: 'guarda-roupas'
  },
  {
    id: 10,
    type: 'image',
    image: '/images/Sapatos Depois.jpeg',
    title: 'Sapatos Organizados',
    description: 'Sapatos organizados',
    category: 'sapatos'
  }
];

export const galleryCategories = [
  { id: 'todos', label: 'Todos', icon: '📋' },
  { id: 'guarda-roupas', label: 'Guarda-roupas', icon: '👗' },
  { id: 'cozinha', label: 'Cozinhas', icon: '🍳' },
  { id: 'escritorio', label: 'Escritórios', icon: '💻' },
  { id: 'organizacao', label: 'Organização', icon: '✨' },
  { id: 'sapatos', label: 'Sapatos', icon: '👠' },
  { id: 'depoimentos', label: 'Depoimentos', icon: '💬' }
];
