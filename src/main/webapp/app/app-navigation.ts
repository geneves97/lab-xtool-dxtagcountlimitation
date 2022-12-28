/**
 * Array de itens de menu com a estrutura usada na montagem do componente do menu lateral (Treview)
 * @see src/app/@core/layout/components/side-navigation-menu
 * @see https://js.devexpress.com/Documentation/20_2/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library
 */
export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Relatórios',
    path: '/relatorios',
    icon: 'file'
  },
  {
    text: 'Configurações',
    icon: 'preferences',
    items: []
  },
];
