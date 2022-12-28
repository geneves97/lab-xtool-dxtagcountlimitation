/**
 * Array de itens de menu com a estrutura usada na montagem do componente do menu lateral (Treview)
 * @see src/app/@core/layout/components/side-navigation-menu
 * @see https://js.devexpress.com/Documentation/20_2/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library
 */
export const navigation = [
  {
    text : 'Home',
    path : '/home',
    icon : 'home'
  },
  {
    text : 'Zona',
    path : '/zona',
    icon : 'activefolder',
    data : {
      permissions : {
        only : 'zona:resource:view'
      }
    }
  },
  {
    text : 'Seção',
    path : '/secao',
    icon : 'activefolder',
    data : {
      permissions : {
        only : 'secao:resource:view'
      }
    }
  },
  {
    text : 'Ponto de Transmissão',
    path : '/ponto-transmissao',
    icon : 'activefolder',
    data : {
      permissions : {
        only : 'ponto-transmissao:resource:view'
      }
    }
  },
  {
    text : 'Pessoa',
    path : '/pessoa',
    icon : 'activefolder',
    data : {
      permissions : {
        only : 'pessoa:resource:view'
      }
    }
  },
  {
    text : 'Municipio',
    path : '/municipio',
    icon : 'activefolder',
    data : {
      permissions : {
        only : 'municipio:resource:view'
      }
    }
  },
  {
    text : 'Local de Votação',
    path : '/local-votacao',
    icon : 'activefolder',
    data : {
      permissions : {
        only : 'local-votacao:resource:view'
      }
    }
  },
  {
    text : 'Relatórios',
    path : '/relatorios',
    icon : 'file'
  },
  {
    text : 'Configurações',
    icon : 'preferences',
    items : [
      {
        text : 'Tipo de Pessoa',
        path : '/tipo-pessoa',
        data : {
          permissions : {
            only : 'tipo-pessoa:resource:view'
          }
        }
      },
      {
        text : 'Tipo de Ponto de Transmissão',
        path : '/tipo-ponto-transmissao',
        data : {
          permissions : {
            only : 'tipo-ponto-transmissao:resource:view'
          }
        }
      },
      {
        text : 'Status da Situação do Ponto de Transmissão',
        path : '/situacao-ponto-transmissao',
        data : {
          permissions : {
            only : 'situacao-ponto-transmissao:resource:view'
          }
        }
      }
    ]
  }
];
