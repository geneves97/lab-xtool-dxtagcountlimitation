import { StandardNgConfig } from '../../@core/template/standard-ng-config';

export const MunicipioConfig: StandardNgConfig = {
  idAttribute: 'id',
  routePath: '/municipio',
  onSuccessDelete: 'Exclusão de Municipio realizada com sucesso',
  confirmDeleteMessage: 'Deseja mesmo excluir o Municipio?',
  isReadOnly: false,
  listModule: {
    pageTitle: 'Listagem de Municipio',
  },
  detailModule: {
    pageTitle: 'Detalhes de Municipio',
  },
};
