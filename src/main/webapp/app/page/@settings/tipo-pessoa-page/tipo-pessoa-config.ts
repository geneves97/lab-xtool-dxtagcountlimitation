import { StandardNgConfig } from '../../../@core/template/standard-ng-config';

export const TipoPessoaConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/tipo-pessoa',
  onSuccessDelete: 'Exclusão de Tipo de Pessoa realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Tipo de Pessoa?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Tipo de Pessoa',
  },
  detailModule: {
    pageTitle: 'Detalhes de Tipo de Pessoa',
  },
  editModule: {
    editTitle: 'Edição de Tipo de Pessoa',
    createTitle: 'Criação de Tipo de Pessoa',
    onSuccessEditMessage: 'Tipo de Pessoa atualizado com sucesso.',
    onSuccessCreateMessage: 'Tipo de Pessoa atualizado com sucesso.',
  },
};
