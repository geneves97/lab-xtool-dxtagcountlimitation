import { StandardNgConfig } from '../../../@core/template/standard-ng-config';

export const TipoPontoTransmissaoConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/tipo-ponto-transmissao',
  onSuccessDelete: 'Exclusão de Tipo de Ponto de Transmissão realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Tipo de Ponto de Transmissão?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Tipo de Ponto de Transmissão',
  },
  detailModule: {
    pageTitle: 'Detalhes de Tipo de Ponto de Transmissão',
  },
  editModule: {
    editTitle: 'Edição de Tipo de Ponto de Transmissão',
    createTitle: 'Criação de Tipo de Ponto de Transmissão',
    onSuccessEditMessage: 'Tipo de Ponto de Transmissão atualizado com sucesso.',
    onSuccessCreateMessage: 'Tipo de Ponto de Transmissão atualizado com sucesso.',
  },
};
