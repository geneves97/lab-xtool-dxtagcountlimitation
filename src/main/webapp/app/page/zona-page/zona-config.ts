import { StandardNgConfig } from '../../@core/template/standard-ng-config';

export const ZonaConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/zona',
  onSuccessDelete: 'Exclusão de Zona realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Zona?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Zona',
  },
  detailModule: {
    pageTitle: 'Detalhes de Zona',
  },
};
