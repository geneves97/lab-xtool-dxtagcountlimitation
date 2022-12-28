import { StandardNgConfig } from '../../@core/template/standard-ng-config';

export const PontoTransmissaoConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/ponto-transmissao',
  onSuccessDelete: 'Exclusão de Ponto de Transmissão realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Ponto de Transmissão?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Ponto de Transmissão',
  },
  detailModule: {
    pageTitle: 'Detalhes de Ponto de Transmissão',
  },
  editModule: {
    editTitle: 'Edição de Ponto de Transmissão',
    createTitle: 'Criação de Ponto de Transmissão',
    onSuccessEditMessage: 'Ponto de Transmissão atualizado com sucesso.',
    onSuccessCreateMessage: 'Ponto de Transmissão atualizado com sucesso.',
  },
};
