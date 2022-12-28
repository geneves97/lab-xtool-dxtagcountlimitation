import { StandardNgConfig } from '../../../@core/template/standard-ng-config';

export const SituacaoPontoTransmissaoConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/situacao-ponto-transmissao',
  onSuccessDelete: 'Exclusão de Status da Situação do Ponto de Transmissão realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Status da Situação do Ponto de Transmissão?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Status da Situação do Ponto de Transmissão',
  },
  detailModule: {
    pageTitle: 'Detalhes de Status da Situação do Ponto de Transmissão',
  },
};
