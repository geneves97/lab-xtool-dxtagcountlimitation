import { StandardNgConfig } from '../../@core/template/standard-ng-config';

export const PessoaConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/pessoa',
  onSuccessDelete: 'Exclusão de Pessoa realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Pessoa?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Pessoa',
  },
  detailModule: {
    pageTitle: 'Detalhes de Pessoa',
  },
  editModule: {
    editTitle: 'Edição de Pessoa',
    createTitle: 'Criação de Pessoa',
    onSuccessEditMessage: 'Pessoa atualizado com sucesso.',
    onSuccessCreateMessage: 'Pessoa atualizado com sucesso.',
  },
};
