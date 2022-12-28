import { StandardNgConfig } from '../../@core/template/standard-ng-config';

export const SecaoConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/secao',
  onSuccessDelete: 'Exclusão de Seção realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Seção?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Seção',
  },
  detailModule: {
    pageTitle: 'Detalhes de Seção',
  },
};
