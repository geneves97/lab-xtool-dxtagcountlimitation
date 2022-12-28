import { StandardNgConfig } from '../../@core/template/standard-ng-config';

export const LocalVotacaoConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/local-votacao',
  onSuccessDelete: 'Exclusão de Local de Votação realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Local de Votação?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Local de Votação',
  },
  detailModule: {
    pageTitle: 'Detalhes de Local de Votação',
  },
};
